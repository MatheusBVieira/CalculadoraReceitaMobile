import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, ScrollView } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import api from '../../services/api';
import mapToObj from './utils' 

interface ItemProps {
    nome: string
}

function CadastraReceita() {
    const [nome, setNome] = useState('');
    const [quantidadeProduzida, setQuantidadeProduzida] = useState('');
    const [embalagem, setEmbalagem] = useState('');
    const [ingredientes, setIngredientes] = useState(new Map())

    const [listaDeEmbalagem, setListaDeEmbalagem] = useState([]);
    const [listaDeIngrediente, setListaDeIngrediente] = useState([]);

    const [scheduleItems, setScheduleItems] = useState([
        { idIngrediente: 0, quantidadeUsada: 0 }
    ]);
    
    const { navigate } = useNavigation();

    function vaiParaListagem() {
        navigate('Receitas', {nome : nome});
    }

    const transformaScheduleDeIngredientesParaPost = () => {
        ingredientes.clear()
        for (var i = 0; i < scheduleItems.length; i++) {
            ingredientes.set(scheduleItems[i].quantidadeUsada, scheduleItems[i].idIngrediente)
        }
        return ingredientes.entries();
    }


    function setScheduleItemValue(position: number, field: string, value: string){
        const updateScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value };
            }

            return scheduleItem;
        });

        setScheduleItems(updateScheduleItems);
    }
    
    const listaEmbalagem = (() => {
        api.get('embalagem/receita').then(response => {
            setListaDeEmbalagem(response.data['content'])
        })
    })

    const listaIngredientes = (() => {
        api.get('ingrediente/receita').then(response => {
            setListaDeIngrediente(response.data['content'])
        })
    })

    const options = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    
    const insereReceita = (() => {
        console.log(transformaScheduleDeIngredientesParaPost())

        const json = JSON.stringify({
            nome: nome,
            quantidadeProduzida: quantidadeProduzida,
            idEmbalagem: parseInt(embalagem),
            ingredientes: mapToObj(transformaScheduleDeIngredientesParaPost())
        })

        console.log(json)

        api.post('receita', json, options).then(vaiParaListagem)
    })
    
    const placeholderEmbalagem = {
        label: 'Selecione uma embalagem...',
        value: null,
        color: '#9EA0A4',
    };

    const placeholderIngrediente = {
        label: 'Selecione um ingrediente...',
        value: null,
        color: '#9EA0A4',
    };

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { idIngrediente: 0, quantidadeUsada: 0 }
        ]);
    }

    useEffect(() => {
        listaEmbalagem();
        listaIngredientes();
    }, [])


    return (
        <ScrollView>
            <View>
                <View style={styles.inputContainer}>
                    <FloatingLabelInput
                        multiline={true}
                        containerStyles={styles.FloatInputContainer}
                        labelStyles={styles.FloatInputLabel}
                        inputStyles={styles.FloatInput}
                        label="Nome"
                        value={nome}
                        blurOnSubmit={false}
                        showCountdown={true}
                        onChangeText={value => setNome(value)} 
                    />
                </View>

                <View style={styles.inputContainerFinal}>
                    <FloatingLabelInput
                        label="Quantidade Produzida"
                        value={quantidadeProduzida}
                        containerStyles={styles.FloatInputContainer}
                        labelStyles={styles.FloatInputLabel}
                        inputStyles={styles.FloatInput}
                        mask="9999"
                        keyboardType="numeric"
                        onChangeText={value => setQuantidadeProduzida(value)} 
                    />
                </View>

                <RNPickerSelect
                    placeholder={placeholderEmbalagem}
                    onValueChange={(value) => setEmbalagem(value)}
                    useNativeAndroidPickerStyle={false}
                    style={pickerSelectStyles}
                    items={ listaDeEmbalagem }
                />

                <View>
                    <View style={styles.containerButton}>
                        <Button color='#000' title="+ Novo Ingrediente" onPress={addNewScheduleItem} />
                    </View>
                    {scheduleItems.map((scheduleItem, index) => {
                            return (
                                    <View style={styles.scheduleContent}>

                                        <View>
                                            <RNPickerSelect
                                                placeholder={placeholderIngrediente}
                                                onValueChange={e => setScheduleItemValue(index, 'idIngrediente', e)} 
                                                useNativeAndroidPickerStyle={false}
                                                style={pickerSelectStylesSchedule}
                                                items={ listaDeIngrediente }
                                            />
                                        </View>

                                        <View style={styles.inputScheduleContainer}>
                                            <FloatingLabelInput
                                                label="Quantidade"
                                                value={scheduleItems[index].quantidadeUsada.toString()}
                                                containerStyles={styles.FloatInputContainer}
                                                labelStyles={styles.FloatInputLabel}
                                                inputStyles={styles.FloatInput}
                                                keyboardType="numeric"
                                                onChangeText={e => setScheduleItemValue(index, 'quantidadeUsada', e)} 
                                            />
                                        </View>
                                        
                                    </View>
                                )
                            })}

                </View>

                <View style={styles.containerButton}>
                    <Button color='#000' title="Salvar Receita" onPress={insereReceita} />
                </View>

            </View>
        </ScrollView>
    );
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      marginHorizontal: 8,
      marginBottom: 8,
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 2,
      borderColor: '#000',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
});

const pickerSelectStylesSchedule = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      width: 250,
      marginHorizontal: 8,
      marginBottom: 8,
      marginTop: 2.5,
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderWidth: 2,
      borderColor: '#000',
      borderRadius: 8,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
});

export default CadastraReceita;
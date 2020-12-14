import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Button, StyleSheet } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import RNPickerSelect from 'react-native-picker-select';

import api from '../../services/api'

import styles from './styles'
import { color } from 'react-native-reanimated';

function CadastraIngrediente() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [unidadeMedida, setunidadeMedida] = useState('');

    const { navigate } = useNavigation();

    const options = {
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const insereIngrediente = (() => {
        api.post('ingrediente', JSON.stringify({
            nome: nome,
            preco: preco,
            quantidade: quantidade,
            unidadeMedida: unidadeMedida
        }), options).then(vaiParaListagem)
    })

    function vaiParaListagem() {
        navigate('Listagem Estoque');
    }

    const placeholder = {
        label: 'Selecione a unidade de medida...',
        value: null,
        color: '#9EA0A4',
    };

    return (
        <View style={styles.container}>
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
            <View style={styles.inputContainer}>
                <FloatingLabelInput
                    label="Preço"
                    value={preco}
                    containerStyles={styles.FloatInputContainer}
                    labelStyles={styles.FloatInputLabel}
                    inputStyles={styles.FloatInput}
                    keyboardType="numeric"
                    onChangeText={value => setPreco(value)} 
                />
            </View>

            <View style={styles.inputContainerFinal}>
                <FloatingLabelInput
                    label="Quantidade"
                    value={quantidade}
                    containerStyles={styles.FloatInputContainer}
                    labelStyles={styles.FloatInputLabel}
                    inputStyles={styles.FloatInput}
                    mask="9999"
                    keyboardType="numeric"
                    onChangeText={value => setQuantidade(value)} 
                />
            </View>

            <RNPickerSelect
                placeholder={placeholder}
                onValueChange={(value) => setunidadeMedida(value)}
                useNativeAndroidPickerStyle={false}
                style={pickerSelectStyles}
                items={[
                    { label: 'Kilo', value: 'KILO' },
                    { label: 'Gramas', value: 'GRAMAS' },
                    { label: 'Unidade', value: 'UNIDADE' },
                ]}
            />
                
            <View style={styles.containerButton}> 
                <Button color='#000' title="Salvar Ingrediente" onPress={insereIngrediente}/>
            </View>
        </View>
        
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

export default CadastraIngrediente;
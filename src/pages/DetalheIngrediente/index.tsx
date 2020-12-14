import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import RNPickerSelect from 'react-native-picker-select';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native'

import api from '../../services/api'
import BotaoEdita from '../../components/BotaoEdita';

import styles from './styles';

interface IngredienteDetalhesProps {
    id: number
    nome: string
    preco: number
    quantidade: number
    unidadeMedida: string
}

function DetalheIngrediente() {
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [unidadeMedida, setUnidadeMedida] = useState('');

    const { navigate } = useNavigation();
    const route = useRoute()
    const params = route.params as IngredienteDetalhesProps

    const options = {
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const atualizaIngrediente = (() => {
        api.put('ingrediente/' + id, JSON.stringify({
            nome: nome,
            preco: preco,
            quantidade: quantidade,
            unidadeMedida: unidadeMedida
        }), options).then(vaiParaListagem)
    });

    function vaiParaListagem() {
        navigate('Listagem Estoque');
    };

    function populaInput() {
        setId(params.id.toString())
        setNome(params.nome)
        setPreco(params.preco.toString())
        setQuantidade(params.quantidade.toString())
        setUnidadeMedida(params.unidadeMedida)
    }

    useEffect(() => {
        populaInput();
    }, [params.id])

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

            <View style={styles.inputContainer}>
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

            <View style={styles.inputContainerFinal}>
            <FloatingLabelInput
                    multiline={false}
                    containerStyles={styles.FloatInputContainer}
                    labelStyles={styles.FloatInputLabel}
                    inputStyles={styles.FloatInput}
                    label="Unidade De Medida"
                    value={unidadeMedida[0] + unidadeMedida.substr(1).toLowerCase() }
                    blurOnSubmit={false}
                    showCountdown={true}
                />
            </View>

            <BorderlessButton 
                style={styles.botao} 
                onPress={atualizaIngrediente}
            >
                <Feather name="edit-3" size={30} color="#fefefe" />
            </BorderlessButton>

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

export default DetalheIngrediente;
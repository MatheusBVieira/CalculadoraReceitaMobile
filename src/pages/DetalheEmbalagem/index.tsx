import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 

import api from '../../services/api'
import BotaoEdita from '../../components/BotaoEdita';
import { useRoute, useNavigation } from '@react-navigation/native'
import styles from './styles';
interface EmbalagemDetalhesProps {
    id: number
    nome: string
    preco: number
    quantidade: number
}

function DetalheEmbalagem() {
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');
    
    const { navigate } = useNavigation();
    const route = useRoute()
    const params = route.params as EmbalagemDetalhesProps

    const options = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    
    const atualizaEmbalagem = (() => {
        api.put('embalagem/' + id, JSON.stringify({
            nome: nome,
            preco: preco,
            quantidade: quantidade
        }), options).then(vaiParaListagem)
    })
    

    function vaiParaListagem() {
        navigate('Listagem Estoque');
    }

    function populaInput() {
        setId(params.id.toString())
        setNome(params.nome)
        setPreco(params.preco.toString())
        setQuantidade(params.quantidade.toString())
    }

    useEffect(() => {
        populaInput();
      }, [params.id])

    return (
        <View style={styles.container}>
            <View style={styles.input}>
                <FloatingLabelInput
                    multiline={true}
                    label="Nome"
                    value={nome}
                    blurOnSubmit={false}
                    showCountdown={true}
                    onChangeText={value => setNome(value)} 
                />
            </View>
            <View style={styles.input}>
                <FloatingLabelInput
                    label="Preço"
                    value={preco}
                    keyboardType="numeric"
                    onChangeText={value => setPreco(value)} 
                />
            </View>

            <View style={styles.input}>
                <FloatingLabelInput
                    label="Quantidade"
                    value={quantidade}
                    mask="9999"
                    keyboardType="numeric"
                    onChangeText={value => setQuantidade(value)} 
                />

            </View>
            <BorderlessButton 
                style={styles.botao} 
                onPress={atualizaEmbalagem}
            >
                <Feather name="edit-3" size={30} color="#fefefe" />
            </BorderlessButton>

        </View>
    );
}

export default DetalheEmbalagem;
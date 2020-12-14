import React, { useState, useEffect } from 'react';
import { View, Button} from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'; 
import { useRoute, useNavigation } from '@react-navigation/native'

import api from '../../services/api'
import BotaoEdita from '../../components/BotaoEdita';
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

    const deletaEmbalagem = (() => {
        api.delete('embalagem/' + id).then(vaiParaListagem)
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
            <View style={styles.inputContainer}>
                <FloatingLabelInput
                    multiline={true}
                    label="Nome"
                    value={nome}
                    containerStyles={styles.FloatInputContainer}
                    labelStyles={styles.FloatInputLabel}
                    inputStyles={styles.FloatInput}
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

            <View style={styles.containerButton}> 
                <Button color="#000000" title="Deletar Embalagem" onPress={deletaEmbalagem}/>
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
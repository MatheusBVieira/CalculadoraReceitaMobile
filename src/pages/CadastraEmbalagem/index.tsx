import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView , Text, View, Button } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';

import api from '../../services/api'
import styles from './styles'
import ListaEmbalagens from '../ListaEmbalagens';

function CadastraEmbalagem() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const { navigate } = useNavigation();

    const options = {
        headers: {
            'Content-Type': 'application/json',
        }
    };

    const insereEmbalagem = (() => {
        api.post('embalagem', JSON.stringify({
            nome: nome,
            preco: preco,
            quantidade: quantidade
        }), options).then(vaiParaListagem)
    })

    function vaiParaListagem() {
        navigate('Listagem Estoque');
    }

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

            <View style={styles.inputFinal}>
                <FloatingLabelInput
                    label="Quantidade"
                    value={quantidade}
                    mask="9999"
                    keyboardType="numeric"
                    onChangeText={value => setQuantidade(value)} 
                />

            </View>
                
            <View style={styles.containerButton}> 
                <Button title="Salvar Embalagem" onPress={insereEmbalagem}/>
            </View>
        </View>
        
    );
}

export default CadastraEmbalagem;
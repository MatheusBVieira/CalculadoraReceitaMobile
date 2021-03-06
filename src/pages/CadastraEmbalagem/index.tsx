import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Button } from 'react-native';
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
                    containerStyles={styles.FloatInputContainer}
                    labelStyles={styles.FloatInputLabel}
                    inputStyles={styles.FloatInput}
                    blurOnSubmit={false}
                    showCountdown={true}
                    onChangeText={value => setNome(value)} 
                />
            </View>
            <View style={styles.input}>
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

            <View style={styles.inputFinal}>
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
                <Button color="#000000" title="Salvar Embalagem" onPress={insereEmbalagem}/>
            </View>
        </View>
        
    );
}

export default CadastraEmbalagem;
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView , Text, View, Button } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';

import styles from './styles'
import ListaEmbalagens from '../ListaEmbalagens';

function CadastraEmbalagem() {
    const [nome, setNome] = useState('');
    const [preco, setPreco] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const { navigate } = useNavigation();

    function vaiParaListagem() {
        navigate('Listagem Estoque');
    }

    return (
        <><Text style={styles.texto}>Cadastro de embalagem</Text>
        <ScrollView
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={{
                flex: 1,
                justifyContent: 'flex-start',
                alignItems: 'stretch',
                margin: 16,
            }}
        >
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
                    mask="99.99"
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
                

            <Button
                title="Salvar Embalagem"
                onPress={() => fetch('http://192.168.0.99:8080/embalagem', {
                    method: 'POST',
                    headers: {
                      'Accept': 'application/x-www-form-urlencoded',
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nome: nome,
                        preco: preco,
                        quantidade: quantidade
                    })
               } ).then(vaiParaListagem)
            }
            />
        </ScrollView></>

        
    );
}

export default CadastraEmbalagem;
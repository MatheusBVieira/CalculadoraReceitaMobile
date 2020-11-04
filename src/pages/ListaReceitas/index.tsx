import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

function ListaReceitas() {
    const { navigate } = useNavigation();

    function vaiParaCadastraReceita() {
        navigate('CadastraReceita')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Lista Receitas</Text>
            <BorderlessButton style={styles.botao} onPress={vaiParaCadastraReceita}></BorderlessButton>
        </View>
    );
}

export default ListaReceitas;
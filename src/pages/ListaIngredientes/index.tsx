import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

function ListaIngredientes() {
    const { navigate } = useNavigation();

    function vaiParaCadastraIngrediente() {
        navigate('CadastraIngrediente')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Lista Ingredientes</Text>
            <BorderlessButton style={styles.botao} onPress={vaiParaCadastraIngrediente}></BorderlessButton>
        </View>
    );
}

export default ListaIngredientes;
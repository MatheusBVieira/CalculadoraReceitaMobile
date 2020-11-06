import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import {Ionicons} from '@expo/vector-icons';

import styles from './styles';

function ListaEmbalagens() {
    const { navigate } = useNavigation();

    function vaiParaCadastraEmbalagem() {
        navigate('Cadastra Embalagem');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Lista Embalagens</Text>
            <BorderlessButton style={styles.botao} onPress={vaiParaCadastraEmbalagem}>
                <Ionicons name="ios-add" size={50} color="#fefefe" />
            </BorderlessButton>
        </View>
    );
}

export default ListaEmbalagens;
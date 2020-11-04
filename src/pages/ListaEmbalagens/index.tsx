import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

function ListaEmbalagens() {
    const { navigate } = useNavigation();

    function vaiParaCadastraEmbalagem() {
        navigate('CadastraEmbalagem');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Lista Embalagens</Text>
            <BorderlessButton style={styles.botao} onPress={vaiParaCadastraEmbalagem}></BorderlessButton>
        </View>
    );
}

export default ListaEmbalagens;
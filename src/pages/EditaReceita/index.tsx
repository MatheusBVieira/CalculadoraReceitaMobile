import React from 'react';
import { Text, View } from 'react-native';
import BotaoEdita from '../../components/BotaoEdita';
import styles from './styles';

function EditaReceita() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Edita Receita</Text>
            <BotaoEdita para='Lista Receita' />
        </View>
    )
}

export default EditaReceita;
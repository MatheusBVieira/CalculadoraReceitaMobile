import React from 'react';
import { View, Text } from 'react-native';

import BotaoEdita from '../../components/BotaoEdita';

import styles from './styles';

function DetalheReceita() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.texto}>Detalhe Receita</Text>
            </View>

            <BotaoEdita para='Edita Receita' />
        </View>
    );
}

export default DetalheReceita;
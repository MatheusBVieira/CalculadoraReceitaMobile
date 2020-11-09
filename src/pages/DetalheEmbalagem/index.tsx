import React from 'react';
import { View, Text } from 'react-native';

import BotaoEdita from '../../components/BotaoEdita';

import styles from './styles';

function DetalheEmbalagem() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.texto}>Detalhe Embalagem</Text>
            </View>

            <BotaoEdita para='Edita Embalagem' />
        </View>
    );
}

export default DetalheEmbalagem;
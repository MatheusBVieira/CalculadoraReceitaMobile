import React from 'react';
import { View, Text } from 'react-native';

import BotaoEdita from '../../components/BotaoEdita';

import styles from './styles';

function DetalheIngrediente() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.texto}>Detalhe ingrediente</Text>
            </View>

            <BotaoEdita para='Edita Ingrediente' />
        </View>
    );
}

export default DetalheIngrediente;
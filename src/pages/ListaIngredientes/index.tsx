import React from 'react';
import { View } from 'react-native';

import ItemPequeno from '../../components/ItemPequeno';
import BotaoCadastro from '../../components/BotaoCadastro';

import styles from './styles';

function ListaIngredientes() {
    return (
        <View style={styles.container}>
            <View>
                <ItemPequeno titulo='Farinha' preco={2} para='Detalhe Ingrediente'/>
                <ItemPequeno titulo='Chocolate em pó' preco={5} para='Detalhe Ingrediente'/>
            </View>

            <BotaoCadastro para='Cadastra Ingrediente' />
        </View>
    );
}

export default ListaIngredientes;
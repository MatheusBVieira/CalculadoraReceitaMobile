import React from 'react';
import { View } from 'react-native';

import styles from './styles';
import ItemPequeno from '../../components/ItemPequeno';
import BotaoCadastro from '../../components/BotaoCadastro';

function ListaEmbalagens() {
    return (
        <View style={styles.container}>
            <View>
                <ItemPequeno titulo='Marmita pequena' preco={3} para='Edita Embalagem' />
                <ItemPequeno titulo='Marmita média' preco={5} para='Edita Embalagem' />
            </View>

            <BotaoCadastro para='Cadastra Embalagem' />
        </View>
    );
}

export default ListaEmbalagens;
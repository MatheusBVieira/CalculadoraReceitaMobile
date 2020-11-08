import React from 'react';
import { View } from 'react-native';

import ItemReceita from '../../components/ItemReceita';
import BotaoCadastro from '../../components/BotaoCadastro';

import styles from './styles';

function ListaReceitas() {
    return (
        <View style={styles.container}>
            <View>
                <ItemReceita 
                    titulo='Brownie' 
                    ingredientes={['farinha', 'ovos', 'óleo', 'chocolate em pó']}
                    embalagem='marmita média' 
                />
            </View>

            <BotaoCadastro para='Cadastra Receita' />
        </View>
    );
}

export default ListaReceitas;
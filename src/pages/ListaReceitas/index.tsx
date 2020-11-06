import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import ItemReceita from '../../components/ItemReceita';

import {Ionicons} from '@expo/vector-icons';

import styles from './styles';

function ListaReceitas() {
    const { navigate } = useNavigation();

    function vaiParaCadastraReceita() {
        navigate('Cadastra Receita')
    }

    return (
        <View style={styles.container}>
            <View>
                <ItemReceita 
                    titulo='Brownie' 
                    ingredientes={['farinha', 'ovos', 'óleo', 'chocolate em pó']}
                    embalagem='marmita média' 
                />
            </View>

            <BorderlessButton style={styles.botao} onPress={vaiParaCadastraReceita}>
                <Ionicons name="ios-add" size={50} color="#fefefe" />
            </BorderlessButton>
        </View>
    );
}

export default ListaReceitas;
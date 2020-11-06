import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';

import {Ionicons} from '@expo/vector-icons';

import styles from './styles';
import ItemIngrediente from '../../components/ItemIngrediente';

function ListaIngredientes() {
    const { navigate } = useNavigation();

    function vaiParaEditaIngrediente() {
        navigate('Edita Ingrediente')
    }

    function vaiParaCadastraIngrediente() {
        navigate('Cadastra Ingrediente')
    }

    return (
        <View style={styles.container}>
            <View>
                <ItemIngrediente titulo='Farinha' preco={2} />
                <ItemIngrediente titulo='Chocolate em pó' preco={5} />
            </View>

            <BorderlessButton style={styles.botao} onPress={vaiParaCadastraIngrediente}>
                <Ionicons name="ios-add" size={50} color="#fefefe" />
            </BorderlessButton>
        </View>
    );
}

export default ListaIngredientes;
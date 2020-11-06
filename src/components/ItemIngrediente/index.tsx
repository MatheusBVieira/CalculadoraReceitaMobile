import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface ItemIngredienteProps {
    titulo: string;
    preco: number;
}

const ItemIngrediente: React.FC<ItemIngredienteProps> = ({ titulo, preco }) => {
    const { navigate } = useNavigation();

    function vaiParaEditaIngrediente() {
        navigate('Edita Ingrediente')
    }

    return (
        <View style={styles.itemIngrediente}>
            <RectButton onPress={vaiParaEditaIngrediente}>
                <Text style={styles.titulo}>{titulo}</Text>
                <View style={styles.corpoItem}>
                    <Text>Preço por unidade:</Text>
                    <Text>R$ {preco.toFixed(2)}</Text>
                </View>
            </RectButton>
        </View>
    )
}

export default ItemIngrediente;
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface ItemPequenoProps {
    titulo: string;
    preco: number;
    para: string;
}

const ItemPequeno: React.FC<ItemPequenoProps> = ({ titulo, preco, para }) => {
    const { navigate } = useNavigation();

    function vaiParaPaginaDeEdicao() {
        navigate(para)
    }

    return (
        <View style={styles.itemIngrediente}>
            <RectButton onPress={vaiParaPaginaDeEdicao}>
                <Text style={styles.titulo}>{titulo}</Text>
                <View style={styles.corpoItem}>
                    <Text>Preço por unidade:</Text>
                    <Text>R$ {preco.toFixed(2)}</Text>
                </View>
            </RectButton>
        </View>
    )
}

export default ItemPequeno;
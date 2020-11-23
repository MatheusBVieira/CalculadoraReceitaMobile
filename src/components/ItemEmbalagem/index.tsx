import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface ItemEmbalagemProps {
    titulo: string;
    preco: number;
    quantidade: number;
}

const ItemEmbalagem: React.FC<ItemEmbalagemProps> = ({ titulo, preco, quantidade }) => {
    const { navigate } = useNavigation();

    function vaiParaPaginaDeEdicao() {
        navigate('Detalhe Embalagem')
    }

    return (
        <View style={styles.itemEmbalagem}>
            <RectButton onPress={vaiParaPaginaDeEdicao}>
                <View style={styles.corpoItem}>
                    <Text style={styles.titulo}>{titulo}</Text>
                    <Text>Preço: R$ {preco}</Text>
                    <Text>Quantidade: {quantidade}</Text>
                </View>
            </RectButton>
        </View>
    )
}

export default ItemEmbalagem;
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface ItemEmbalagemProps {
    id : number
    nome: string
    preco: number
    quantidade: number
}

const ItemEmbalagem: React.FC<ItemEmbalagemProps> = (ItemEmbalagemProps ) => {
    const { navigate } = useNavigation();

    function vaiParaPaginaDeEdicao() {
        navigate('Detalhe Embalagem', ItemEmbalagemProps)
    }

    return (
        <View style={styles.itemEmbalagem}>
            <RectButton onPress={vaiParaPaginaDeEdicao}>
                <View style={styles.corpoItem}>
                    <Text style={styles.titulo}>{ItemEmbalagemProps.nome}</Text>
                    <Text>Preço: R$ {ItemEmbalagemProps.preco}</Text>
                    <Text>Quantidade: {ItemEmbalagemProps.quantidade}</Text>
                </View>
            </RectButton>
        </View>
    )
}

export default ItemEmbalagem;
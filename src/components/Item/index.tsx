import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface ItemProps {
    id : number
    nome: string
    preco: number
    quantidade: number
    unidadeMedida?: string
    para: string
}

const Item: React.FC<ItemProps> = ( ItemProps ) => {
    const { navigate } = useNavigation();

    function vaiParaPaginaDeEdicao() {
        navigate(ItemProps.para, ItemProps)
    }

    return (
        <View style={styles.itemContent}>
            <RectButton onPress={vaiParaPaginaDeEdicao}>
                <View style={styles.corpoItem}>
                    <Text style={styles.titulo}>{ItemProps.nome}</Text>
                    <Text>Preço: R$ {ItemProps.preco}</Text>
                    <Text>Quantidade: {ItemProps.quantidade}</Text>
                </View>
            </RectButton>
        </View>
    )
}

export default Item;
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface ItemReceitaProps {
    id: number;
    nome: string;
    ingredientes: Array<string>;
    quantidadeProduzida: number;
    precoIngredientes: number;
    precoEmbalagem : number;
    precoTotal: number;
    precoTotalPorUnidade: number;
    embalagem: string;
}

const ItemReceita: React.FC<ItemReceitaProps> = (ItemReceitaProps) => {
    const { navigate } = useNavigation();

    function vaiParaPaginaDeEdicao() {
        navigate('Detalhe Receita', ItemReceitaProps)
    }

    return (
        <View style={styles.itemContent}>
            <RectButton onPress={vaiParaPaginaDeEdicao}>
                <View style={styles.corpoItem}>
                    <Text style={styles.titulo}>{ItemReceitaProps.nome}</Text>
                    <Text>Preço Por Unidade: R$ {ItemReceitaProps.precoTotalPorUnidade}</Text>
                    <Text>Preço Total: R$ {ItemReceitaProps.precoTotal}</Text>
                    <Text>Quantidade Produzida: {ItemReceitaProps.quantidadeProduzida}</Text>
                </View>
            </RectButton>
        </View>

    )
}

export default ItemReceita;
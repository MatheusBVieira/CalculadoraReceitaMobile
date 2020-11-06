import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

interface ItemReceitaProps {
    titulo: string;
    ingredientes: Array<string>;
    embalagem: string;
}

const ItemReceita: React.FC<ItemReceitaProps> = ({ titulo, ingredientes, embalagem }) => {
    const { navigate } = useNavigation();

    function vaiParaEditaReceita() {
        navigate('Edita Receita')
    }

    return (
        <View style={styles.container}>
            <RectButton onPress={vaiParaEditaReceita}>
                <Text style={styles.tituloReceita}>{ titulo }</Text>

                <View style={styles.corpoReceita}>
                    <View>
                        {ingredientes.map((ingrediente => <Text style={styles.ingredienteReceita}>{ingrediente}</Text>))}
                    </View>
                    <View style={styles.corpoEsquerdoReceita}>
                        <Text style={styles.embalagemReceita}>{ embalagem }</Text>
                        <Text style={styles.custo}>R$ 10,00</Text>
                    </View>
                </View>
            </RectButton>
        </View>
    )
}

export default ItemReceita;
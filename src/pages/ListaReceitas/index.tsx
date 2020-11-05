import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text } from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import ItemReceita from '../../components/ItemReceita';

import styles from './styles';

function ListaReceitas() {
    const { navigate } = useNavigation();

    function vaiParaCadastraReceita() {
        navigate('CadastraReceita')
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

            <BorderlessButton style={styles.botao} onPress={vaiParaCadastraReceita}></BorderlessButton>
        </View>
    );
}

export default ListaReceitas;
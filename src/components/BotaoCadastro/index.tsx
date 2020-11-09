import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import {Ionicons} from '@expo/vector-icons';

import styles from './styles';

interface BotaoCadastroProps {
    para: string;
}

const BotaoCadastro: React.FC<BotaoCadastroProps> = ({ para }) => {
    const { navigate } = useNavigation();

    function vaiParaEdicao() {
        navigate(para)
    }

    return (
        <BorderlessButton style={styles.botao} onPress={vaiParaEdicao}>
            <Ionicons name="ios-add" size={50} color="#fefefe" />
        </BorderlessButton>
    )
}

export default BotaoCadastro;
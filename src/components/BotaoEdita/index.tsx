import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { BorderlessButton } from 'react-native-gesture-handler';

import { Feather } from '@expo/vector-icons'; 

import styles from './styles';

interface BotaoEditaProps {
    para: string;
}

const BotaoEdita: React.FC<BotaoEditaProps> = ({ para }) => {
    const { navigate } = useNavigation();

    function vaiParaCadastro() {
        navigate(para)
    }

    return (
        <BorderlessButton style={styles.botao} onPress={vaiParaCadastro}>
            <Feather name="edit-3" size={30} color="#fefefe" />
        </BorderlessButton>
    )
}

export default BotaoEdita;
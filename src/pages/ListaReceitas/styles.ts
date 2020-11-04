import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },

    texto: {
        fontSize: 20,
        color: '#000000'
    },

    botao: {
        backgroundColor: '#ff0033',
        width: 50,
        height: 50,
        alignSelf: 'flex-end',
        margin: 10,
        borderRadius: 50
    }
});

export default styles;
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },

    texto: {
        fontSize: 20
    },

    botao: {
        backgroundColor: '#ff0066',
        width: 60,
        height: 60,
        alignSelf: 'flex-end',
        margin: 20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;
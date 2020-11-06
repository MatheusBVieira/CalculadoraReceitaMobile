import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },

    itemIngrediente: {
        width: 200,
        margin: 10,
        alignSelf: 'center',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 8
    },

    titulo: {
        alignSelf: 'center',
        fontSize: 20
    },

    corpoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10
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
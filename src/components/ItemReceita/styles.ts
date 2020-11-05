import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        width: 300,
        margin: 10,
        alignSelf: 'center',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 8
    },

    tituloReceita: {
        fontSize: 20,
        alignSelf: 'center'
    },

    corpoReceita: {
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    ingredienteReceita: {
        marginLeft: 10
    },

    corpoEsquerdoReceita: {
        justifyContent: 'space-between'
    },

    embalagemReceita: {
        marginRight: 10
    },

    custo: {
        alignSelf: 'flex-end',
        marginRight: 20
    }
})

export default styles;


import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
    }
})

export default styles;
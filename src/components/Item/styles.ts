import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    itemContent: {
        width: Dimensions.get('window').width,
        marginTop: 8,
        marginLeft: 16,
        marginRight: 16,
        alignSelf: 'center',
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        borderRadius: 8,
    },

    titulo: {
        alignSelf: 'flex-start',
        fontSize: 20,
        marginLeft: -8
    },

    corpoItem: {
        justifyContent: 'space-between',
        marginLeft: 16,
        marginBottom: 8
    }
})

export default styles;
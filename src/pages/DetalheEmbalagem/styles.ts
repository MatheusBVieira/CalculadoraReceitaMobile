import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
    },

    containerButton: {
        marginHorizontal: 8,
    },

    texto: {
        fontSize: 20,
        color: '#000000',
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8
    },

    FloatInputContainer : {
        borderColor: "#000"
    },

    FloatInputLabel: {
        color:"#000"
    },

    FloatInput: {
        color:"#000"
    },
    
    inputContainer: {
        marginTop: 8,
        marginHorizontal: 8
    },

    inputContainerFinal: {
        marginVertical: 8,
        marginHorizontal: 8
    },

    inputSelect: {
        color: '#000'
    },

    botao: {
        backgroundColor: '#ff2948',
        width: 60,
        height: 60,
        alignSelf: 'flex-end',
        margin: 20,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: "absolute",
        bottom: 10,                                                    
        right: 10,
    }


});

export default styles;

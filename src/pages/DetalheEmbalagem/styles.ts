import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    texto: {
        fontSize: 20,
        color: '#000000',
        marginTop: 8,
        marginLeft: 8,
        marginRight: 8
        
    },

    input: {
        marginTop: 8,
        marginHorizontal: 8
    },

    botao: {
        backgroundColor: '#4169e1',
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
import { StyleSheet } from 'react-native';
import { varibale } from "./GlobalStyle"

export default Style = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: varibale.blue,
        position: "relative",
        opacity: 0.9,

    },
    bgImage: {
        width: "100%",
        height: "100%",
        flex: 1,
        justifyContent: "center",
    },
    formContainer: {
        height: "65%",
        width: "100%",

        // justifyContent: '',
        alignItems: 'center',
        backgroundColor: varibale.blue,
        borderTopLeftRadius: varibale.radius50,
        borderTopRightRadius: varibale.radius50,
        borderColor: "#ffffff22",
        borderWidth: 1,
        opacity: 0.9,
    },
    headImage: {
        height: "25%",
        width: "65%",
        justifyContent: "flex-end",
        opacity: 0.9,
        marginTop: "20%",
        //backgroundColor: "#000"
    },
    InputContainer: {
        height: 48,
        width: "90%",
        margin: 12,
        paddingHorizontal: 15,
        backgroundColor: varibale.blue,
        borderRadius: varibale.radiusFull,
        borderColor: varibale.light,
        borderWidth: 1,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
    },
    inputIcon: {
        width: 25,
        height: 25,
        marginHorizontal: 10
    },
    input: {
        flex: 1,
        color: varibale.white
    },
    headText: {
        color: varibale.white,
        fontSize: 40,
        fontWeight: "bold",
        marginTop: 40,
        marginBottom: 25,
        textAlign: "center"
    },
    btnContainer: {
        width: "100%",
        height: 130,
        marginTop: 20,
        marginBottom: 20,
        alignItems: "center",
        justifyContent: "space-between"
    },
    btnLogin: {
        width: "50%",
        backgroundColor: varibale.white,
        borderRadius: varibale.radiusFull,
        alignItems: "center",
        justifyContent: "center",
        elevation: 2,
    },
    btnTextLogin: {
        fontSize: 16,
        color: varibale.blue,
        marginVertical: 13
    },
    btnOutLogin: {
        width: "50%",
        borderColor: varibale.light,
        borderWidth: 1,
        borderRadius: varibale.radiusFull,
        alignItems: "center",
        justifyContent: "center",
    },
    btnTextOutLogin: {
        fontSize: 16,
        color: varibale.light,
        marginVertical: 13
    },
    orText: {
        color: varibale.white,
        marginBottom: 10
    }
});

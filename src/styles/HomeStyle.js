import { StyleSheet } from 'react-native';
import { varibale } from "./GlobalStyle"

export default Style = StyleSheet.create({
    titleContainer: {
        width: "100%",
        height: 200,
        backgroundColor: varibale.blue,
        borderBottomLeftRadius: varibale.radius50,
        borderBottomRightRadius: varibale.radius50,
        borderColor: "#ffffff22",
        borderWidth: 1,
    },
    homeImage: {
        height: 110,
        width: "60%",
        opacity: 1,
        marginTop: 70,
        alignSelf: "center"
    },
    title: {
        color: varibale.white,
        fontWeight: "700",
        fontSize: 36,
        textAlign: "center",
        marginTop: 10
    },
    formPlagiat: {
        marginTop: 80,
        alignSelf: "center",
        width: "90%",
        backgroundColor: varibale.blue,
        paddingVertical: 30,
        borderColor: varibale.light,
        borderRadius: varibale.radius25 * 1.3,
        borderWidth: 0,
        opacity: 0.9,
        alignItems: "center",
        elevation: 0
    },
    InputPlagiatContainer: {
        marginTop: 30,
        height: 250,
        borderRadius: varibale.radius25,
        textAlign: "center",
        backgroundColor: varibale.dark,
        borderWidth: 1,
    },
    InputPlagiat: {
        textAlign: "center",
        color: varibale.white,
        height: "100%",
        width: "100%",
    },
    inputPlagiatIcon: {
        backgroundColor: varibale.black,
        padding: 18,
        borderRadius: varibale.radiusFull,
        opacity: 1,
        position: "absolute",
        top: -43,
        borderWidth: 10,
        borderColor: varibale.light,
    },
    btnDocument: {
        marginTop: 15,
        width: "90%",
        flexDirection: "row",
        backgroundColor: varibale.dark,
    },
    btnPlagiatContainer: {
        marginTop: 30,
        marginBottom: 120,
        alignSelf: 'center',
        width: "85%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    btnCheckPlagiat: {
        width: '49%',

    },
    btnResetPlagiat: {
        width: '49%',
    },

})
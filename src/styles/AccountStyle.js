import { StyleSheet } from 'react-native';
import { varibale } from "./GlobalStyle"

export default Style = StyleSheet.create({
    header: {

        height: 160,
        width: "120%",
        borderBottomLeftRadius: 1000,
        borderBottomRightRadius: 1000,
        backgroundColor: varibale.blueLight,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        elevation: 10,
        opacity: 0.97,

    },
    headerTitle: {
        color: varibale.white,
        fontSize: 36,
        fontWeight: "300",
    },
    headerIcon: {
        backgroundColor: varibale.white,
        padding: 22,
        borderRadius: varibale.radiusFull,
        opacity: 1,
        position: "absolute",
        bottom: -43,
        elevation: 5,
    },
    infoAccountContainer: {
        marginTop: 80,
        paddingHorizontal: 25,
        paddingVertical: 40,
        alignSelf: "center",
        width: "90%",
        backgroundColor: varibale.blue,
        borderColor: varibale.light,
        borderRadius: varibale.radius25 * 1.3,
        borderWidth: 0,
        opacity: 0.9,

    },
    infoTextLable: {
        color: varibale.white,
        fontSize: 22,
        opacity: 0.95,
        marginBottom: 5,
        marginStart: 10

    },
    infoText: {
        color: varibale.white,
        fontSize: 16,
        opacity: 0.7,
        marginBottom: 20,
        marginStart: 10

    }

})
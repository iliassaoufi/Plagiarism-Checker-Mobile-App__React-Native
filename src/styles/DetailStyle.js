import { StyleSheet } from 'react-native';
import { varibale } from "./GlobalStyle"

export default Style = StyleSheet.create({
    headerGoBack: {
        position: "absolute",
        top: 40,
        left: 60,
    },
    DetailHeadercontainer: {
        backgroundColor: varibale.white,
        marginTop: 30,
        marginBottom: 45,
        width: "90%",
        padding: 25,
        borderRadius: varibale.radius50,
        opacity: 0.88,
        flexDirection: "column",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        elevation: 5,
    },
    DonutHeaderContainer: {

    },
    InfoDetailHeaderContainer: {
        marginTop: 10
    },
    InfoDetailHeader: {
        marginStart: 10,
        color: varibale.grey,
        fontSize: 16,
        marginVertical: 10,
    },
    InfoTextContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    /******************** */
    queryCardQuantainer: {
        backgroundColor: varibale.blue,
        marginBottom: 25,
        width: "90%",
        padding: 20,
        borderRadius: varibale.radius25,
        opacity: 0.88,
        alignSelf: "center",
    },
    queryCardTitle: {
        color: varibale.white,
        fontSize: 17,
        fontWeight: "700",
        marginStart: 7,
    },
    queryCardText: {
        marginTop: 7,
        color: varibale.white,
        opacity: 0.9
    }
})
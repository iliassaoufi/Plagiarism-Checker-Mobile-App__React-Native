import { StyleSheet } from 'react-native';
import { varibale } from "./GlobalStyle"

export default Style = StyleSheet.create({
    listContainer: {
        width: "100%",
        paddingTop: 50,
        paddingBottom: 100,
        paddingHorizontal: 18,

    },

    hestoryCardContainer: {
        backgroundColor: varibale.white,
        marginVertical: 15,
        paddingHorizontal: 10,
        paddingVertical: 22,
        borderRadius: varibale.radius25 * 1.15,
        width: "100%",
        flexDirection: "row",
        paddingEnd: 22,
        opacity: 0.95,
        elevation: 2
    },
    DotutContainerCard: {
        width: 75,
        marginEnd: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    contentCard: {
        flex: 1,
    },
    contentCardText: {
        color: varibale.grey,
        fontSize: 14
    },
    historyCardBtn: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginTop: 15
    },
    historyCardBtnDelete: {
        marginHorizontal: 12
    },
    historyCardBtnShow: {
        flexDirection: "row",
    },
    historyCardBtnShowText: {
        color: varibale.blueLight
    }


})
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: "white",
    },
    topView: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 25,
        paddingTop: 90,
        paddingBottom: 100,
    },
    topViewText: {
        paddingBottom: 3,
        fontSize: 15,
    },
    boldText: {
        fontWeight: "bold",
    },
    btnView: {
        marginTop: 70,
    },
    btn: {
        height: 55,
        width: "100%",
        borderRadius: 30,
        borderWidth: 1,
        backgroundColor: "#000",
        marginTop: 100,
    },
    btnText: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "900",
        alignItems: "center",
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    bottomView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 70,
        paddingVertical: 30,
        marginBottom: 180,
    },
    btnText2: {
        color: "black",
        paddingRight: 10,
        fontSize: 15,
    },
    btnText3: {
        color: "black",
        fontWeight: "900",
        fontSize: 16,
        textDecorationLine: "underline",
    },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: "white",
    },
    topView: {
        paddingTop: 50,
    },
    iconArrowLeft: {
        color: "#3b444b",
        fontSize: 20,
        paddingLeft: 5,
    },
    textSignup: {
        fontSize: 25,
        fontWeight: "900",
        paddingVertical: 10,
    },
    boldText: {
        fontWeight: "bold",
    },
    mainView: {
        flexDirection: "column",
        paddingTop: 20,
    },
    inputText: {
        paddingBottom: 7,
        paddingTop: 15,
        paddingLeft: 6,
        color: "#3f3f3f",
        fontSize: 13,
    },
    inputNameView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ededed",
        height: 50,
        paddingHorizontal: 25,
        borderRadius: 10,
        borderWidth: 1,
        borderStyle: "dashed",
    },
    inputName: {
        position: "relative",
        height: 50,
        width: "100%",
        borderStyle: "dashed",
    },
    iconCheckCircle: {
        color: "black",
        fontSize: 20,
        borderColor: "#000",
    },
    inputEmailView: {
        marginVertical: 10,
    },
    inputEmail: {
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 7,
        backgroundColor: "#ededed",
        marginBottom: 8,
        paddingLeft: 19,
        fontSize: 13,
    },
    inputPasswView: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ededed",
        height: 50,
        paddingHorizontal: 25,
        borderRadius: 10,
    },
    inputPassw: {
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 7,
        backgroundColor: "#ededed",
        marginBottom: 8,
        fontSize: 13,
        position: "relative",
        width: "100%",
    },
    iconEye: {
        color: "black",
        fontSize: 20,
        borderColor: "#000",
    },
    textBottom: {
        color: "#555",
        fontSize: 10,
        paddingTop: 8,
        paddingLeft: 10,
    },
    btnView: {
        marginTop: 90,
    },
});

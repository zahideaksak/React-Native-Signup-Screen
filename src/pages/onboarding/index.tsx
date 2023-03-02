import React, { FC } from "react";
import { View, SafeAreaView, Image, TouchableOpacity, Text, StatusBar } from "react-native";
import { Button } from "..";
import { styles } from "./styled";

export const OnBoarding: FC<any> = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.topView}>
                    <Image source={require("../../assets/Logo.png")} />
                    <Text style={styles.topViewText}>
                        Are you not a <Text style={styles.boldText}>NIKE</Text> club member?
                    </Text>
                    <Text>Join us and start running</Text>
                </View>
                <View style={styles.btnView}>
                    <Button tittle="SIGNUP" onPress={() => navigation.navigate("Register")} />
                </View>
                <View style={styles.bottomView}>
                    <Text style={styles.btnText2}>Already have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.btnText3}>SIGNIN</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

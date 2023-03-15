import React, { FC, useState } from "react";
import { SafeAreaView, Text, TextInput, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { Button } from "..";
import { styles } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { setLoginUser } from "../../redux/reducers/userReducer";

export const Login: FC<any> = ({ navigation }) => {
    const { email, name, password } = useSelector<any>(state => state);
    const [data, setData] = React.useState({
        name: name,
        email: email,
        password: password,
    });
    const [hidePass, setHidePass] = useState(true);
    const handleChange = (name: string, value: string) => {
        setData({
            ...data, //eski datayı korumak için
            [name]: value,
        });
    };
    const dispatch = useDispatch();

    console.log("General Reponse", email, name, password);
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.topView}>
                    <Icon
                        name="arrowleft"
                        style={styles.iconArrowLeft}
                        onPress={() => navigation.navigate("Splash")}
                    />
                    <Text style={styles.textSignup}>SIGN IN</Text>
                    <Text>
                        Become a <Text style={styles.boldText}>NIKE</Text> member.
                    </Text>
                </View>
                <View style={styles.mainView}>
                    <Text style={styles.inputText}>Name</Text>
                    <View style={styles.inputNameView}>
                        <TextInput
                            style={styles.inputName}
                            placeholder="Name"
                            value={data.name}
                            onChangeText={text => handleChange("name", text)}
                        />
                        <Icon name="checkcircleo" style={styles.iconCheckCircle} />
                    </View>
                    <View style={styles.inputEmailView}>
                        <Text style={styles.inputText}>Email</Text>
                        <TextInput
                            style={styles.inputEmail}
                            placeholder="@nike.com"
                            placeholderTextColor="#999"
                            value={data.email}
                            onChangeText={text => handleChange("email", text)}
                        />
                    </View>
                    <Text style={styles.inputText}>Password</Text>
                    <View style={styles.inputPasswView}>
                        <TextInput
                            style={styles.inputPassw}
                            placeholder="Pick a strong password"
                            placeholderTextColor="#999"
                            secureTextEntry={hidePass}
                            value={data.password}
                            onChangeText={text => handleChange("password", text)}
                        />
                        <Icon
                            style={styles.iconEye}
                            name={hidePass ? "eye" : "eyeo"}
                            onPress={() => setHidePass(!hidePass)}
                        />
                    </View>
                    <Text style={styles.textBottom}>
                        Your password must be 8 or more characters long and contain a mix upper &
                        lower case letters, number ans symbol
                    </Text>
                </View>
                <View style={styles.btnView}>
                    <Button tittle="SIGN IN" onPress={() => dispatch(setLoginUser(data))} />
                </View>
            </View>
        </SafeAreaView>
    );
};

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Register, OnBoarding } from "../pages";
import { Provider } from "react-redux";
import { legacy_createStore } from "redux";
import reducers from "../redux/reducers";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const store = legacy_createStore(reducers);
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Splash" component={OnBoarding} />
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    );
};

export default StackNavigator;

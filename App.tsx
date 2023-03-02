import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackNavigator from "./src/navigators/StackNavigator";
const Stack = createNativeStackNavigator();

const App = () => {
    return <StackNavigator />;
};

export default App;

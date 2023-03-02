import React, { FC } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styled";

export const Button: FC<any> = ({ onPress, tittle }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{tittle}</Text>
        </TouchableOpacity>
    );
};

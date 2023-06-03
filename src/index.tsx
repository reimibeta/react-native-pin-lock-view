import React from "react";
import { StyleSheet, View } from "react-native";
import PinInput from "./pin-input";
import PinKeyboard from "./pin-keyboard";

const PinLockView = () => {

    return (
        <View style={styles.container}>
            <PinInput />
            <PinKeyboard />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});

export default PinLockView;
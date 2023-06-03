import SmoothPinCodeInput from "@dreamwalk-os/react-native-smooth-pincode-input";
import React, { useState } from "react";
import { createRef } from "react";
import { Alert, StyleSheet, View } from "react-native";

const PinInput = () => {

    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');

    const pinInput = createRef<any>();

    const _checkCode = (code: string) => {
        if (code != '1234') {
            if(pinInput && pinInput.current){
                pinInput.current.shake().then(() => setCode(''));
            }
        } else {
            Alert.alert('Login', 'success')
        }
    }

    return (
        <View style={styles.container}>
            <SmoothPinCodeInput 
                ref={pinInput}
                password mask="﹡"
                cellSize={36}
                codeLength={4}
                value={password}
                onFulfill={_checkCode}
                onBackspace={() => console.log('No more back.')}
                onTextChange={(pwd: string) => setPassword(pwd)}
                cellStyle={{
                    borderBottomWidth: 2,
                    borderColor: 'gray',
                }}
                cellStyleFocused={{
                    borderColor: 'black',
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default PinInput;
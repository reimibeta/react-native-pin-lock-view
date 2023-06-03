import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
// import { appColors } from "../../../../systems/colors";
// import { Space } from "../../../../components/space/Space";
// import Icon from "react-native-vector-icons/Feather";

// 
const Key = (props: {
    label: string,
    onPress?: () => void,
}) => {

    return (
        <View style={styles.containerKey}>
            <TouchableOpacity 
                onPress={props.onPress}
                style={styles.containerKeyTouch}>
                <Text style={styles.containerKeyText}>{props.label}</Text>
            </TouchableOpacity>
        </View>
    );
}
// key icon
// const KeyIcon = (props: {
//     icon: string,
//     onPress?: () => void,
// }) => {

//     return (
//         <View style={styles.containerKey}>
//             <TouchableOpacity 
//                 onPress={props.onPress}
//                 style={styles.containerKeyTouch}>
//                 <Icon style={styles.containerKeyIcon} name={props.icon} />
//             </TouchableOpacity>
//         </View>
//     );
// }
//

const PinKeyboard = () => {

    const height = 15;

    const [keys, setKeys] = useState<Array<string>>(['1','2']);

    useEffect(() => {
        console.log('keys', keys.join(''))
    }, [keys]);

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Key label="1" 
                    onPress={() => {
                        setKeys(key => [...key, '1']);
                    }} 
                />
                <Key label="2" 
                    onPress={() => {
                        setKeys(key => [...key, '2']);
                    }} 
                />
                <Key label="3" 
                    onPress={() => {
                        setKeys(key => [...key, '3']);
                    }} 
                />
            </View>
            <View style={{ height: height }}></View>
            <View style={{ flexDirection: 'row' }}>
                <Key label="4" 
                    onPress={() => {
                        setKeys(key => [...key, '4']);
                    }} 
                />
                <Key label="5" 
                    onPress={() => {
                        setKeys(key => [...key, '5']);
                    }} 
                />
                <Key label="6"
                    onPress={() => {
                        setKeys(key => [...key, '6']);
                    }} 
                />
            </View>
            <View style={{ height: height }}></View>
            <View style={{ flexDirection: 'row' }}>
                <Key label="7" 
                    onPress={() => {
                        setKeys(key => [...key, '7']);
                    }} 
                />
                <Key label="8" 
                    onPress={() => {
                        setKeys(key => [...key, '8']);
                    }} 
                />
                <Key label="9" 
                    onPress={() => {
                        setKeys(key => [...key, '9']);
                    }} 
                />
            </View>
            <View style={{ height: height }}></View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1 }}></View>
                <Key label="0" 
                    onPress={() => {
                        setKeys(key => [...key, '0']);
                    }} 
                />
                {/* <KeyIcon
                    icon="delete"
                    onPress={() => {
                        keys.pop();
                        setKeys(key => [...key])
                    }} 
                /> */}
                <Key label="<-" 
                    onPress={() => {
                        keys.pop();
                        setKeys(key => [...key])
                    }} 
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 40
    },
    containerKey: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    containerKeyTouch: {
        height: 80,
        width: 80,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'grey', 
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerKeyText: {
        color: 'grey', 
        fontSize: 22
    },
    containerKeyIcon: {
        color: 'grey', 
        fontSize: 22
    }
});

export default PinKeyboard;
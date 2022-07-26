
import {
    View, Pressable, Alert, Text,
    Platform, StyleProp, ViewStyle
} from 'react-native'
import React, { useContext } from 'react'
import { SettingsScreenContext } from '../constants/initialValues'
import { styles } from '../constants/styles'

function confirmation(handleFunc: Function) {
    return Alert.alert(
        "Comfirmation",
        "Are you sure you want to reset the database?",
        [{ text: "Yes", onPress: () => handleFunc() }, { text: "No" }]
    )
}

const androidStyle = () => {
    if (Platform.OS == 'ios') return (
        { ...styles.settingButtonSet, display: 'none' } as StyleProp<ViewStyle>)
    else
        return { ...styles.settingButtonSet, display: 'flex' } as StyleProp<ViewStyle>
}

export function SettingsScreen() {
    const context = useContext(SettingsScreenContext)
    return (
        <View style={styles.settingsScreen}>
            <Pressable style={styles.settingButtonSet} onPress={
                () => confirmation(context.handleResetDB)}>
                <Text style={styles.settingsButtonText}>
                    RESET DATA
                </Text></Pressable>
            <Pressable style={() => androidStyle()}
                onPress={() => context.handleExport()}>
                <Text style={styles.settingsButtonText}>EXPORT</Text>
            </Pressable>
            <Pressable style={() => androidStyle()}
                onPress={() => context.handleImport()}>
                <Text style={styles.settingsButtonText}>IMPORT </Text>
            </Pressable>
            {/* {textStyle()} */}
            <Pressable style={styles.settingButtonSet} onPress={
                () => Alert.alert("Credits",
                    "Credits to various Wikipedia articles where the exercises information is retrieved", [{
                        text: "Cancel",
                        onPress: () => { },
                        style: "cancel"
                    },], { cancelable: true })}>
                <Text style={styles.settingsButtonText}>CREDITS </Text>
                </Pressable>


        </View>
    )
}
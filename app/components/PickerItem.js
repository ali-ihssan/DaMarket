import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AppText from './AppText'
import Screen from './Screen'

export default function PickerItem({ lable, onPress }) {
    return (
        <Screen>
            <TouchableOpacity onPress={onPress}>
                <AppText style={styles.text}>
                    {lable}
                </AppText>
            </TouchableOpacity>
        </Screen>
    )
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
    }
})

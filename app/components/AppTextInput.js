import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import defaultStyles from '../config/styles'

export default function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon} />}
            <TextInput style={defaultStyles.text} {...otherProps} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: "95%",
        padding: 15,
        margin: 10,
        alignItems: "center",

    },
    icon: {
        marginRight: 10,


    },
})

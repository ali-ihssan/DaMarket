import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import colors from '../config/colors'
import AppText from './AppText'
import Swipeable from 'react-native-gesture-handler/Swipeable';


export default function ListItem({ title, subTitle, image, IconComponante, onPress, renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
            <TouchableHighlight
                underlayColor={colors.light}
                onPress={onPress}>

                <View style={styles.container}>
                    {IconComponante}
                    {image && <Image style={styles.image} source={image} />}

                    <View style={styles.detailsContainer}>
                        <AppText style={styles.title} >{title}</AppText>
                        {subTitle && <AppText style={styles.subTitle} >{subTitle}</AppText>}
                    </View>

                </View>
            </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white,
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center"

    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    subTitle: {
        color: colors.medium,
    },
    title: {
        fontWeight: "600",
    }
})

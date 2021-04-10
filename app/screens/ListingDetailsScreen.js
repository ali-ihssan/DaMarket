import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

import AppText from '../components/AppText'
import ListItem from '../components/ListItem'
import colors from '../config/colors'

export default function ListingDetailsScreen() {
    return (
        <View>
            <Image
                source={require("../assets/jacket.jpg")}
                style={styles.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}> Red jacket</AppText>
                <AppText style={styles.price}> $100</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require("../assets/mosh.jpg")}
                        title="mosh hamedani"
                        subTitle="5 listings"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 300,
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    price: {
        color: colors.secondary,
        fontWeight: 20,
        marginVertical: 10,

    },
    userContainer: {
        marginVertical: 50,
    }
})

import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import Screen from '../components/Screen'
import Card from '../components/Card'
import colors from '../config/colors'


const Listings = [{
    id: 1,
    title: 'red jacket',
    price: 100,
    image: require("../assets/jacket.jpg")
},
{
    id: 2,
    title: 'Couch',
    price: 1000,
    image: require("../assets/couch.jpg")
}]

export default function ListingScreen() {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={Listings}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={"$" + item.price}
                        image={item.image}
                    />
                }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})

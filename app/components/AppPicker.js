import React, { useState } from 'react'
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, View } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableWithoutFeedback } from 'react-native'

import defaultStyles from '../config/styles'
import AppText from './AppText'
import Screen from './Screen'
import PickerItem from './PickerItem'

export default function AppPicker({ icon, items, onSelectItem, selectedItem, placeholder }) {

    const [modalVisible, setModalvisible] = useState(false)
    return (
        <>

            <TouchableWithoutFeedback onPress={() => setModalvisible(true)}>
                <View style={styles.container}>
                    {icon && (<MaterialCommunityIcons
                        name={icon}
                        size={20}
                        color={defaultStyles.colors.medium}
                        style={styles.icon} />)}

                    <AppText style={styles.text}>{selectedItem ? selectedItem.lable : placeholder}</AppText>

                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={defaultStyles.colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide">
                <Screen>
                    <Button title="close" onPress={() => setModalvisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => (<PickerItem
                            lable={item.lable}
                            onPress={() => {
                                setModalvisible(false)
                                onSelectItem(item)
                            }}
                        />)}
                    />
                </Screen>
            </Modal>
        </>

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
    text: {
        flex: 1,
    }
})

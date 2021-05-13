import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Formik } from "formik"


import Screen from '../components/Screen'
import AppTextInput from '../components/AppTextInput'
import AppButton from '../components/AppButton'


export default function LoginScreen() {

    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../assets/logo-red.png")} />

            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleSubmit }) => (
                    <>
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardtype="email-address"
                            onChangeText={handleChange("email")}
                            placeholder="Email"
                            textContentType="emailAddress"
                        />
                        <AppTextInput
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            placeholder="Password"
                            onChangeText={handleChange("password")}
                            secureTextEntry
                            textContentType="password"
                        />
                        <AppButton title="Login" onPress={(handleSubmit) => console.log(email, password)} />
                    </>
                )}
            </Formik>

        </Screen >
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginBottom: 20,
        marginTop: 50,
    }
})

import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native"
import { styles } from "./styles"


export const LoginStart = ({navigation}) => {
    return (
        <View>
            <View style={styles.header}>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/7159/7159094.png" }} style={styles.image} />
                <View style={styles.imageCenter}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/733/733579.png" }} style={styles.image} />
                </View>
            </View>
            <View>
                <Text style={styles.titleText}>To get started, first enter your phone, email, or @username</Text>
                <TextInput
                    style={styles.input}
                    placeholderTextColor={'grey'}
                    placeholder={"Phone, email, or username"}
                />
            </View>

            <View style={styles.divLow}>


                <TouchableOpacity style={styles.buttonForgot}>
                    <Text
                        style={{ fontWeight: 'bold' }}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonNext} onPress={ () => navigation.navigate("LoginFinish")}>
                {/* {navigation.reset({
                    index:0,
                    routes: [{name:"Home"}]
                })} */}
                    <Text
                        style={{ color: 'lightgrey', fontWeight: 'bold' }}>
                        Next
                    </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
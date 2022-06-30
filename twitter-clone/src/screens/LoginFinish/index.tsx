import React from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native"
import { styles } from "./styles"


export const LoginFinish = ({navigation}) => {
    return (
        <View>
            <View style={styles.header}>
                <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/7159/7159094.png" }} style={styles.image} />
                <View style={styles.imageCenter}>
                    <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/733/733579.png" }} style={styles.image} />
                </View>
            </View>
            <View>
                <Text style={styles.titleText}>Enter your password</Text>
                <TextInput
                    style={[styles.input, {marginTop: 15}]}
                    placeholderTextColor={'grey'}
                    placeholder={"Phone, email, or username"}
                />
                <TextInput
                    style={[styles.input, {marginTop: 30}]}
                    placeholderTextColor={'grey'}
                    placeholder={"Password"}
                
                >
                    
                </TextInput>
            </View>

            <View style={styles.divLow}>


                <TouchableOpacity style={styles.buttonForgot}>
                    <Text
                        style={{ fontWeight: 'bold' }}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonNext} onPress={ () => navigation.navigate("Home")}>
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
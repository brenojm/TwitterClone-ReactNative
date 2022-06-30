import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback, Animated, Image } from "react-native";
import { AntDesign, Entypo} from '@expo/vector-icons';

export const FabButton =() =>{

    return (
        <View style={[styles.container, {bottom:232, right:45}]}>
            <TouchableWithoutFeedback>
                <Animated.View style={[styles.button, styles.menu]}>
                <Image
                            source={{ uri: "https://cdn-icons-png.flaticon.com/512/4584/4584512.png" }}
                            style={{ width: 25, height: 25, tintColor: 'white' }}
                        />
                    
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        position: "absolute",
    },
    button:{
        position:"absolute",
        width: 60,
        height: 60,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
        shadowRadius: 10,
        shadowColor: 'blue',
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 20,
            width: 30,
        }
    },
    menu:{
        backgroundColor:'#1E90FF'
    },
});
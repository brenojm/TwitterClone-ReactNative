import React from "react";
import { Image, Text, View } from "react-native";

export const Notifications = () => {
    return <View style={{marginTop:200, alignItems:"center"}}>
        <Image
        source={{uri: "https://cdn-icons-png.flaticon.com/512/7851/7851223.png"}}
        style={{ width: 80, height: 80}}
        />
        <Text style={{textAlign:"center" ,padding: 20, fontSize:26}}>
        
            A tela de Notifications deve ser implementada na Atualização que esta prevista para o dia 31 de fevereiro!
        </Text>
        
    </View>
}
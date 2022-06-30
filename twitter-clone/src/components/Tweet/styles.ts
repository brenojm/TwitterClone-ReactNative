import { Platform, StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    buttonSkill: {
        marginVertical: 5,
    },
    textName: {
        paddingLeft:5,
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
        width: '74%'
    },
    textUser: {
        paddingLeft:5,
        color: 'grey',
        fontSize: 18,
        fontWeight: "normal"
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
    },
    contentTweet: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        padding:10,
    },
    contentUser: {
        alignItems: "center",
        flexDirection: 'row',
    },
    contentHours: {
        flexDirection:'row',
        width:'20%',
        color: 'grey'
    },
    contentText: {
        width: '80%',
        paddingLeft:5,
        paddingBottom:10
    },
    contentIcons: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '72%',
        tintColor: 'grey'
    },
    columnTweet: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: "space-between",
    },

});
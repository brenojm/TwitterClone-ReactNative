import { Platform, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 15,
        paddingBottom: 60,
    },
    image: {
        width: 30, 
        height: 30,
        alignItems: 'center',
        flexDirection:"row",
    },
    header: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 15,
        paddingBottom: 5,
        marginTop: 40,
        borderBottomColor:'lightgrey',
        borderBottomWidth:1
    },


})
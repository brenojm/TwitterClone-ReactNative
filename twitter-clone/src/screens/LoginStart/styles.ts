import { Platform, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingHorizontal: 30,
        paddingBottom: 60,
    },
    image: {
        width: 25, 
        height: 25,
        alignItems: 'center',
        flexDirection:"row",
    },
    titleText: {
        fontWeight:"bold" ,
        fontSize: 30,
        paddingHorizontal: 20
    },
    header: {
        display: "flex",
        alignItems: "center",
        flexDirection: 'row',
        paddingBottom: 50,
        marginTop: 30,
        paddingHorizontal: 10
    },
    imageCenter: {
        paddingLeft: 150,
    },
    input: {
        marginHorizontal: 15,
        borderWidth: 1,
        borderColor: 'lightgrey' ,
        color: 'grey',
        fontSize: 16,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 10,
        borderRadius: 4,
        height: 60
    },
    button: {
        color: 'grey',
        borderWidth: 2 ,
        padding: 15,
        borderRadius: 50,
        marginTop: 20
    },
    divLow: {
        marginTop: 405,
        borderTopWidth: 1,
        borderColor:'lightgrey',
        alignItems: 'center',
        flexDirection:"row",
        padding: 15,
        justifyContent:"space-between"
    },
    buttonForgot: {
        borderWidth: 1 ,
        borderColor: 'lightgrey',
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 50,
        
    },
    buttonNext: {
        backgroundColor:'grey',
        borderWidth: 1 ,
        borderColor: 'grey',
        paddingVertical: 7,
        paddingHorizontal: 15,
        borderRadius: 50,
        // marginLeft: 150
    },
})
import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    logoContainer: {
        flex: 1,
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 30,
        resizeMode: "contain",
        width: 120,
    },

    loginContainer: {
        flex: 2,
        borderLeftWidth: 30,
        borderColor: "transparent"
    },

    helpContainer: {
        flex: 1,
        backgroundColor: "#3339"
    },

    login: {
        fontFamily: font
    }

})

export default styles
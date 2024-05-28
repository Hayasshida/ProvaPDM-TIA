import { StyleSheet } from "react-native";
import * as Dimensions from "../../constants/dimensions";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#280343",
        height: Dimensions.height,
        width: Dimensions.width,
        flexDirection: "column",
    },
    makePost: {
        gap: 12,
        alignItems: "center",
        padding: 16,
        height: Dimensions.height*0.206,
        backgroundColor: "#1b1027",
        borderTopLeftRadius: 48,
        borderTopEndRadius: 48,
    },
    nothing: {
        height: Dimensions.height*0.7,
        justifyContent: "center",
        alignItems: "center",
        
    },
    text: {
        color: "white",
        fontSize: 21,
    },
    button: {
        width: Dimensions.width*0.6, 
        alignItems: "center", 
        justifyContent: "center", 
        padding: 0, 
        margin: 0
    },
    icon: {
        height: 50, 
        width: 50, 
        borderRadius: 50, 
        margin: 0
    },
    post: {
        flexDirection: 'row', 
        alignSelf: "flex-start", 
        alignItems: "center", 
        marginLeft: Dimensions.width*0.06, 
        gap: 12
    },

});

export default styles;
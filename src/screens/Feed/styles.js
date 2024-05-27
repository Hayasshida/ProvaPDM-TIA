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
    renderFlat: {
        height: Dimensions.height*0.7,
    },
    nothing: {
        height: Dimensions.height*0.7,
        justifyContent: "center",
        alignItems: "center",
        
    }

});

export default styles;
import { Image, View } from "react-native";
import { Text } from "react-native-paper";
import * as Dimensions from "../../constants/dimensions";


export default function Post(props){
    return (
        <View>
            <View style={{flexDirection: 'row', alignSelf: "flex-start", alignItems: "center", marginLeft: Dimensions.width*0.06, gap: 12}}>
                <Image source={props.icon} style={{height: 50, width: 50, borderRadius: 50, margin: 0}}/>
                <Text style={{color: "white", fontSize: 22}} children={props.ownerPost} />
            </View>
            <Text style={{color: "white", fontSize: 22}} children={props.post}/>
        </View>
    );
};



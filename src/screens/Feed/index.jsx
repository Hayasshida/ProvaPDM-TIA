import React from 'react';
import { Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { View, Image, KeyboardAvoidingView, FlatList } from 'react-native';
import { Text, TextInput } from 'react-native-paper';
import * as Dimensions from "../../constants/dimensions";
import userIcon from "../../../assets/user-icon.jpg";
import { useState } from 'react';
import sad from "../../../assets/sad.png"
import Post from '../../components/Post';
import toxicityTest from '../../IA/methods/toxicity';

export default function Feed({ navigation }) {

  const loadToxicityModel = async (post) => {
    const response = await toxicityTest(post);

    const negativeMatches = [];

    for(let i = 0; i < response; i++)

  };

  const [viewPost, setViewPost] = useState([{
    icon: null,
    ownerPost: null,
    post: null,
  }]);

    return(
      
        <SafeAreaView style={styles.container}>
          {viewPost[0] === undefined ? 
            <View style={styles.nothing}>
              <Image source={sad} style={{width: 64, height: 64, marginBottom: 12 }}/>
              <Text style={{color: "white", fontSize: 22,}}children="Nothing here yet"/>
            </View>
          :
            <View style={styles.renderFlat}>
              <FlatList
                data={viewPost}
                renderItem={({item}) => <Post icon={item.icon} ownerPost={item.ownerPost} post={item.post}/>}
              />
            </View>
          }

          <KeyboardAvoidingView behavior="position" enabled>
              
            <View style={styles.makePost}>
              <View style={{flexDirection: 'row', alignSelf: "flex-start", alignItems: "center", marginLeft: Dimensions.width*0.06, gap: 12}}>
                <Image source={userIcon} style={{height: 50, width: 50, borderRadius: 50, margin: 0}}/>
                <Text children="@bagre" style={{color: "white", fontSize: 22}}/>
              </View>

              <TextInput style={{backgroundColor: "transparent", width: Dimensions.width*0.8, fontSize: 22}} placeholder="Make your post" textColor="white"/>

              <Button onPress={() => (setViewPost([{icon: userIcon, ownerPost: "cqa", post: "cu"}]))} mode="contained" buttonColor="#99272d" textColor="white" style={{width: Dimensions.width*0.6, alignItems: "center", justifyContent: "center", padding: 0, margin: 0}}>
                <Text style={{color: "white", fontSize: 20}}>Publish</Text>  
              </Button>
            </View>

          </KeyboardAvoidingView>

        </SafeAreaView>
    );
}
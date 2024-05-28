import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import { View, Image, KeyboardAvoidingView, FlatList } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import * as Dimensions from "../../constants/dimensions";
import userIcon from "../../../assets/user-icon.jpg";
import { useState } from 'react';
import sad from "../../../assets/sad.png"
import Post from '../../components/Post';
import { toxicityTest } from '../../IA/methods/toxicity'; 


export default function Feed({ navigation }) {

  let [postInfo, setPostInfo] = useState([{
    icon: null,
    ownerPost: null,
    post: null,
  }]);

  const [ contentPost, setContentPost ] = useState("");

  const tryPublish = async (post) => {
    const response = await toxicityTest(post);

    if(response == []){
      setPostInfo(postInfo[postInfo.length] = {
        icon: userIcon,
        ownerPost: "@bagre",
        post: post
      })
      return;
    }
    
    console.log(response);
  };

    return(
        <SafeAreaView style={styles.container}>
          {postInfo[0].post === null ? 
            <View style={styles.nothing}>
              <Image source={sad} style={{width: 64, height: 64, marginBottom: 12 }}/>
              <Text style={styles.text}children="Nothing here yet"/>
            </View>
          :
            <View style={{height: Dimensions.height*0.7}}>
              <FlatList
                data={postInfo}
                renderItem={({item}) => <Post icon={item.icon} ownerPost={item.ownerPost} post={item.post}/>}
              />
            </View>
          }

          <KeyboardAvoidingView behavior="position" enabled>
              
            <View style={styles.makePost}>
              <View style={styles.post}>
                <Image source={userIcon} style={styles.icon}/>
                <Text children="@bagre" style={styles.text}/>
              </View>

              <TextInput style={{backgroundColor: "transparent", width: Dimensions.width*0.8, fontSize: 22}} placeholder="Make your post" value={contentPost} onChangeText={setContentPost} textColor="white"/>

              <Button onPress={() => tryPublish(contentPost)} mode="contained" buttonColor="#99272d" textColor="white" style={styles.button}>
                <Text style={styles.text}>Publish</Text>  
              </Button>
            </View>

          </KeyboardAvoidingView>

        </SafeAreaView>
    );
}
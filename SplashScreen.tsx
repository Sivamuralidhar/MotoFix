/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect } from "react";
import { Text,View } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';
interface SplashProps {
  templateFileName: string;
}

const  SplashScreen = (props:any) => {

useEffect(()=>{
props.navigation.replace("chat")
},[])


  return <View style={{flex:1,
    alignItems:'center',
  justifyContent:'center'}}>
     <Icon name="rocket" size={30} color="#900" />
     
    <Text>Template: {"Hello There"}</Text>
  </View>;
};

export default SplashScreen;




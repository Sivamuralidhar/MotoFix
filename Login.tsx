/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Text,View } from "react-native";

 
interface SplashProps {
  templateFileName: string;
}

const  Login = (props:any) => {

  return <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
     
    <Text>Template: {"templateFileName"}</Text>
  </View>;
};

export default Login;
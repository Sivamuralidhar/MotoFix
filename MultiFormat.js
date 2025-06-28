

// SignupScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomTextInput from './CustomTextInput';
// Define TypeScript interface for form values
interface FormValues {
  username: string;
  phone: string;
  email: string,
}

// Yup validation schema
const SignupSchema = Yup.object().shape({
  username: Yup.string().min(4, "Too Short!")
    .max(20, "Too Long").required('Please Enter Username'),
  phone: Yup.string().min(10, "Too Short!")
    .max(10, "Too Long").required('Please enter phone Number'),
  email: Yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter valid email address").required('Required'),
});

export default function MultiFormat(props) {

const [isToggled, setIsToogled] = useState(true)

const [selectedArrays,setSelectedArray]=useState([])


  return (
    <View style={{ padding: 10 }}>

<Text>league Info</Text>
     
<View style={{flexDirection:'row'}}>
  <View style={{flexDirection:'row',columnGap:10,alignItems:'center',flex:1,}}>
  <View style={{width:20,height:20,backgroundColor:"white",borderRadius:20,borderWidth:1,borderColor:"black",alignItems:'center',justifyContent:'center'}}>
 <View style={{width:12,height:12,backgroundColor: isToggled?"blue":"white",borderRadius:20,borderWidth:1,borderColor:"black",alignItems:'center'}}></View>
  </View>
  <Text>Single format</Text>
</View>

<View style={{flexDirection:'row',columnGap:10,alignItems:'center',flex:1}}>
  <View style={{width:20,height:20,backgroundColor:"white",borderRadius:20,borderWidth:1,borderColor:"black",alignItems:'center',justifyContent:'center'}}>
 <View style={{width:12,height:12,backgroundColor: !isToggled?"blue":"white",borderRadius:20,borderWidth:1,borderColor:"black",alignItems:'center'}}></View>
  </View>
  <Text>Multiformat</Text>
</View>
</View>

<CustomTextInput submited={(data)=>{
setSelectedArray([...selectedArrays,data])
}}></CustomTextInput>

     <View style={{flexWrap:'wrap',flexDirection:'row',columnGap:10}}>
       {selectedArrays.map((item,index)=>{
return <View  key={index+item} style={{backgroundColor:'blue',borderRadius:20}}> 
<Text style={{color:"white",padding:10}}>{item}</Text></View>
      })}
     </View>
      
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    rowGap: 10,
    backgroundColor: 'white'
  },
  error: {
    fontWeight: '200', fontSize: 18, color: 'red',
    fontFamily: 'ariel'
  },
  input: {
    fontWeight: '200', fontSize: 18, color: 'blue',
    fontFamily: 'ariel', minWidth: 300
  },
  mediumText: {
    fontWeight: '500', fontSize: 20, fontFamily: 'ariel'
  },
  largeText: {
    fontWeight: '500', fontSize: 20, fontFamily: 'ariel'
  }


});
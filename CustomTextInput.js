

// SignupScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
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

export default function CustomTextInput(props) {

const [isToggled, setIsToogled] = useState("")
 


  return (
    <View style={{ padding: 10 }}>

 
<TextInput style={{flex:1}} onChangeText={setIsToogled} value={isToggled}
   ></TextInput>


      <Button title='save' onPress={()=>{
        props.submited(isToggled)
      }}></Button>
      
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
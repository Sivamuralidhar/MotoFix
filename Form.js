

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

export default function FormScreen(props) {






  return (
    <View style={{ padding: 10 }}>


      <Formik initialValues={props.initData}
        validationSchema={SignupSchema}
        onSubmit={(values, formikHelpers) => {
          console.log(values)
        }}

      >
        {({
          touched,
          errors,
          handleBlur,
          handleChange,
          handleSubmit,validateForm,
          values, }) => {

        return  <View style={{rowGap:10,alignItems:'center'}}>
            <View style={{ flexGrow: 1, flexWrap: 'wrap', flexDirection: 'row', columnGap: 10 }}>

           <View style={styles.input}>
              <TextInput
              value={values.username}
                onBlur={handleBlur('username')}
                onChangeText={handleChange('username')} style={styles.input} placeholder='username'>
              </TextInput>
              {touched.username && errors.username ? <Text style={styles.error}>{errors.username}</Text> : null}

           </View>

        
           <View style={styles.input}>
              <TextInput
              value={values.phone}
              keyboardType='decimal-pad'
                onBlur={handleBlur('phone')}
                onChangeText={handleChange('phone')} style={styles.input} placeholder='phone'>
              </TextInput>
              {touched.phone && errors.phone ? <Text style={styles.error}>{errors.phone}</Text> : null}

           </View>


           <View style={styles.input}>
              <TextInput
               value={values.email}
                onBlur={handleBlur('email')}
                onChangeText={handleChange('email')} style={styles.input} placeholder='email'>
              </TextInput>
              {touched.email && errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}

           </View>
 


            </View>

             <Button title='Submit' onPress={()=>{
validateForm().then((e)=>{
  if(JSON.stringify(e)=="{}"){
props.onSubmit(values)
  }
  else{
    alert("Invalid data")
  }

}).catch((e)=>{
alert(e.message)
})
             }}></Button>
          </View>
        }}


      </Formik>


      
      
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
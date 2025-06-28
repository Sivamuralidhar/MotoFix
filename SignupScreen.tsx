

// SignupScreen.tsx
import React, { useRef, useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, TouchableOpacity } from 'react-native';
import { Formik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import FormScreen from './Form';
import MultiFormat from './MultiFormat';
// Define TypeScript interface for form values
interface SignupFormValues {
  username: string;
  password: string;
  confirmPassword: string;
  email: string
}

// Yup validation schema
const SignupSchema = Yup.object().shape({

});

export default function SignupScreen() {



  const [isExpanded, setIsExpaned] = useState(false)
   const [isToggled, setIsToogled] = useState(false)
  const [isPlayerExpaneded, setIsPlayerExpaneded] = useState(false)

  const userData = useRef({
    myself: {
      username: "",
      phone: "",
      email: "",
    },
    player2: {
      username: "",
      phone: "",
      email: "",
    }
  })


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss()
        setIsExpaned(false)
        setIsPlayerExpaneded(false)
      }}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >

          <View style={{ flexDirection: 'row', columnGap: 30, alignItems: 'center' }}>

            <Icon name="arrow-left" size={30} color="black" />
            <Text style={styles.mediumText}>Registration

            </Text>
          </View>
          <View style={{ paddingHorizontal: 20, rowGap: 20 }}>
            <Text onPress={() => {
              alert("clicked")
            }} style={{ ...styles.mediumText, color: 'blue' }}>
              <Text style={{ ...styles.regularText, color: "black" }}>
                Lorem Ipsum has been the industry's
              </Text>
              {" Lorem Ipsum "}
              <Text style={{ ...styles.regularText, color: "black" }}>
                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
              </Text>
            </Text>


            <Text style={{ ...styles.regularText, paddingHorizontal: 20, marginVertical: 10 }}>
              Mixed Doubles
            </Text>

            {isToggled? <MultiFormat></MultiFormat>
                
                
                :<View style={{columnGap:10,rowGap:10}}><Text style={styles.largeText}>
              Personal Info
            </Text>



            <TouchableOpacity onPress={() => {
              setIsPlayerExpaneded(false)
              if (!isExpanded) setIsExpaned(true)
            }} style={{
              padding: 10,
              borderRadius: isExpanded ? 10 : 999,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.5,
              shadowRadius: 2,
              elevation: 1,
              backgroundColor: "white"
            }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ ...styles.regularText, flex: 1, color: "black", paddingHorizontal: 20 }}>
                  Myself
                </Text>

                <TouchableOpacity onPress={() => {
                  setIsExpaned(!isExpanded)
                }}>
                  {isExpanded ?

                    <Icon name={"angle-up"} size={30} color="black" />
                    : <Icon name={"angle-down"} size={30} color="black" />

                  }

                </TouchableOpacity>
              </View>

              {isExpanded ? <FormScreen
                initData={userData.current.myself}
                onSubmit={(data: any) => {
                  if (data) {
userData.current.myself=data
                  }
                  setIsExpaned(false)
                }}
              >
              </FormScreen>

                : null}


            </TouchableOpacity>


            <TouchableOpacity activeOpacity={0.6} onPress={() => {
              setIsExpaned(false)
              if (!isPlayerExpaneded) setIsPlayerExpaneded(true)
            }} style={{
              padding: 10,
              borderRadius: isPlayerExpaneded ? 10 : 999,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 0 },
              shadowOpacity: 0.5,
              shadowRadius: 2,
              elevation: 1,
              backgroundColor: "white"
            }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ ...styles.regularText, flex: 1, color: "black", paddingHorizontal: 20 }}>
                  Player 2
                </Text>
               <TouchableOpacity onPress={() => {
                setIsExpaned(false)
               setIsPlayerExpaneded(!isPlayerExpaneded)
            }}>
              {isPlayerExpaneded?
              
               <Icon name={  "angle-up"} size={30} color="black" />
:   <Icon name={ "angle-down" } size={30} color="black" />

            }
              
               </TouchableOpacity>
              </View>

              {isPlayerExpaneded ?
                <FormScreen initData={userData.current.player2}
                  onSubmit={(data: any) => {
                    if (data) {
userData.current.player2=data
                    }
                    setIsPlayerExpaneded(false)
                  }}
                >

                </FormScreen>

                : null}


            </TouchableOpacity>
<Button title='Register' onPress={()=>{
   setIsToogled(true)
}}>
  
</Button></View>}


          </View>


        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    rowGap: 10,
    backgroundColor: 'white'
  },
  regularText: {
    fontWeight: '200', fontSize: 18, color: 'blue',
    fontFamily: 'ariel'
  },
  mediumText: {
    fontWeight: '500', fontSize: 20, fontFamily: 'ariel'
  },
  largeText: {
    fontWeight: '500', fontSize: 20, fontFamily: 'ariel'
  }


});
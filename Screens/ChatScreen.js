import React, { useEffect, useRef, useState } from "react";
import { TouchableOpacity, View, Text, Dimensions, StyleSheet, Animated, TextInput, StatusBar, ScrollView, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
 
import Fonts from "../Utils/Fonts"; 
import SendItem from "./SendItem";
import ChatScreenItem from "./ChatScreenItem"; 
import Tts from 'react-native-tts';
import ColorConstants from "../Utils/ColorConstants";

const ChatScreen = ({ ...props }) => {
    const [messages, setMessages] = useState([])
    const ref = useRef()
    useEffect(() => {

    }, [])
    return <View style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        padding: 20,
    }}>
        <View style={{
            flex: 1, position: 'absolute',
            marginTop: StatusBar.currentHeight,
            width: '100%',
            alignSelf: 'center',
            opacity: messages.length ? 0.05 : 1,
            height: "100%",
            alignItems: 'center', justifyContent: 'center'
        }}>
            <TouchableOpacity onPress={() => {
                getAndroidPermissions().then((res) => {
                    if (res) {
                        Tts.speak('Hello, I am conversa, You personal assistant. How may i help you..');
                    }
                    else {

                    }
                })
            }}>
                <MaterialCommunityIcons

                    style={{ marginHorizontal: 5 }}
                    color={ColorConstants.primaryColor}
                    name="robot-love"
                    size={100}>

                </MaterialCommunityIcons>
            </TouchableOpacity>

            <Text style={{
                fontSize: ValueConstants.size24,
                color: ColorConstants.primaryColor,
                textAlign: 'center',
                padding: 20,
                fontFamily: Fonts.Mulish_Regular,
            }}>I'm<Text style={{
                fontSize: ValueConstants.size24,
                color: ColorConstants.secondaryColor,
                textAlign: 'center',
                padding: 20,
                fontFamily: Fonts.Mulish_Bold,
            }}> conversa </Text>
                designed by <Text style={{
                    fontSize: ValueConstants.size24,
                    color: ColorConstants.secondaryColor,
                    textAlign: 'center',
                    padding: 20,
                    fontFamily: Fonts.Mulish_Bold,
                }}> bhanu </Text>, You are't said yet Hi to me.</Text>

        </View>

        <ScrollView ref={ref} style={{
            flex: 1, width: '100%',
            height: "100%",
        }}>
            {messages.map((item) => {
                return <ChatScreenItem key={item.id}
                    item={item}></ChatScreenItem>
            })}
        </ScrollView>



        <SendItem
            {...props}
            onExtracted={(msg) => {
                messages.push(
                    msg
                )
                setMessages([...messages])
                setTimeout(() => {
                    try {
                        ref.current.scrollToEnd({ animated: true })
                    } catch (error) {
                    }
                }, 400);
            }}
            onMessageSent={(msg) => {
                messages.push(msg)
                setMessages([...messages])
                setTimeout(() => {
                    try {
                        ref.current.scrollToEnd({ animated: true })
                    } catch (error) {
                    }
                }, 400);
            }}
            onFocus={() => {
                setTimeout(() => {
                    try {
                        ref.current.scrollToEnd({ animated: true })
                    } catch (error) {
                    }
                }, 400);
            }}
        >

        </SendItem>
    </View>
}
export default withGlobalContext(ChatScreen)
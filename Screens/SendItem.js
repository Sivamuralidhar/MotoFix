import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Dimensions, StyleSheet, Animated, TextInput, StatusBar } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ColorConstants from "../Utils/ColorConstants";
  
import Fonts from " ../Utils/Fonts";
import ValueConstants from "../Utils/ValueConstants";
import { generateRandomColor, generateRandomString } from "../Utils/Util";
import { StringConstants } from "../Utils/StringConstants";
import Voice from '@react-native-voice/voice';
export default SendItem = ({ sendMessageToServer, onExtracted, onMessageSent, ...props }) => {

    const [input, setInput] = useState("")



    useEffect(() => {

        Voice.onSpeechError = ((e) => {
            console.error(e)
        })
        Voice.onSpeechResults = ((e) => {
            onSend(e.value[0].replace("conversation", "conversa"))
        })
    }, [])

    const onSend = async (input) => {

        let color = generateRandomColor()
        onMessageSent({
            byAI: false,
            id: generateRandomString(),
            message: input,
            color: color
        })

        let msg = input.toLowerCase()
        let commandStatus = false
        if (msg == "hi") {
            onExtracted({
                byAI: true,
                id: generateRandomString(),
                message: msg,
                extractedMessage: `Hello There, ${StringConstants.uniqueId} I am conversa, Your personal Assistant`,
                color: color
            })
        }
        else if (msg == "turn off tank water" || msg == "turn off water tank"
            || msg == "turn off water kitchen" || msg == "turn off motor"
            || msg == "turn off kitchen water") {
            commandStatus = sendMessageToServer(StringConstants.underGroundEspMotorTerminated)

        }
        else if (msg == "turn on motor" || msg == "fill the water tank" || msg == "turn on tank water" || msg == "turn on water tank") {
            commandStatus = sendMessageToServer(StringConstants.underGroundEspTankAlive)

        }
        else if (msg == "turn on kitchen water" || msg == "turn on water kitchen") {
            commandStatus = sendMessageToServer(StringConstants.underGroundEspKitchenAlive)
        }
        else if (msg == "goodnight" || msg == "good night" || msg == "turn off entry lights") {
            commandStatus = sendMessageToServer(StringConstants.underGroundEspMainLightTerminated)
            msg = "Good Night"
        }
        else if (msg == "good evening" || msg == "turn on entry lights") {
            commandStatus = sendMessageToServer(StringConstants.underGroundEspMainLightAlive)
        }

        else {
            onExtracted(
                {
                    byAI: true,
                    id: generateRandomString(),
                    message: msg,
                    extractedStatus: false,
                    extractedMessage: "Unable to recognige.",
                    color: color
                }
            )
        }
        if (commandStatus) {
            onExtracted({
                byAI: true,
                id: generateRandomString(),
                message: msg,
                ...commandStatus,
                color: color
            })
        }

    }


    return <View style={{
        flexDirection: 'row', borderWidth: 1,
        borderRadius: 10, padding: 5,
    }}>
        <TextInput
            value={input}
            onChangeText={(text) => {
                if (!/[^a-zA-Z\d\ ]/.test(text))
                    setInput(text.trimStart())
            }}
            placeholder="Let's chat"
            placeholderTextColor={"grey"}
            style={{
                flex: 1,
                padding: 10, margin: 0,
                fontSize: ValueConstants.size24,
                color: ColorConstants.secondaryColor,
                fontFamily: Fonts.Mulish_Bold,
                borderColor: "grey"
            }}
            {...props}
        ></TextInput>
        {input ? <GlobalButton
            onPress={() => {
                onSend(input)
                setInput("")

            }}>
            <MaterialCommunityIcons
                style={{ marginHorizontal: 5, padding: 3 }}
                color={ColorConstants.secondaryColor}
                name="send-circle"
                size={40}>

            </MaterialCommunityIcons>
        </GlobalButton> : <GlobalButton
            style={{ backgroundColor: ColorConstants.primaryColor, borderRadius: 99, paddingVertical: 5 }}
            onPressOut={() => {
                Voice.stop();
            }}
            onPressIn={() => {
                Voice.start('en-US');
            }}>
            <MaterialCommunityIcons
                style={{ marginHorizontal: 5, padding: 3 }}
                color={ColorConstants.secondaryColor}
                name="microphone-settings"
                size={40}>

            </MaterialCommunityIcons>
        </GlobalButton>}


    </View>

}



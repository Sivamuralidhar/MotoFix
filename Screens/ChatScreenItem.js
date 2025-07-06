import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text, Dimensions, StyleSheet, Animated, TextInput, StatusBar, ScrollView, FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ColorConstants from "../../Utils/ColorConstants";
import ChatButton from "../ChatButton";
import { withGlobalContext } from "../Provider/ThemeProvider";
import GlobalButton from "../../CustomComponents/GlobalButton";
import Fonts from "../../Utils/Fonts";
import ValueConstants from "../../Utils/ValueConstants";
import SendItem from "./SendItem";


export default ChatScreenItem = ({ onExtracted, item = {
    byAI: false,
    id: generateRandomString(),
    message: "",
    extractedStatus: false,
    extractedMessage: ""
}, ...props }) => {

    const [extractedItem, setExtractedItem] = useState({ ...item })




    return <View style={{
        marginBottom: 10,
        padding: 10,
        flexShrink: 1,
        borderRadius: 10,
        marginLeft: item.byAI ? 0 : "auto",
        marginRight: !item.byAI ? 0 : "auto",
        maxWidth: "80%",
        flexDirection: 'column',
        borderWidth: 1,
        backgroundColor: item.color + "20",
        borderColor: item.byAI ? ColorConstants.primaryColor : ColorConstants.secondaryColor
    }}>

        {item.extractedMessage ? <Text style={{
            fontSize: ValueConstants.size20,
            flexShrink: 1,
            marginBottom: 10,
            color: item.byAI && item.extractedStatus ? "red" : ColorConstants.secondaryColor,
            fontFamily: Fonts.Mulish_Bold,
        }}>{item.extractedMessage}</Text> : null}
        }
        <Text style={{
            flexShrink: 1,
            fontSize: !item.byAI ? ValueConstants.size24 : ValueConstants.size18,
            color: ColorConstants.primaryColor,
            fontFamily: !item.byAI ? Fonts.Mulish_Bold : Fonts.Mulish_BoldItalic,
        }}>{item.byAI ? "~" : ""} {item.message}</Text>
    </View>
}



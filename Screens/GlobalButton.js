import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, Text } from 'react-native'
 
export default GlobalButton = ({ onPress, title = "Next", style = {}, ...props }) => {

    const [disabled, setDisabled] = useState(false)

    return <TouchableOpacity
        onPress={() => {
            if (onPress)
                onPress()
            setDisabled(true)
            setTimeout(() => {
                setDisabled(false)
            }, 1200)
        }}


        disabled={disabled}
        style={style}
        {...props}
    >
        {props.children}

    </TouchableOpacity>
}

import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dimensions, PermissionsAndroid, PixelRatio } from "react-native";
import ColorConstants from "./ColorConstants";
import { StringConstants } from "./StringConstants";
const defaultHosts = ["192.168.1.150", "192.168.1.151", "192.168.1.152", "192.168.1.153"]

export function getTypeById(id = 0) {
    if (id == 0)
        return "Front Left"
    if (id == 1)
        return "Front Right"
    if (id == 2)
        return "Back Left"
    if (id == 3)
        return "Back Right"
}

export function defaultIps() {
    return []
}
export function generateRandomString(upto = 10) {
    const characters = 'UPSQUADABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789BLOOMING';
    let result = '';

    for (let i = 0; i < upto; i++) {
        result += characters.charAt(Math.floor(Math.random() * upto));
    }
    return result;
}
export function generateRandomColor(opacity = "",) {
    let maxVal = 0xFFFFFF; // 16777215.
    let randomNumber = Math.random() * maxVal;
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);
    return "#" + randColor.toUpperCase() + (opacity)
}
 
export const getAndroidPermissions = async (props) => {

    let granted = await PermissionsAndroid.requestMultiple(
        [
            // PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        ],
        {
            title: "Permission",
            message: "SmartHome Track app needs access to your permissions",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK",
        }
    );

    // if (granted["android.permission.CAMERA"] != "granted") {
    //     showAlertWithValue(props, "Camera permissions are denied");

    //     return
    // }
    if (granted["android.permission.READ_EXTERNAL_STORAGE"] != "granted") {
        showAlertWithValue(props, "Read Storage permissions are denied");

        return
    }
    if (granted["android.permission.WRITE_EXTERNAL_STORAGE"] != "granted") {
        showAlertWithValue(props, "Write Storage permissions are denied");

        return
    }
    if (granted["android.permission.RECORD_AUDIO"] != "granted") {
        showAlertWithValue(props, "Record Audio permissions are denied");

        return
    }
    return true;
};
export const getModeByTime = () => {
    const date = new Date()
    if (date.getHours() < 12)
        return "Good Morning...🌅"
    if (date.getHours() == 12)
        return "What about lunch...?"
    if (date.getHours() < 16)
        return "Good Afternoon...🌞"
    if (date.getHours() < 20)
        return "Good Evening......🌚"
    if (date.getHours() < 22)
        return "Dinner Time..😋"
    return "Its bed time..🛌🏼"

}

export const getFontSize = (size) => {
    const newSize = (size / Dimensions.get("window").fontScale);
    if (Platform.OS === "ios") {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    } else {
        return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
    }
};

export const setStoragePref = async (key, value) => {
    await AsyncStorage.setItem(key, JSON.stringify(value))
}
export const getStoragePref = async (key) => {
    let value = await AsyncStorage.getItem(key)
    return value ? JSON.parse(value) : value
}

export const showAlertWithValue = (props, value = "Empty value", error = false) => {
    props.loader(false)
    if (error)
        props.alert(true, { value: value, buttons: ["Close"], isItError: error, type: "Payment Failed" })
    else props.alert(true, { value: value })
}
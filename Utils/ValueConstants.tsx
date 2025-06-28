import { Dimensions } from "react-native";
import { getFontSize } from "./Util";
import DeviceInfo from "react-native-device-info";



const ValueConstants = {
    size12: getFontSize(12),
    size14: getFontSize(14),
    size16: getFontSize(16),
    size18: getFontSize(18),
    size20: getFontSize(20),
    size22: getFontSize(22),
    size24: getFontSize(24),
    size26: getFontSize(26),
    size28: getFontSize(28),
    size30: getFontSize(30),
    size32: getFontSize(32),
    iconSize: Math.min(Dimensions.get('window').width, Dimensions.get('window').height) * 0.15
}

export default ValueConstants;
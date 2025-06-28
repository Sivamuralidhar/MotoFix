import DeviceInfo from "react-native-device-info"

export const underGroundEsp = "#E0*"
const uniqueId = DeviceInfo.getUniqueIdSync()
export const StringConstants = {
    uniqueId: "!" + uniqueId.substring(uniqueId.length - 3) + "!",
    underGroundEsp: underGroundEsp,
    maxWaterLevel: 43,
    masterBedRoom1Esp: "#E4*",
    masterBedRoom1EspUltroSonicSensor: "#E4*D",
    underGroundEspTankAlive: underGroundEsp + "T1",
    underGroundEspMotorTerminated: underGroundEsp + "M0",
    underGroundEspKitchenAlive: underGroundEsp + "K1",
    underGroundEspMainLightAlive: underGroundEsp + "L1",
    underGroundEspMainLightTerminated: underGroundEsp + "L0"
}

export const AsynKeys = {
    session: "session",
    defaultCamConfig: "defaultCamConfig",
}
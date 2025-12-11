import Constants from "expo-constants";

export const AppConfig = {
    name: "Startrek",
    url: {
        api: Constants.expoConfig?.extra?.API_URL || ''
    },
    palette: {
        primary: "#000582"
    }
}
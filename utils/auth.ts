import { router } from "expo-router";
import * as SecureStorage from "expo-secure-store";

export const onLogout = async () => {
    await SecureStorage.deleteItemAsync("access");
    router.replace("/");

}
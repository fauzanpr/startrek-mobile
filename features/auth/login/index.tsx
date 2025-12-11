import Logo from "@/assets/images/aryacakra/logo.png";
import PvButton from "@/components/pv/PvButton";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import * as SecureStorage from "expo-secure-store";
import { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from "react-native";
import { useLoginMutation } from "./hooks/login";

import { Controller, useForm } from "react-hook-form";
import Toast from "react-native-toast-message";

type TRequest = {
    email: string;
    password: string;
};

function LoginPage() {
    const router = useRouter();
    const { handleSubmit, control } = useForm<TRequest>({
        defaultValues: { email: "", password: "" }
    });

    const [isPasswordMode, setIsPasswordMode] = useState(true);

    const { mutate, isPending } = useLoginMutation({
        onSuccess: (res) => {
            console.log("Success", res);
            router.push("/(tabs)/home");
            SecureStorage.setItem("access", res?.access);

            Toast.show({
                type: "success",
                text1: "Success",
                text1Style: {
                    fontSize: 16,
                    color: "green"
                },
                text2: "Login is successfull",
                text2Style: {
                    fontSize: 14
                }
            });
        },
        onError: (err) => {
            console.log("ERROR HAPPENS", JSON.stringify(err));
        }
    });

    const onLoginHandler = (data: TRequest) => {
        mutate({
            method: "POST",
            data: data
        })
    };

    return (
        <View className="w-full h-full bg-primary">
            <View className="h-1/2">
                <View className="w-full h-full flex items-center justify-center">
                    <Image
                        source={Logo}
                        width={50}
                        height={50}
                        className="w-52 h-32 mb-6"
                        resizeMode="contain"
                    />
                    <Text className="text-4xl text-white font-semibold mb-2">Welcome to Startrek!</Text>
                    <Text className="text-lg text-white font-semibold">Please sign-in to your account</Text>
                </View>
            </View>
            <View className="h-1/2 bg-white w-full rounded-t-3xl p-8 flex flex-col gap-4 border border-b-0 border-gray-400">
                <View>
                    <Text className="text-gray-500">Email</Text>
                    <Controller
                        control={control}
                        name="email"
                        render={({ field: { value, onChange } }) => (
                            <TextInput
                                className="border p-4 rounded-xl border-gray-300"
                                placeholder="Input your email here"
                                onChangeText={(text) => onChange(text)}
                                value={value}
                            />
                        )}
                    />
                </View>

                <View className='relative'>
                    <Text className="text-gray-500">Password</Text>
                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, value } }) => (
                            <>
                                <TextInput
                                    className="border p-4 rounded-xl border-gray-300"
                                    placeholder="Input your password here"
                                    secureTextEntry={isPasswordMode}
                                    onChangeText={(text) => onChange(text)}
                                    value={value}
                                />
                                <Pressable
                                    onPress={() => {
                                        setIsPasswordMode(prev => !prev)
                                    }}
                                    className='mb-4 absolute right-4 top-8'
                                >
                                    <Ionicons name={isPasswordMode ? "eye-off" : "eye"} size={24} color={"#9ca3af"} />
                                </Pressable>
                            </>
                        )}
                    />
                </View>

                <PvButton
                    label="Submit"
                    onPress={handleSubmit(onLoginHandler)}
                    pending={isPending}
                />
            </View>
        </View>
    )
}

export default LoginPage;
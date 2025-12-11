import { AppConfig } from "@/config/app-config";
import { QUERY_KEYS } from "@/constants/query-keys";
import { Ionicons } from "@expo/vector-icons";
import { useQueryClient } from "@tanstack/react-query";
import { router, useLocalSearchParams } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import Toast from "react-native-toast-message";
import { useCompanyMutation } from "../hooks/company";

type TRequest = {
    name: string;
}

function CompanyFormPage() {
    const queryClient = useQueryClient();
    const { slug } = useLocalSearchParams();

    const { control, handleSubmit } = useForm<TRequest>({
        defaultValues: { name: "" }
    });

    const { mutate, isPending } = useCompanyMutation({
        onSuccess: () => {
            router.replace("/(tabs)/company");

            Toast.show({
                type: "success",
                text1: "Success",
                text2: "Data is successfully saved"
            });

            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.COMPANY]
            });
        },
        onError: () => {
            Toast.show({
                type: "error",
                text1: "Error",
                text2: "Something went wrong"
            })
        }
    });

    const onSubmit = (value: TRequest) => {
        mutate({
            method: "POST",
            data: value
        });
    }

    return (
        <View className="p-6">
            <View className="flex flex-row gap-2 items-center mb-8">
                <Pressable onPress={() => {
                    router.replace("/(tabs)/company");
                }}>
                    <Ionicons
                        name="chevron-back"
                        size={24}
                    />
                </Pressable>
                <Text className="text-2xl text-center font-medium">Company Form</Text>
            </View>
            <View className="flex gap-4">
                <Controller
                    control={control}
                    name="name"
                    render={({ field: { value, onChange } }) => (
                        <TextInput
                            value={value}
                            onChangeText={(value) => onChange(value)}
                            theme={{
                                roundness: 10
                            }}
                            style={{ backgroundColor: "white" }}
                            label={"Company Name"}
                        />
                    )}
                />
                <Button
                    onPress={handleSubmit(onSubmit)}
                    buttonColor={AppConfig.palette.primary}
                    mode="contained"
                    loading={isPending}
                    disabled={isPending}
                >Save</Button>
            </View>
        </View>
    )
}

export default CompanyFormPage;
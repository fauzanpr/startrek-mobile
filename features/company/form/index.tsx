import { AppConfig } from "@/config/app-config";
import { QUERY_KEYS } from "@/constants/query-keys";
import { Ionicons } from "@expo/vector-icons";
import { useQueryClient } from "@tanstack/react-query";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Pressable, Text, View } from "react-native";
import { ActivityIndicator, Button, TextInput } from "react-native-paper";
import Toast from "react-native-toast-message";
import { useCompanyDetail, useCompanyMutation } from "../hooks/company";

type TRequest = {
    name: string;
}

function CompanyFormPage() {
    const queryClient = useQueryClient();
    const { slug } = useLocalSearchParams();

    const { control, handleSubmit, reset } = useForm<TRequest>({
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

            reset({
                name: ""
            })
        },
        onError: () => {
            Toast.show({
                type: "error",
                text1: "Error",
                text2: "Something went wrong"
            })
        }
    });

    const { data, isFetching } = useCompanyDetail(slug.toString(), slug.toString() === "add");

    const onSubmit = (value: TRequest) => {
        if (slug.toString() === "add") {
            console.log("CREATE");
            mutate({
                method: "POST",
                data: value
            });
        } else {
            console.log("EDIT");
            mutate({
                method: "PUT",
                data: value,
                id: slug?.toString() || ""
            });
        }
    }

    const renderForm = (
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
    );

    const renderLoading = (
        <View className="flex items-center justify-center py-8">
            <ActivityIndicator />
        </View>
    )

    useEffect(() => {        
        if (slug?.toString() !== "add" && !!data) {
            reset({
                name: data?.name || ""
            })
        } else {
            reset({
                name: ""
            })
        }
    }, [data]);

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
            {isFetching ? renderLoading : renderForm}
        </View>
    )
}

export default CompanyFormPage;
import { AppConfig } from "@/config/app-config";
import { useLocalSearchParams } from "expo-router";
import { Controller, useForm } from "react-hook-form";
import { Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";

type TRequest = {
    name: string;
}

function CompanyFormPage() {
    const { slug } = useLocalSearchParams();

    const { control, handleSubmit } = useForm<TRequest>({
        defaultValues: { name: "" }
    });

    const onSubmit = (value: TRequest) => {
        console.log(value);
    }

    return (
        <View className="p-6">
            <Text className="text-2xl text-center font-medium mb-8">Company Form</Text>
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
                    mode="contained">Save</Button>
            </View>
        </View>
    )
}

export default CompanyFormPage;
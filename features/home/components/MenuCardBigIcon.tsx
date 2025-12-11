import { TouchableWithoutFeedback } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { ReactNode } from "react";
import { Text, View } from "react-native";

type TMenuCardBigIcon = {
    icon: ReactNode;
    label: string;
    description: string;
    isSection?: boolean;
}


function MenuCardBigIcon({ icon, label, description, isSection }: TMenuCardBigIcon) {
    if (isSection) {
        return (
            <View className="w-full my-1">
                <Text className="text-gray-500 text-xl">{label}</Text>
            </View>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => router.push("/(tabs)/company")} className="w-full">
            <View>
                <View className="flex flex-row gap-4 items-center mb-2">
                    {icon}
                    <View>
                        <Text className="text-2xl text-gray-800 font-semibold">{label}</Text>
                        <Text className="text-gray-500 text-lg">{description}</Text>
                    </View>
                </View>

                {/* divider */}
                <View className="border border-gray-200"></View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default MenuCardBigIcon
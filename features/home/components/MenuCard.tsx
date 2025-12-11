import { Ionicons } from "@expo/vector-icons";
import classnames from "classnames";
import { ReactNode } from "react";
import { Text, TouchableHighlight, View } from "react-native";

type TMenuCard = {
    renderIcon: ReactNode;
    name: string;
    specialAllMenu?: boolean;
    onPress?: () => void;
    full?: boolean;
}

function MenuCard({ name, renderIcon, specialAllMenu, onPress, full }: TMenuCard) {
    if (specialAllMenu) {
        return (
            <TouchableHighlight onPress={onPress} className={classnames({
                "w-[47%]": !full,
                "w-full": full
            })}>
                <View className='p-4 rounded-3xl border border-blue-700 bg-blue-700 flex flex-row gap-1 justify-center items-center'>
                    <Ionicons name="menu" color={"white"} />
                    <Text className='font-semibold text-white'>All Menus</Text>
                </View>
            </TouchableHighlight>
        )
    }

    return (
        <TouchableHighlight onPress={onPress} className={classnames({
            "w-[47%]": !full,
            "w-full": full
        })}>
            <View className='p-4 rounded-3xl border bg-white flex flex-row gap-1 justify-center items-center'>
                {renderIcon}
                <Text className='font-semibold'>{name}</Text>
            </View>
        </TouchableHighlight>
    )
}

export default MenuCard
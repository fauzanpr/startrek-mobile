import { MENUS } from "@/constants/menu-data";
import { View } from "react-native";
import MenuCardBigIcon from "./MenuCardBigIcon";

function MenusList() {
  return (
    <View className="flex gap-4 flex-wrap">
      {MENUS.map((menu, i) => (
        <MenuCardBigIcon
          key={`${menu}-${i}`}
          icon={menu.icon}
          label={menu.label}
          description={menu.description}
          isSection={menu.is_section}
        />
      ))}
    </View>
  )
}

export default MenusList
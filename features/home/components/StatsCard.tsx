import { ReactNode } from "react";
import { ActivityIndicator, Text, View } from "react-native";

type TStatsCard = {
  label: string;
  value: string;
  renderIcon: ReactNode;
  noBorder?: boolean;
  loading?: boolean;
}

function StatsCard({ label, value, noBorder, renderIcon, loading }: TStatsCard) {
  return (
    <View className="p-4 flex flex-col gap-2 bg-white border-blue-500">
      <View className="flex flex-row gap-2 items-center">
        {renderIcon}
        <Text className="text-xl">{label}</Text>
      </View>

      {loading ? (
        <ActivityIndicator className="w-8 my-3" />
      ) : (
        <Text className="text-4xl text-black font-medium mb-2">{value}</Text>
      )}

      {!noBorder ? (

        <View className="border border-gray-200" />
      ) : null}
    </View>
  )
}

export default StatsCard
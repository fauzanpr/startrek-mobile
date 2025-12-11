import { ActivityIndicator, Text, View } from "react-native";

type TSummaryStatsCard = {
    label: string;
    value: string;
    loading?: boolean;
}

function SummaryStatsCard({ label, value, loading }: TSummaryStatsCard) {
    return (
        <View className='p-6 bg-white rounded-3xl w-[47%] shadow-sm'>
            {loading ? (
                <ActivityIndicator className="text-start w-8 mb-3" />
            ) : (
                <Text className='text-3xl font-medium'>{value}</Text>
            )}
            <Text>{label}</Text>
        </View>
    )
}

export default SummaryStatsCard
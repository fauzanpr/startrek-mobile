import { ActivityIndicator, GestureResponderEvent, Text, TouchableHighlight, View } from "react-native";

type TPvButton = {
  label: string;
  onPress?: (e: GestureResponderEvent) => void;
  pending?: boolean;
}

function PvButton({ label, onPress, pending }: TPvButton) {
  return (
    <TouchableHighlight
      onPress={onPress}
      disabled={pending}
      className='rounded-2xl'
    >
      <View className='bg-primary p-4 rounded-2xl flex items-center justify-center'>
        {pending ? (
          <ActivityIndicator />
        ) : (
          <Text className='text-white font-medium text-lg'>{label}</Text>
        )}
      </View>
    </TouchableHighlight>
  )
}

export default PvButton;
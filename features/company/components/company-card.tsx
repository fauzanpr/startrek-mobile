import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Pressable, Text, View } from 'react-native';

type TCompanyCard = {
    data: {
        name: string;
        created: string;
    }
}

function CompanyCard({ data }: TCompanyCard) {
    return (
        <View className='p-6 border border-gray-200 rounded-xl mb-4 bg-white relative'>
            <Text className='text-lg text-gray-500'>Company Name: <Text className='font-medium text-primary'>{data.name}</Text></Text>
            <Text className='text-lg text-gray-500'>Created: <Text className='font-medium text-primary'>{data.created}</Text></Text>
            <View className='flex flex-row bg-gray-50 rounded-xl overflow-hidden mt-4'>
                <Pressable className='flex-1 p-2 flex items-center bg-blue-100'>
                    <Ionicons name='pencil' size={18} />
                </Pressable>

                <Pressable className='flex-1 flex items-center bg-red-100 p-2'>
                    <Ionicons name='trash' size={18} color={"red"} />
                </Pressable>
            </View>
        </View>
    )
}

export default CompanyCard;
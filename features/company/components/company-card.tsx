import { QUERY_KEYS } from '@/constants/query-keys';
import { Ionicons } from '@expo/vector-icons';
import { useQueryClient } from '@tanstack/react-query';
import React, { useRef } from 'react';
import { Pressable, Text, View } from 'react-native';
import ActionSheet, { ActionSheetRef } from 'react-native-actions-sheet';
import { Button } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { useCompanyMutation } from '../hooks/company';
import { TCompany } from '../type';

type TCompanyCard = {
    data: TCompany;
}

function CompanyCard({ data }: TCompanyCard) {
    const queryClient = useQueryClient();
    const actionSheetRef = useRef<ActionSheetRef>(null);

    const { mutate, isPending } = useCompanyMutation({
        onSuccess: () => {
            Toast.show({
                type: "success",
                text1: "Delete Sucess",
                text2: "Data is successfully deleted"
            });

            queryClient.invalidateQueries({
                queryKey: [QUERY_KEYS.COMPANY]
            });

            if (actionSheetRef.current) {
                actionSheetRef.current.hide();
            }
        },
        onError: () => {
            Toast.show({
                type: "error",
                text1: "Error",
                text2: "Something went wrong"
            });
        }
    })

    const onDelete = () => {
        mutate({
            method: "DELETE",
            id: data.subid
        });
    }

    const onClose = () => {
        if (actionSheetRef.current) {
            actionSheetRef.current.hide();
        }
    }

    const onDeleteButtonClicked = () => {
        if (actionSheetRef.current) {
            actionSheetRef.current.show();
        }
    }

    return (
        <>
            <View className='p-6 border border-gray-200 rounded-xl mb-4 bg-white relative'>
                <Text className='text-lg text-gray-500'>Company Name: <Text className='font-medium text-primary'>{data.name}</Text></Text>
                <Text className='text-lg text-gray-500'>Created: <Text className='font-medium text-primary'>{data.created}</Text></Text>
                <View className='flex flex-row bg-gray-50 rounded-xl overflow-hidden mt-4'>
                    <Pressable className='flex-1 p-2 flex items-center bg-blue-100'>
                        <Ionicons name='pencil' size={18} />
                    </Pressable>

                    <Pressable
                        onPress={onDeleteButtonClicked}
                        className='flex-1 flex items-center bg-red-100 p-2'>
                        <Ionicons name='trash' size={18} color={"red"} />
                    </Pressable>
                </View>
            </View>
            <ActionSheet ref={actionSheetRef}>
                <View className='p-6 flex gap-2'>
                    <Text className='text-3xl text-center font-medium text-red-600'>Danger Zone</Text>
                    <View>
                        <Text className='text-center text-lg my-4'>Are you sure to delete {data.name} from the company list?</Text>
                    </View>

                    <Button
                        mode='outlined'
                        textColor='black'
                        onPress={() => onClose()}
                        disabled={isPending}
                    >Cancel</Button>

                    <Button
                        mode='contained'
                        buttonColor='red'
                        onPress={() => onDelete()}
                        disabled={isPending}
                        loading={isPending}
                    >Delete</Button>
                </View>
            </ActionSheet>
        </>
    )
}

export default CompanyCard;
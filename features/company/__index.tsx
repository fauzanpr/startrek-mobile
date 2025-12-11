import { AppConfig } from '@/config/app-config';
import { Ionicons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, Text, View } from 'react-native';
import { AnimatedFAB, Menu, Searchbar } from 'react-native-paper';

function CompanyPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    console.log("log:visible", visible);
  }, [visible]);

  return (
    <View className='h-full'>
      <View className='p-6 flex gap-4'>
        <Text className='text-2xl font-medium text-center'>Company</Text>

        <View className='mb-4'>
          <Searchbar
            value=''
            placeholder='Search here'
            style={{
              backgroundColor: "white"
            }}
          />
        </View>

        <ScrollView className='flex gap-4'>
          <View className='p-6 border border-gray-200 rounded-xl mb-4 bg-white relative'>
            <Text className='text-lg text-gray-500'>Company Name: <Text className='font-medium text-primary'>Nama Company</Text></Text>
            <Text className='text-lg text-gray-500'>Created: <Text className='font-medium text-primary'>12/12/2025</Text></Text>


            <View className="absolute top-6 right-4">
              <Menu
                visible={visible}
                onDismiss={() => setVisible(false)}
                anchor={(
                  <Pressable onPress={() => {
                    console.log("pressed");
                    setVisible(true)
                  }}>
                    <Ionicons
                      name='ellipsis-vertical-outline'
                      size={24}
                      color={"gray"}
                    />
                  </Pressable>
                )}
              >
                <Menu.Item title="Delete" />
                <Menu.Item title="Edit" />
              </Menu>
            </View>
          </View>

        </ScrollView>
      </View>
      <AnimatedFAB
        icon={"plus"}
        label='Add Company'
        extended={false}
        color={"white"}
        style={{
          position: "absolute",
          bottom: 20,
          right: 20,
          backgroundColor: AppConfig.palette.primary
        }}
      />
    </View>
  )
}

export default CompanyPage;

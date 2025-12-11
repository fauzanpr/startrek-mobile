import React from 'react';
import { ScrollView, Text } from 'react-native';
import MenusList from '../home/components/MenusList';

function MenusPage() {
  return (
    <>
      <Text className='text-center text-3xl font-medium p-6'>All Menus</Text>
      <ScrollView className='p-6 mb-16'>
        <MenusList />
      </ScrollView>
    </>
  )
}

export default MenusPage;
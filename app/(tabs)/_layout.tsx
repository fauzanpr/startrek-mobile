import { Tabs } from 'expo-router';
import React, { ReactNode } from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { AppConfig } from '@/config/app-config';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const MENUS_DATA: {
  name: string;
  title?: string;
  tabBarIcon: (color: string) => ReactNode;
  hide?: boolean;
}[] = [
    {
      name: "home",
      title: "Home",
      tabBarIcon: (color) => <Ionicons
        name='home'
        size={24}
        color={color}
      />
    },
    {
      name: "menus",
      title: "All Menus",
      tabBarIcon: (color) => <Ionicons
        name='grid'
        size={24}
        color={color}
      />
    },
    {
      name: "company/index",
      hide: true,
      tabBarIcon: () => <></>
    },
    {
      name: "company/[slug]",
      hide: true,
      tabBarIcon: () => <></>
    }
  ]

export default function TabLayout() {
  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: AppConfig.palette.primary,
          headerShown: false,
          tabBarButton: HapticTab,
        }}>
        {MENUS_DATA.map(menu => (
          <Tabs.Screen
            key={menu.name}
            name={menu.name}
            options={{
              title: menu.title,
              tabBarIcon: ({ color }) => menu.tabBarIcon(color),
              ...(menu.hide ? { href: null } : {})
            }}
          />
        ))}
      </Tabs>
    </SafeAreaProvider>
  );
}

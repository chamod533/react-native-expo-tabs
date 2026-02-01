import { Tabs } from 'expo-router';
import React from 'react';
import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const zodiacIconName = "zodiac-aries";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>

      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      
      <Tabs.Screen
  name="likes"
  options={{
    title: "Likes",
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="heart-outline" size={26} color={color} />
    ),
  }}
/>

      <Tabs.Screen
  name="messages"
  options={{
    title: "Messages",
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="message-outline" size={26} color={color} />
    ),
  }}
/>
      
      <Tabs.Screen
  name="contact"
  options={{
    title: "Contact",
    tabBarIcon: ({ color }) => (
      <MaterialCommunityIcons name="account-box-outline" size={26} color={color} />
    ),
  }}
/>

     
    </Tabs>
  );
}
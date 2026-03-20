
import { useTheme } from '@/src/core/theme/theme.hooks';
import { HapticTab } from '@/src/shared/components/HapticTab';
import { AnimatedTabButton } from '@/src/ui/shared/components/AnimatedTabButton';
import { Feather } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  const { colors } = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textTertiary,
        tabBarStyle: {
          backgroundColor: colors.tabBar,
          borderTopColor: colors.tabBarBorder,
          borderColor: 'red',
          borderTopWidth: 0.3,
          elevation: 0,
          shadowOpacity: 0,
          marginBottom: 0,
          paddingTop: 10,
          paddingBottom: 4,
          height: 120,
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => <Feather size={28} name="home" color={color} />,
          tabBarButton: (props) => <AnimatedTabButton {...props} />,
        }}
      />
    </Tabs>
  );
}

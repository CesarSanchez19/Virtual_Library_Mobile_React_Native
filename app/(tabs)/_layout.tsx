import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

export default function Tablayout() {
  return (
    <Tabs screenOptions={{ 
      tabBarActiveTintColor: '#D5451B',
      headerStyle: {
          backgroundColor: '#521C0D',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Tabs.Screen
        name="Dashboard"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Form"
        options={{
          title: 'Reseñas',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="wpforms" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="User"
        options={{
          title: 'Perfil de usuario',
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

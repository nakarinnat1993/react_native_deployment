import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StateAndForm from './screens/StateAndForm';
import FlexboxLayout from './screens/FlexboxLayout';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

function getTabBarIcon(routeName: string) {
  return ({ color, size }: { color: string; size: number }) => {
    let iconName = 'alert-circle-outline';
    if (routeName === 'StateAndForm') {
      iconName = 'reorder-four-outline';
    } else if (routeName === 'FlexboxLayout') {
      iconName = 'grid-outline';
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  };
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="StateAndForm"
        screenOptions={({ route }) => ({
          tabBarIcon: getTabBarIcon(route.name),
          tabBarActiveTintColor: '#007AFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="StateAndForm" component={StateAndForm} options={{ tabBarLabel: 'State & Form' }} />
        <Tab.Screen name="FlexboxLayout" component={FlexboxLayout} options={{ tabBarLabel: 'Flexbox Layout' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

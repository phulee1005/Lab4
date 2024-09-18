import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SettingsScreen from './screens/SettingsScreen';
import { store } from './store/store';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MealsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: '#3f2f25' },
      }}
    >
      <Stack.Screen
        name="MealsCategories"
        component={CategoriesScreen}
        options={{
          title: 'Danh mục',
        }}
      />
      <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Danh mục') {
                iconName = focused ? 'home' : 'home-outline'; 
              } else if (route.name === 'Yêu thích') {
                iconName = focused ? 'heart' : 'heart'; 
              } else if (route.name === 'Cài đặt') {
                iconName = focused ? 'cog' : 'cog-outline'; 
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#351401',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Danh mục" component={MealsNavigator} options={{ headerShown: false }} />
          <Tab.Screen name="Yêu thích" component={FavoritesScreen} />
          <Tab.Screen name="Cài đặt" component={SettingsScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

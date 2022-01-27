import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FeedScreen from '../screens/feed';
import CreateStoryScreen from '../screens/createStory';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'FeedScreen') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'CreateStoryScreen') {
            iconName = focused ? 'create' : 'create-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="FeedScreen" component={FeedScreen} />
      <Tab.Screen name="CreateStoryScreen" component={CreateStoryScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

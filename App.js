import React from 'react';
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

//ICONS
import { MaterialIcons } from '@expo/vector-icons'

//PAGES
import lista from './src/pages/lista'
import home from './src/pages/home'

import colors from './src/styles/colors/colors'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            }else if (route.name === "Lista") {
              iconName = focused ? "view-list" : "view-list";
            }

            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />
          },
        })}

        tabBarOptions={{
          style:{backgroundColor:colors.foreground},
          activeTintColor: colors.primary,
          inactiveTintColor: colors.secondary,
          labelStyle: { fontSize: 15 },
        }}
      > 
        <Tab.Screen name="Home" component={home} />
        <Tab.Screen name="Lista" component={lista} />

      </Tab.Navigator> 
    </NavigationContainer>
  )
}


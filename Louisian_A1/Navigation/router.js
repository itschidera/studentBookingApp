import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from '../screens/SignIn';
import { NavigationContainer } from "@react-navigation/native";
import Dashboard from '../screens/Dashboard.js';
import Bookings from '../screens/Bookings.js';
const Stack = createNativeStackNavigator();


const Router =()=> {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="SignIn" component={SignIn} />
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="Bookings" component={Bookings} />
  </Stack.Navigator>

    </NavigationContainer>
    
  )
}
export default Router
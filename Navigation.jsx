import React from 'react';
import { View, Text } from 'react-native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


//Screen
import HomeScreen from './screens/HomeScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ImageScreen from './screens/ImageScreen';
import TimeScreen from './screens/TimeScreen';

const Stack = createNativeStackNavigator();

function StackNav() {
    return(
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen 
                name='Home' 
                component={HomeScreen} 
                options={{
                    headerShown:false
                }}
            ></Stack.Screen>
            <Stack.Screen 
                name='Welcome' 
                component={WelcomeScreen}
                options={{
                    // headerShown:false,
                    headerBackTitleVisible: false
                }}
            ></Stack.Screen>
            <Stack.Screen 
                name='Image' 
                component={ImageScreen}
                options={{
                    // headerShown:true,
                    headerBackTitleVisible: false
                }}
            ></Stack.Screen>
            <Stack.Screen 
                name='Time' 
                component={TimeScreen}
                options={{
                    // headerShown:true,
                    headerBackTitleVisible: false
                }}
            ></Stack.Screen>
        </Stack.Navigator>
    );
}

export default Navigation = () => {
    return (
        <NavigationContainer>
            <StackNav />
        </NavigationContainer>
    )
}

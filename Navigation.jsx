import React from 'react';
import { View, Text } from 'react-native';


import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


//Screen
import AccessScreen from './screens/AccessScreen';
import WelcomeScreen from './screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

function StackNav() {
    return(
        <Stack.Navigator initialRouteName='Access'>
            <Stack.Screen 
                name='Access' 
                component={AccessScreen} 
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

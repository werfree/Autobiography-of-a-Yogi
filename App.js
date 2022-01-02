import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import {MyTheme} from './screens/theme';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

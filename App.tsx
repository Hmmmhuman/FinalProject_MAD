// App Component
import React from 'react';
import SplashScreen from './src/pages/splashScreen/index';
import HomePage from './src/pages/HomePage/index';
import SignIn from './src/pages/SignIn/index';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sign"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Page"
          component={HomePage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

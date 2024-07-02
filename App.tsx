import React from 'react';
import SplashScreen from './src/pages/splashScreen/index';
import SignUp from './src/pages/SignUp';
import Sign from './src/pages/Sign';
import {Signin} from './src/pages';
import HomePage from './src/pages/HomePage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Sign"
            component={Signin}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;

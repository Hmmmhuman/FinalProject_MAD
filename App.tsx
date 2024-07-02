import React from 'react';
import SplashScreen from './src/pages/splashScreen/index';
import SignUp from './src/pages/SignUp';
import Sign from './src/pages/Sign';
<<<<<<< HEAD
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
            component={Sign}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
=======
import SignIn from './src/pages/SignIn';
import HomePage from './src/pages/HomePage';

const App = () => {
  return <HomePage />;
>>>>>>> c904a8cdd7631fb7ef8b3b2b5548641790e47259
};

export default App;

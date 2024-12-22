import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screen} from './screen';
import CreateProfile from '../screens/createProfile';
import SetupProfile from '../screens/setupProfile';
import Avatar from '../screens/avatar';
import OTP from '../screens/otp';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={screen.CreateProfile}
          component={CreateProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screen.OTP}
          component={OTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screen.SetupProfile}
          component={SetupProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={screen.avatar}
          component={Avatar}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;

import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import { Text, TouchableOpacity } from 'react-native';
import PushNotification from 'react-native-push-notification';
import MyStack from './src/navigation';

function App() {
  return (
    <MyStack/>
  );
}

export default App;

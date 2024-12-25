import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import { Text, TouchableOpacity } from 'react-native';
import PushNotification from 'react-native-push-notification';

function Notification() {

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }


  const getToken = async () => {
    const token = await messaging().getToken();
    console.log('FCM Token:', token);
  };


  const initLocalNotifications = () => {
    PushNotification.configure({
      onNotification: function (notification) {
        console.log('Local Notification:', notification);
      },
      requestPermissions: true,
    });
  };


  const triggerLocalNotification = () => {
    PushNotification.localNotification({
      title: 'Test Notification',
      message: 'This is a local notification triggered by pressing the button.',
    });
  };


  const scheduleLocalNotification = () => {
    const date = new Date();
    date.setSeconds(date.getSeconds() + 10); 

    PushNotification.localNotificationSchedule({
      title: 'Scheduled Notification',
      message: 'This is a scheduled local notification.',
      date: date, 
    });

    console.log('Scheduled notification for', date.toString());
  };


  useEffect(() => {
    requestUserPermission();
    getToken();
  }, []);

  const handlePress = () => {
    scheduleLocalNotification();  
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text>Press Me for Notifications</Text>
    </TouchableOpacity>
  );
}

export default Notification;

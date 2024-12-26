import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
// import {styles} from './styles';
import PushNotification from 'react-native-push-notification';
// import PushController from '../../utils/PushNotification';
import {getMessaging} from '@react-native-firebase/messaging';



const Notification = () => {
  const tokenid = async () => {
    await getMessaging().registerDeviceForRemoteMessages();
    const token = await getMessaging().getToken();
    console.log(token);
  };
  useEffect(() => {
    tokenid();
  }, []);

  const LocalNotification = () => {
    const key = Date.now().toString();
    PushNotification.createChannel(
      {
        channelId: key,
        channelName: 'Local message hgdhjsjk',
        channelDescription: 'Notification for Local message',
        importance: 4,
        vibrate: true,
      },
      created => console.log(`createChannel returned '${created}'`),
    );

    const scheduleTime = new Date(Date.now() + 5000);

    PushNotification.localNotificationSchedule({
      channelId: key,
      title: 'Local Message jhdghjsjjdf',
      message: 'Local message !!',
      date: scheduleTime,
      allowWhileIdle: true,
      vibrate: true,
      playSound: true,
      soundName: 'default',
      repeatType: 'day',
      repeatTime: 1,
    });

    console.log(`Notification scheduled for: ${scheduleTime}`);
  };

  
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        // style={styles.scrollView}
        >
        <View 
        // style={styles.listHeader}
        >
          <Text>Push Notifications</Text>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={LocalNotification} 
      // style={styles.button}
      >
          <Text 
          // style={styles.text}
          >Push Notification</Text>
        </TouchableOpacity>
      {/* <PushController /> */}
    </SafeAreaView>
  );
};

export default Notification;
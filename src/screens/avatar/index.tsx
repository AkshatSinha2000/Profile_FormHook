import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {string} from '../../utils/string';
import avatarData from './value';
import CustomButton from '../../components/CustomButton';
import {image} from '../../assets';
import {screen} from '../../navigation/screen';
import CustomBackArrow from '../../components/CustomBackArrow';
import styles from './styles';

interface AvatarItem {
  id: string;
  image: any;
}

const Avatar = () => {
  const navigation = useNavigation<any>();
  const [Select, setSelect] = useState('');
  const handleSubmit = async () => {
    console.log('first', Select);
    try {
      await AsyncStorage.setItem('avatar', JSON.stringify(Select));
      await AsyncStorage.setItem('@new_post_image','');
      navigation.reset({index: 0, routes: [{name: screen.SetupProfile}]});
    } catch (error) {
      console.error('Failed to save image URI:', error);
    }
  };

  const handleAvatar = ({item}:{item :AvatarItem}) => {
    return (
      <TouchableOpacity
        style={styles.avatarContainer}
        onPress={() => setSelect(item.image)}>
        <Image
          source={item.image}
          style={Select === item.image ? styles.selectedAvatar : styles.avatar}
        />
        {Select === item.image && (
          <Image source={image.pinkTick} style={styles.tick} />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CustomBackArrow onPress={() => navigation.goBack()} />

      <View style={styles.mainContainer}>
        <Text style={styles.heading}>{string.SelectAvatar}</Text>
        <Text style={styles.desc}>{string.AvatarDesc}</Text>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View style={styles.flatListContainer}>
            <FlatList
              data={avatarData}
              renderItem={handleAvatar}
              keyExtractor={item => item.id}
              numColumns={3}
              showsVerticalScrollIndicator={false}
              bounces={false}
              scrollEnabled={false}
            />
          </View>
        </ScrollView>
      </View>
      <CustomButton text="Continue" onPress={handleSubmit} isPress={true} />
    </SafeAreaView>
  );
};

export default Avatar;

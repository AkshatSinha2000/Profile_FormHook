import {Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {icon} from '../../assets';
import styles from './styles';

interface CustomBackArrowProps {
  onPress: () => void | null;
}

const CustomBackArrow = ({onPress}: CustomBackArrowProps) => {
  return (
    <View style={styles.safeAreaView}>
      <TouchableOpacity style={styles.backArrowButton} onPress={onPress}>
        <Image source={icon.backArrow} style={styles.backArrow} />
      </TouchableOpacity>
    </View>
  );
};

export default CustomBackArrow;

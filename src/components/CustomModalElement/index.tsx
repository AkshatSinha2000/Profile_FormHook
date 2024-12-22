import {Image,Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {icon} from '../../assets';
import styles from './styles';

interface CustomModalElementProps {
  image: any 
  text: string;
  onPress: () => void;
}


const CustomModalElement = ({image, text, onPress}:CustomModalElementProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
        <Text style={styles.text}>{text}</Text>
      </View>
      <Image source={icon.forwardArrow} style={styles.icon} />
    </TouchableOpacity>
  );
};

export default CustomModalElement;

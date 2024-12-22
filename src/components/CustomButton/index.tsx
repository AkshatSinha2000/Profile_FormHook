import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {color} from '../../themes/color';

interface CustomButtonProps {
  text: string;
  onPress: () => void;
  isPress: boolean;
}

const CustomButton = ({text, onPress, isPress}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => isPress && onPress()}
      style={[
        styles.buttonContainer,
        {backgroundColor: isPress ? color.checkbox : color.continue},
      ]}>
      <Text style={styles.buttontext}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

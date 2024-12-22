import {
  Text,
  TextInput,
  View,
  Animated,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Controller} from 'react-hook-form';
import {vw} from '../../utils/Dimensions';
import styles from './styles';
import {color} from '../../themes/color';

interface CustomInputProps {
  control: any;
  placeholder: string;
  name: string;
  errors?: string | undefined;
  textInput?: object;
  label?: object;
  secureTextEntry?: () => void;
  showPassword?: boolean;
  iconImage?: any;
}

const CustomInput = ({
  control,
  placeholder,
  name,
  errors,
  textInput,
  label,
  secureTextEntry,
  showPassword,
  iconImage,
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const translateY = useState(new Animated.Value(0))[0];
  const translateX = useState(new Animated.Value(0))[0];
  const fontsize = useState(new Animated.Value(vw(14)))[0];

  const targetFontSize = isFocused ? vw(12) : vw(14);
  useEffect(() => {
    Animated.timing(translateY, {
      toValue: isFocused ? vw(-30) : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(translateX, {
      toValue: isFocused ? vw(10) : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    Animated.timing(fontsize, {
      toValue: targetFontSize > 0 ? targetFontSize : 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused]);

  return (
    <View>
      <View>
        <Controller
          control={control}
          name={name}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              style={textInput}
              secureTextEntry={showPassword}
              onBlur={() => {
                value === '' ? setIsFocused(false) : null;
                value === '' ? onBlur() : null;
              }}
              onFocus={() => {
                setIsFocused(true);
              }}
              onChangeText={onChange}
              value={value}
            />
          )}
        />

        <TouchableOpacity style={styles.eyeContainer} onPress={secureTextEntry}>
          <Image source={iconImage} style={styles.eye} />
        </TouchableOpacity>

        <Animated.View
          style={{
            transform: [{translateY: translateY}, {translateX: translateX}],
          }}>
          <Pressable
            onPress={() => (isFocused ? null : setIsFocused(!isFocused))}>
            <Animated.Text
              style={[
                label,
                {
                  fontSize: fontsize,
                  color: isFocused ? color.grey : color.black,
                },
              ]}
              numberOfLines={1}>
              {placeholder}
            </Animated.Text>
          </Pressable>
        </Animated.View>
      </View>
      {errors && <Text style={styles.error}>{errors}</Text>}
    </View>
  );
};

export default CustomInput;

import {Text, View, TextInput} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {yupResolver} from '@hookform/resolvers/yup';
import {useForm, Controller} from 'react-hook-form';
import * as yup from 'yup';
import {useNavigation} from '@react-navigation/native';

import React, {useState, useRef} from 'react';
import {color} from '../../themes/color';
import {string} from '../../utils/string';
import CustomButton from '../../components/CustomButton';
import {screen} from '../../navigation/screen';
import CustomBackArrow from '../../components/CustomBackArrow';
import styles from './styles';

const OTP = () => {
  const navigation = useNavigation<any>();
  const schema = yup
    .object({
      otp1: yup.string().required('This field is required'),
      otp2: yup.string().required('This field is required'),
      otp3: yup.string().required('This field is required'),
      otp4: yup.string().required('This field is required'),
      otp5: yup.string().required('This field is required'),
    })
    .required();

  const {
    control,
    handleSubmit,
    formState: {errors, isValid},
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const [otp, setOtp] = useState(['', '', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState(null);
  const inputRefs = useRef([]);

  const handleOtpChange = (text: string, index: number) => {
    let otpCopy = [...otp];
    otpCopy[index] = text;
    setOtp(otpCopy);
    if (text.length === 1 && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
    if (text.length === 0 && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const onSubmit = (data: any) => {
    navigation.navigate(screen.SetupProfile);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CustomBackArrow
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View style={styles.mainContainer}>
        <Text style={styles.heading}>{string.otpHeading}</Text>
        <View style={styles.descContainer}>
          <Text style={styles.desc}>{string.otpDesc}</Text>
          <Text style={styles.desc}>{string.phoneNumber}</Text>
        </View>
        <View style={styles.enterOtpContainer}>
          <Text style={styles.digit}>{string.digit}</Text>
          <View style={styles.otpInput}>
            {Array.from({length: 5}).map((_, index) => (
              <Controller
                key={index}
                control={control}
                name={`otp${index + 1}`}
                render={({field: {onChange, value}}) => (
                  <TextInput
                    ref={ref => (inputRefs.current[index] = ref)}
                    value={value || otp[index]}
                    onChangeText={text => {
                      onChange(text);
                      handleOtpChange(text, index);
                    }}
                    keyboardType="numeric"
                    maxLength={1}
                    style={[
                      styles.textInput,
                      {
                        borderColor:
                          focusedIndex === index
                            ? color.black
                            : color.countryPickerContainer,
                      },
                    ]}
                    onFocus={() => setFocusedIndex(index)}
                    onBlur={() => setFocusedIndex(null)}
                    onKeyPress={({nativeEvent}) => {
                      if (
                        nativeEvent.key === 'Backspace' &&
                        index > 0 &&
                        otp[index] === ''
                      ) {
                        setOtp(prevOtp => {
                          const newOtp = [...prevOtp];
                          newOtp[index - 1] = '';
                          return newOtp;
                        });
                      }
                    }}
                  />
                )}
              />
            ))}
          </View>
        </View>
        <Text style={styles.resend}>{string.Resend}</Text>
      </View>
      <CustomButton
        text={'Verify'}
        onPress={handleSubmit(onSubmit)}
        isPress={isValid}
      />
    </SafeAreaView>
  );
};

export default OTP;

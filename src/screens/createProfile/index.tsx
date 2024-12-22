import {useForm, Controller, SubmitHandler} from 'react-hook-form';
import CountryPicker from 'react-native-country-picker-modal';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import parsePhoneNumber from 'libphonenumber-js';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {vw} from '../../utils/Dimensions';
import {icon} from '../../assets';
import CustomButton from '../../components/CustomButton';
import styles from './styles';
import {string} from '../../utils/string';
import {useNavigation} from '@react-navigation/native';
import {screen} from '../../navigation/screen';
import CustomInput from '../../components/CustomInput';
import {color} from '../../themes/color';
import CustomBackArrow from '../../components/CustomBackArrow';

const CreateProfile = () => {
  const navigation = useNavigation<any>();
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [buttonEnable, setButtonEnable] = useState(true);
  const [checkbox, setCheckbox] = useState(false);
  const [countryCode, setCountryCode] = useState('US');
  const [callingCode, setCallingCode] = useState('1');

  const validatePhoneNumberLength = (phoneNumber: string, countryCode: any) => {
    try {
      const parsedPhone = parsePhoneNumber(phoneNumber, countryCode);
      console.log(parsedPhone?.isValid());
      if (parsedPhone) {
        const numberLength = parsedPhone.nationalNumber.length;
        const validLength = parsedPhone.isValid();
        return validLength ? undefined : 'Invalid phone number';
      }
      return 'Invalid phone number';
    } catch (error) {
      return 'Invalid phone number';
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const schema = yup
    .object({
      firstName: yup
        .string()
        .required('Enter name')
        .matches(/^[A-Za-z\s]+$/, 'Name should only contain letters and spaces')
        .min(2, 'Name should be at least 2 characters long')
        .max(50, 'Name should not exceed 50 characters'),
      email: yup
        .string()
        .required('Email is required')
        .email('Enter a valid email address')
        .matches(
          /^[^@]+@[^@]+\.[^@]{2,}$/,
          'Email should have only one @ and a valid domain',
        ),
      phonenumber: yup
        .string()
        .required('Enter phone number')
        .test(
          'phone-length',
          'Phone number is invalid for the selected country',
          value => validatePhoneNumberLength(value, countryCode) === undefined,
        ),
      password: yup
        .string()
        .required('Enter password')
        .min(6, 'Password should be at least 6 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/\d/, 'Password must contain at least one number')
        .matches(
          /[@$!%*?&]/,
          'Password must contain at least one special character (@, $, !, %, *, ?, &)',
        ),
      country: yup.string(),
    })
    .required();

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors, isValid},
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  useEffect(() => {
    setButtonEnable(isValid && checkbox);
  }, [isValid, checkbox]);

  const onSubmit = (data: any) => {
    try {
      if (data) {
        navigation.navigate(screen.OTP);
        reset();
        setCheckbox(false);
        console.log(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CustomBackArrow onPress={() => {}} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
        keyboardVerticalOffset={20}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View style={styles.mainContainer}>
            <Text style={styles.heading}>{string.CreateProfile}</Text>
            <Text style={styles.desc}>{string.LoginDescription}</Text>
            <CustomInput
              control={control}
              iconImage={''}
              placeholder="Name"
              secureTextEntry={toggleShowPassword}
              showPassword={false}
              textInput={styles.textInput}
              label={styles.label}
              name="firstName"
              errors={errors.firstName?.message}
            />

            <View style={styles.countryPicker}>
              <Controller
                control={control}
                render={({field: {onChange}}) => (
                  <TouchableOpacity
                    style={styles.countryPickerContainer}
                    onPress={() => setPickerVisible(true)}>
                    <CountryPicker
                      withFlag
                      withCallingCode
                      withFilter
                      countryCode={countryCode}
                      visible={isPickerVisible}
                      onSelect={country => {
                        onChange(country.callingCode[0]);
                        setCountryCode(country.cca2);
                        setCallingCode(country.callingCode[0]);
                        setPickerVisible(false);
                      }}
                      onClose={() => setPickerVisible(false)}
                    />
                    <Text style={styles.callingCode}>+{callingCode}</Text>
                    <Image source={icon.downArrow} style={styles.downArrow} />
                  </TouchableOpacity>
                )}
                name="country"
              />
              <CustomInput
                control={control}
                iconImage={''}
                placeholder="Phone Number"
                secureTextEntry={toggleShowPassword}
                showPassword={false}
                name="phonenumber"
                textInput={styles.phoneNumber}
                label={styles.labelOne}
                errors={errors.phonenumber?.message}
              />
            </View>
            <CustomInput
              control={control}
              iconImage={''}
              placeholder="Email"
              showPassword={false}
              secureTextEntry={toggleShowPassword}
              name="email"
              textInput={styles.textInput}
              label={styles.label}
              errors={errors.email?.message}
            />
            <CustomInput
              control={control}
              secureTextEntry={toggleShowPassword}
              showPassword={showPassword}
              placeholder="Password"
              name="password"
              iconImage={icon.eye}
              textInput={styles.passwordText}
              label={styles.label}
              errors={errors.password?.message}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={[
            styles.checkbox,
            {
              backgroundColor: checkbox ? color.pink : color.white,
              borderWidth: checkbox ? 0 : 1,
              padding: checkbox ? vw(4) : vw(6.6),
            },
          ]}
          onPress={() => setCheckbox(!checkbox)}>
          {checkbox && (
            <Image source={icon.checkbox} style={styles.checkboxImage} />
          )}
        </TouchableOpacity>
        <Text style={{color: color.grey}}>
          I agree to the{' '}
          <Text style={{color: color.checkbox, fontWeight: 'bold'}}>
            terms of use.
          </Text>
        </Text>
      </View>
      <CustomButton
        onPress={handleSubmit(onSubmit)}
        text={'Continue'}
        isPress={buttonEnable}
      />
    </SafeAreaView>
  );
};

export default CreateProfile;

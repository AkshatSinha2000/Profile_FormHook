import AsyncStorage from '@react-native-async-storage/async-storage';
import {useForm, Controller} from 'react-hook-form';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {yupResolver} from '@hookform/resolvers/yup';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as yup from 'yup';
import {Dropdown} from 'react-native-element-dropdown';

import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {icon, image} from '../../assets';
import CustomInput from '../../components/CustomInput';
import {vw} from '../../utils/Dimensions';
import {color} from '../../themes/color';
import CustomButton from '../../components/CustomButton';
import CustomModalElement from '../../components/CustomModalElement';
import {string} from '../../utils/string';
import styles from './styles';
import {screen} from '../../navigation/screen';
import CustomBackArrow from '../../components/CustomBackArrow';

const data = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
  {label: 'Others', value: 'others'},
  {label: 'Prefer not to say', value: 'Prefer not to say'},
];

const SetupProfile = () => {
  const navigation = useNavigation<any>();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dateValue, setdate] = useState('12/12/2000');
  const [buttonEnable, setButtonEnable] = useState(true);
  const [values, setValues] = useState('');
  const [avatar, setAvatar] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [imageUri, setImageUri] = React.useState('');

  const handleNavigation = () => {
    navigation.navigate(screen.CreateProfile);
  };

  const handleAsync = async () => {
    const uri = await AsyncStorage.getItem('@new_post_image');
    const avatar = await AsyncStorage.getItem('avatar');
    const s = JSON.stringify(uri);
    const j = JSON.parse(s);
    const avatarImage = JSON.stringify(avatar);
    const finalAvatar = JSON.parse(avatarImage);
    setImageUri(j);
    setAvatar(finalAvatar);
  };

  useEffect(() => {
    handleAsync();
  }, []);

  const openGallery = () => {
    launchImageLibrary(
      {mediaType: 'photo', quality: 1},
      async (response: any) => {
        if (response.assets && response.assets[0]) {
          setModalVisible(false);
          const uri = response.assets[0].uri;
          setImageUri(uri);
          await saveImageUri(uri);
        }
      },
    );
  };

  const handleTakePhoto = () => {
    launchCamera({mediaType: 'photo', quality: 1}, async (response: any) => {
      if (response.assets && response.assets[0]) {
        const uri = response.assets[0].uri;
        setImageUri(uri);
        await saveImageUri(uri);
      }
    });
  };

  const saveImageUri = async (uri: string) => {
    try {
      await AsyncStorage.setItem('@new_post_image', uri);
      await AsyncStorage.setItem('avatar', '');
    } catch (error) {
      console.error('Failed to save image URI:', error);
    }
  };

  const renderLabel = () => {
    if (values || isFocus) {
      return <Text style={[styles.labels, {color: color.grey}]}>Gender</Text>;
    }
    return null;
  };

  const renderItem = (item: any) => {
    console.log(item.value);
    return (
      <View style={values === item.value ? styles.itemSelected : styles.item}>
        <Text
          style={[
            styles.selectedTextStyle,
            {color: values === item.value ? color.green : color.black},
          ]}>
          {item.label}
        </Text>
        {values === item.value ? (
          <Image source={icon.greenTick} style={styles.greenTick} />
        ) : (
          <Image source={icon.emptyDot} style={styles.emptyDot} />
        )}
      </View>
    );
  };

  const schema = yup
    .object({
      username: yup
        .string()
        .required('Enter name')
        .matches(/^[A-Za-z0-9_]+$/, 'Try name Akshat_123')
        .min(2, 'Try name Akshat_123')
        .max(50, 'Name should not exceed 50 characters'),
      birthday: yup
        .string()
        .required('Enter Birthday')
        .matches(
          /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/,
          'Birthday must be in DD/MM/YYYY format',
        ),
      gender: yup.string().required('Choose Gender'),
      code: yup
        .string()
        .matches(/^[0-9]{6}$/, 'Phone number must be exactly 6 digits'),
    })
    .required();

  const {
    control,
    handleSubmit,
    reset,
    formState: {errors, isValid},
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  useEffect(() => {
    setButtonEnable(isValid);
  }, [isValid]);

  const handelVisible = () => {
    setDatePickerVisibility(true);
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: any) => {
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    setdate(formattedDate);
    setValue('birthday', formattedDate);
    console.log('date set is', formattedDate);
    hideDatePicker();
  };

  const onSubmit = (data: any) => {
    try {
      if (data) {
        console.log(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const Avatar = () => {
    navigation.navigate(screen.avatar);
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <CustomBackArrow onPress={handleNavigation} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}
        keyboardVerticalOffset={10}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <View style={styles.mainContainer}>
            <Text style={styles.heading}>{string.SetupProfile}</Text>
            <Text style={styles.desc}>{string.SetupDescription}</Text>

            <View style={styles.imageUploadContainer}>
              <Image
                source={
                  imageUri
                    ? {uri: imageUri}
                    : avatar
                    ? avatar
                    : image.profileImage
                }
                style={styles.profileImage}
              />
              <View>
                <Text style={styles.profile}>{string.ProfilePicture}</Text>
                <TouchableOpacity
                  style={styles.uploadButton}
                  onPress={() => setModalVisible(true)}>
                  <Text style={styles.uploadText}>{string.UploadImage}</Text>
                </TouchableOpacity>
              </View>
            </View>

            <CustomInput
              control={control}
              placeholder="Username"
              iconImage={errors.username ? icon.cross : icon.greenTick}
              showPassword={false}
              secureTextEntry={() => {
                null;
              }}
              name="username"
              textInput={styles.textInput}
              label={styles.label}
              errors={errors.username?.message}
            />

            <CustomInput
              control={control}
              placeholder="Birthday"
              iconImage={icon.calender}
              showPassword={false}
              secureTextEntry={handelVisible}
              name="birthday"
              textInput={styles.passwordText}
              label={styles.label}
              errors={errors.birthday?.message}
            />

            <View>
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                pickerStyleIOS={{alignItems: 'center'}}
                modalStyleIOS={{
                  justifyContent: 'center',
                  marginHorizontal: vw(10),
                }}
                display="inline"
              />
            </View>

            <View style={styles.container}>
              {renderLabel()}
              <Controller
                control={control}
                render={({field: {onChange}}) => (
                  <Dropdown
                    style={[
                      styles.dropdown,
                      isFocus && {borderColor: color.countryPickerContainer},
                    ]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    showsVerticalScrollIndicator={false}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Gender' : ''}
                    searchPlaceholder="Search..."
                    value={values}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    itemContainerStyle={styles.itemContainerStyle}
                    containerStyle={styles.containerStyles}
                    renderItem={renderItem}
                    onChange={item => {
                      onChange(item.value);
                      setValues(item.value);
                      setIsFocus(false);
                    }}
                  />
                )}
                name="gender"
              />
              {errors.gender && (
                <Text style={styles.error}>{errors.gender.message}</Text>
              )}
            </View>
            <CustomInput
              control={control}
              placeholder="Referral Code (Optional)"
              iconImage={''}
              showPassword={false}
              secureTextEntry={handelVisible}
              name="code"
              textInput={styles.passwordText}
              label={styles.label}
              errors={errors.code?.message}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <CustomButton
        onPress={handleSubmit(onSubmit)}
        text={'Continue'}
        isPress={buttonEnable}
      />

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <TouchableWithoutFeedback
          onPress={() => setModalVisible(!modalVisible)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalHeadingContainer}>
                <Text style={styles.modalText}>{string.ProfilePhoto}</Text>
              </View>
              <CustomModalElement
                text={string.uploadText}
                image={image.uploadElement}
                onPress={openGallery}
              />
              <CustomModalElement
                text={string.useCamera}
                image={image.useCamera}
                onPress={handleTakePhoto}
              />
              <CustomModalElement
                text={string.Avatar}
                image={image.Avatar}
                onPress={Avatar}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

export default SetupProfile;

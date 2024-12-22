import {StyleSheet} from 'react-native';
import {vw} from '../../utils/Dimensions';
import {color} from '../../themes/color';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: color.white,
  },
  heading: {
    fontSize: vw(28),
    fontWeight: '700',
  },
  mainContainer: {
    paddingHorizontal: vw(35),
    paddingVertical: vw(20),
    flex: 1,
  },
  desc: {
    fontSize: vw(16),
    fontWeight: '400',
    lineHeight: 24,
    color: color.description,
    marginTop: 12,
    marginBottom: vw(20),
  },
  countryPicker: {
    marginVertical: vw(10),
    flexDirection: 'row',
  },
  countryPickerContainer: {
    flexDirection: 'row',
    borderColor: color.countryPickerContainer,
    borderWidth: 1,
    justifyContent: 'center',
    paddingHorizontal: vw(10),
    alignSelf: 'flex-start',
    alignItems: 'center',
    borderRadius: 16,
    height: vw(60),
    width: vw(100),
  },
  downArrow: {
    height: vw(9),
    width: vw(7),
    resizeMode: 'contain',
    marginLeft: vw(5),
    color: color.downwardArrow,
  },
  callingCode: {
    fontSize: vw(10),
    fontWeight: 'bold',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: color.countryPickerContainer,
    paddingHorizontal: vw(30),
    height: vw(60),
    width: vw(400),
    marginVertical: vw(12),
  },
  passwordText: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: color.countryPickerContainer,
    paddingHorizontal: vw(24),
    paddingRight: vw(40),
    height: vw(60),
    width: vw(400),
    marginVertical: vw(12),
  },
  phoneNumber: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: color.countryPickerContainer,
    paddingHorizontal: vw(24),
    height: vw(60),
    width: vw(290),
    marginLeft: 10,
  },
  label: {
    position: 'absolute',
    top: vw(-50),
    left: vw(10),
    backgroundColor: color.white,
    paddingHorizontal: vw(10),
  },
  labelOne: {
    position: 'absolute',
    top: vw(-39),
    left: vw(20),
    backgroundColor: color.white,
    paddingHorizontal: vw(10),
  },
  checkbox: {
    alignSelf: 'flex-start',
    borderRadius: vw(2),
    marginRight: vw(5),
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginHorizontal: vw(30),
    alignItems: 'center',
  },
  checkboxImage: {
    height: vw(7),
    width: vw(7),
    resizeMode: 'center',
  },
});

export default styles;

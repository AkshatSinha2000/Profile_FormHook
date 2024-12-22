import {StyleSheet} from 'react-native';
import {color} from '../../themes/color';
import {vw} from '../../utils/Dimensions';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: color.white,
  },
  mainContainer: {
    paddingHorizontal: vw(35),
    paddingVertical: vw(20),
  },
  heading: {
    fontSize: vw(28),
    fontWeight: '700',
  },
  desc: {
    fontSize: vw(16),
    fontWeight: '400',
    lineHeight: vw(26),
    color: color.description,
  },
  descContainer: {
    marginVertical: vw(12),
  },
  enterOtpContainer: {
    marginVertical: vw(40),
  },
  digit: {
    fontSize: vw(14),
    fontWeight: '400',
  },
  resend: {
    fontSize: vw(14),
    fontWeight: '700',
    color: color.pink,
  },
  otpInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: color.countryPickerContainer,
    paddingHorizontal: vw(22),
    height: vw(60),
    width: vw(60),
    marginVertical: vw(12),
    marginHorizontal: vw(8),
    textAlign: 'center',
  },
});

export default styles;

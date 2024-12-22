import {StyleSheet} from 'react-native';
import {color} from '../../themes/color';
import {vw} from '../../utils/Dimensions';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: color.white,
  },
  heading: {
    fontSize: vw(28),
    fontWeight: '700',
    lineHeight: 32,
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
  selectedAvatar: {
    height: vw(109),
    width: vw(109),
    borderRadius: 100,
    resizeMode: 'contain',
    borderWidth: 2,
    borderColor: color.pink,
  },
  avatar: {
    height: vw(109),
    width: vw(109),
    borderRadius: 100,
    resizeMode: 'contain',
  },
  avatarContainer: {
    marginRight: vw(20),
    marginTop: vw(18),
    borderRadius: 100,
    borderWidth: 2,
    borderColor: color.countryPickerContainer,
  },
  tick: {
    position: 'absolute',
    height: vw(27),
    width: vw(27),
    resizeMode: 'contain',
    top: vw(-19),
    right: vw(38),
  },
  flatListContainer: {},
});

export default styles;

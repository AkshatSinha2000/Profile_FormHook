import {StyleSheet} from 'react-native';
import {vh, vw} from '../../utils/Dimensions';
import {color} from '../../themes/color';

const styles = StyleSheet.create({
  backArrow: {
    height: vh(12),
    width: vw(6),
    resizeMode: 'contain',
    color: color.backArrow,
  },
  backArrowButton: {
    backgroundColor: color.backArrowBackground,
    alignSelf: 'flex-start',
    height: vw(48),
    width: vw(48),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  safeAreaView: {
    paddingHorizontal: vw(30),
    paddingVertical: vw(20),
  },
});

export default styles;

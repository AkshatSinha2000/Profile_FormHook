import {StyleSheet} from 'react-native';
import {vw} from '../../utils/Dimensions';
import {color} from '../../themes/color';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 16,
    width: vw(410),
    height: vw(85),
    marginVertical: vw(6),
    backgroundColor: color.modalElement,
    paddingHorizontal: vw(24),
  },
  image: {
    height: vw(44),
    width: vw(42),
    resizeMode: 'contain',
    marginRight: vw(14),
  },
  text: {
    fontSize: vw(16),
    fontWeight: '500',
  },
  icon: {
    tintColor: color.checkbox,
    height: vw(10),
    width: vw(6),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default styles;

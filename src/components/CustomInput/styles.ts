import {StyleSheet} from 'react-native';
import {vw} from '../../utils/Dimensions';
import {color} from '../../themes/color';

const styles = StyleSheet.create({
  eye: {
    height: vw(21),
    width: vw(21),
    resizeMode: 'contain',
  },
  eyeContainer: {
    position: 'absolute',
    right: vw(20),
    top: vw(32),
  },
  error: {
    color: color.red,
    fontSize: vw(14),
    marginBottom: vw(10),
    marginLeft: vw(20),
  },
});

export default styles;

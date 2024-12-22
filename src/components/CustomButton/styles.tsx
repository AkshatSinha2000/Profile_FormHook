import {StyleSheet} from 'react-native';
import {vw} from '../../utils/Dimensions';
import {color} from '../../themes/color';

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: vw(30),
    paddingVertical: vw(17),
    marginVertical: vw(20),
    alignItems: 'center',
    borderRadius: 16,
    backgroundColor: color.checkbox,
  },
  buttontext: {
    color: color.white,
    fontWeight: 'bold',
  },
});

export default styles;

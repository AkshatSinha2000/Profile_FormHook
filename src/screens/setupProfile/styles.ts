import {StyleSheet} from 'react-native';
import {vw} from '../../utils/Dimensions';
import {color} from '../../themes/color';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: color.white,
  },
  mainContainer: {
    paddingHorizontal: vw(35),
    paddingVertical: vw(20),
    flex: 1,
  },
  heading: {
    fontSize: vw(28),
    fontWeight: '700',
  },
  desc: {
    fontSize: vw(16),
    fontWeight: '400',
    lineHeight: 24,
    color: color.description,
    marginVertical: vw(12),
  },
  profileImage: {
    height: vw(145),
    width: vw(145),
    borderRadius: 100,
    resizeMode: 'cover',
    marginRight: vw(10),
  },
  imageUploadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: vw(20),
  },
  uploadButton: {
    marginTop: vw(8),
  },
  uploadText: {
    color: color.pink,
    fontSize: vw(16),
    fontWeight: '500',
  },
  profile: {
    fontSize: vw(14),
    color: color.profile,
    fontWeight: '400',
  },
  label: {
    position: 'absolute',
    top: vw(-50),
    left: vw(10),
    backgroundColor: color.white,
    paddingHorizontal: vw(10),
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: color.countryPickerContainer,
    paddingHorizontal: vw(22),
    height: vw(60),
    width: vw(400),
    marginVertical: vw(12),
  },
  passwordText: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: color.countryPickerContainer,
    paddingHorizontal: vw(22),
    height: vw(60),
    width: vw(400),
    marginVertical: vw(12),
  },
  container: {
    backgroundColor: color.white,
  },
  dropdown: {
    borderWidth: 1,
    borderRadius: 16,
    borderColor: color.countryPickerContainer,
    paddingHorizontal: vw(20),
    height: vw(60),
    width: vw(400),
    marginVertical: vw(12),
  },

  labels: {
    position: 'absolute',
    backgroundColor: color.white,
    left: vw(25),
    top: vw(5),
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: vw(12),
  },
  placeholderStyle: {
    fontSize: vw(14),
  },
  selectedTextStyle: {
    fontSize: vw(16),
  },
  iconStyle: {
    width: vw(22),
    height: vw(20),
    tintColor: color.checkbox,
  },
  inputSearchStyle: {
    height: vw(40),
    fontSize: vw(16),
  },
  error: {
    color: color.red,
  },
  containerStyles: {borderRadius: 16, marginTop: vw(5), padding: vw(10)},
  itemContainerStyle: {
    borderRadius: 16,
    marginTop: vw(5),
    backgroundColor: color.dropdownText,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: color.white,
    borderRadius: 20,
    width: '100%',
    paddingVertical: 30,
    paddingHorizontal: vw(24),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: color.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
  },
  itemSelected: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 16,
    borderColor: color.green,
    borderWidth: 1,
  },
  modalHeadingContainer: {
    paddingBottom: vw(22),
    marginBottom: vw(12),
    borderBottomColor: color.countryPickerContainer,
    borderBottomWidth: 1,
  },
  greenTick: {
    height: vw(20),
    width: vw(20),
    resizeMode: 'contain',
  },
  emptyDot: {
    height: vw(18),
    width: vw(18),
    resizeMode: 'contain',
  },
});

export default styles;

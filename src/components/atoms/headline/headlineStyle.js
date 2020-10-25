import {StyleSheet} from 'react-native';
import {Typography, Colors} from '../../../styles/Index';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    position: 'absolute',
    top: '15%',
    left: 0,
    alignItems: 'center',
  },

  text: {
    width: '90%',
    fontFamily: Typography.FONT_FAMILY_BLACK,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontSize: Typography.FONT_SIZE_24,
    color: Colors.WHITE,
    textAlign: 'center',
  },
});

export default styles;

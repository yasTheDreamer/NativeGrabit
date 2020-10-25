import {StyleSheet} from 'react-native';
import * as Colors from '../../../styles/Colors';
import * as Typography from '../../../styles/Typography';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: 150,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: '90%',
    height: 45,
    backgroundColor: Colors.SECONDARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },

  text: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.WHITE,
  },
});

export default styles;

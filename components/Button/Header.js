import React from 'react';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    alignSelf: 'flex-start',
    flexGrow: 0,
    backgroundColor: 'purple',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'flex-start',
    width: Dimensions.get('screen').width,
    height: 50,
    // backgroundColor: 'yellow'
  },
});

const Header = ({ text, onPress, color, textColor }) => (
  <View style={styles.buttonContainer}>
    <Text style={[styles.buttonText, !!textColor && { color: textColor }]}>
      {text}
    </Text>
  </View>
);

export default Header;

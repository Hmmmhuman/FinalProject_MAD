import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, color = '#02CF8E', textColor = '#020202', onPress}) => {
  return (
    <TouchableOpacity
      style={styles.button(color)}
      activeOpacity={0.5}
      onPress={onPress}>
      <Text style={styles.label(textColor)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    backgroundColor: color,
    paddingVertical: 15,
    width: 350,
    borderRadius: 30,
    fontWeight: 'bold',
  }),
  label: textColor => ({
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: textColor,
    textAlign: 'center',
  }),
});

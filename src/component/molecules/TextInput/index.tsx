import {StyleSheet, Text, View, TextInput as Input} from 'react-native';
import React from 'react';

const TextInput = ({label, placeholder, ...rest}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <Input style={styles.input} placeholder={placeholder} {...rest} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#020202',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'blue',
    padding: 10,
  },
});

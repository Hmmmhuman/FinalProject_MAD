import React from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <Image source={require('./addPhoto.png')} style={styles.image} />
      <Text style={styles.text}>Add Photo</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Select Photo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default SignUp;

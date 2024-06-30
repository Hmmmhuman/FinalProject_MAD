import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Llogo} from '../../assets/icons';
import {TextInput} from '../../component';
import {Button, Gap} from '../../component/atoms/index';

const Sign = () => {
  return (
    <View style={styles.container}>
      <Image source={Llogo} style={styles.image} />

      <Button label="LOGIN" color="#3060d5" textColor="white" />
      <Gap height={15} />
      <Button label="SIGN UP" color="#3060d5" textColor="white" />
    </View>
  );
};

export default Sign;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {IconHelp, Llogo} from '../../assets/icons';
import {TextInput} from '../../component';
import {Button, Gap} from '../../component/atoms/index';

const Sign = () => {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Image source={IconHelp} style={styles.iconimage} />
      </View>
      <View style={styles.container}>
        <Image source={Llogo} style={styles.image} />

        <Button label="LOGIN" color="#007bff" textColor="white" />
        <Gap height={15} />
        <Button label="SIGN UP" color="#007bff" textColor="white" />
      </View>
    </View>
  );
};

export default Sign;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  header: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
    marginTop: 20,
<<<<<<< HEAD
    width: 400,
=======
>>>>>>> c904a8cdd7631fb7ef8b3b2b5548641790e47259
  },
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconimage: {
    height: 45,
    width: 45,
    backgroundColor: 'white',
  },
});

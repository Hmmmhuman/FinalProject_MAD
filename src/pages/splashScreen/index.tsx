import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {Llogo} from '../../assets/icons';
import {Lts} from '../../assets/icons';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Sign');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image source={Llogo} style={styles.avatar} />
      <View style={styles.footer}>
        <Image source={Lts} style={styles.lts} />
        <Text style={styles.title}>
          PT Bank Mandiri (Persero) Tbk.berizin dan diawasi oleh Otoritas Jasa  
          Keuangan (OJK) serta merupakan peserta penjamin Lembaga Penjamin
          Simpanan(LPS)
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3060d5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    height: 400,
    width: 500,
  },
  lts: {
    height: 140,
    width: 110,
  },
  footer: {
    alignItems: 'center',
  },

  title: {
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
    color: 'white',
  },
});

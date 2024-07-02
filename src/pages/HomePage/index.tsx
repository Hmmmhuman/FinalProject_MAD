import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {LivinHeader} from '../../assets/icons';
import {
  Transfer,
  Bayar,
  Emoney,
  TopUP,
  Tunai,
  Bayar2,
  Transfer2,
} from '../../assets/icons';
import {Gapwidth} from '../../component/atoms';

const HomePage = ({navigation}) => {
  
  const handleiconpress = () => {};
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={LivinHeader} style={styles.iconimage} />
      </View>

      <Text style={styles.subTitle}>Selamat Datang</Text>
      <View style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <TouchableOpacity activeOpacity={0.5} onPress={handleiconpress}>
            <Image source={Transfer} style={styles.avatar} />
            <Text style={styles.iconTitle}>Transfer</Text>
          </TouchableOpacity>
          <Gapwidth width={15} />
          <TouchableOpacity activeOpacity={0.5} onPress={handleiconpress}>
            <Image source={Bayar} style={styles.avatar} />
            <Text style={styles.iconTitle}>Bayar</Text>
          </TouchableOpacity>
          <Gapwidth width={15} />
          <TouchableOpacity activeOpacity={0.5} onPress={handleiconpress}>
            <Image source={Emoney} style={styles.avatar} />
            <Text style={styles.iconTitle}>E-Money</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.5} onPress={handleiconpress}>
            <Image source={Tunai} style={styles.avatar} />
            <Text style={styles.iconTitle}>Tarik Tunai</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.profileContainer}>
          <TouchableOpacity activeOpacity={0.5} onPress={handleiconpress}>
            <Image source={Transfer2} style={styles.avatar} />
            <Text style={styles.iconTitle}>Tap To Pay</Text>
          </TouchableOpacity>
          <Gapwidth width={15} />
          <TouchableOpacity activeOpacity={0.5} onPress={handleiconpress}>
            <Image source={Bayar2} style={styles.avatar} />
            <Text style={styles.iconTitle}>Investasi</Text>
          </TouchableOpacity>
          <Gapwidth width={15} />
          <TouchableOpacity activeOpacity={0.5} onPress={handleiconpress}>
            <Image source={TopUP} style={styles.avatar} />
            <Text style={styles.iconTitle}>TopUp</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.subTitle}>Tabungan & Deposit</Text>

      <View style={styles.pageborder}>
        <View style={styles.borderr}>
          <Text style={styles.subIDR}>Tabungan Mikro IDR</Text>
        </View>
      </View>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {},

  iconTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    color: 'black',
    marginLeft: 15,
  },

  iconimage: {
    width: 400,
    height: 210,
    resizeMode: 'stretch',
  },

  subIDR: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
    fontSize: 19,
    margin: 10,
    marginVertical: 12,
  },

  subTitle: {
    fontFamily: 'Poppins-Medium',
    color: 'blue',
    fontSize: 19,
    marginVertical: 12,
  },

  contentContainer: {
    backgroundColor: 'white',
    marginTop: 10,

    flexDirection: 'row',
  },

  profileContainer: {
    flexDirection: 'row',
  },

  avatar: {
    height: 90,
    width: 90,
    borderRadius: 90 / 2,
  },

  pageborder: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },

  borderr: {
    width: '100%',
    height: '100%',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 30,
  },
});

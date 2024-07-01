import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {LivinHeader} from '../../assets/icons';

const HomePage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={LivinHeader} style={styles.iconimage} />
      </View>

      <Text>HomePage</Text>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'white',
  },

  header: {},

  iconimage: {
    width: 400,
    height: 210,
    resizeMode: 'stretch',
  },
});

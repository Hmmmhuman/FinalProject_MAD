import {StyleSheet, View} from 'react-native';
import React from 'react';

const Gapwidth = ({width}) => {
  return <View style={styles.gap(width)} />;
};

export default Gapwidth;

const styles = StyleSheet.create({
  gap: width => ({
    width: width,
  }),
});

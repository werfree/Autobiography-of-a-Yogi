import React, {Component} from 'react';

import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from 'react-native';

const AlbumArt = ({url, onPress}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Image style={styles.image} source={{uri: url}} />
    </TouchableOpacity>
  </View>
);

export default AlbumArt;

const {width, height} = Dimensions.get('window');
const totalMargin = 75;
const imageSize = width - totalMargin;

const styles = StyleSheet.create({
  container: {
    paddingLeft: totalMargin / 2,
    paddingRight: totalMargin / 2,
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    width: imageSize,
    height: imageSize,
  },
});

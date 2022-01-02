import React, {Component} from 'react';

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {ComponentTheme} from '../theme';
const HeaderComponent = ({
  message,
  onDownPress,
  onQueuePress,
  onMessagePress,
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onDownPress}>
      <Icons size={25} style={styles.button} name="ios-chevron-down" />
    </TouchableOpacity>
    <Text onPress={onMessagePress} style={styles.message}>
      {message.toUpperCase()}
    </Text>
    <TouchableOpacity onPress={onQueuePress}>
      <MaterialCommunityIcon
        size={25}
        style={styles.button}
        name="playlist-music-outline"
      />
    </TouchableOpacity>
  </View>
);

export default HeaderComponent;

const styles = StyleSheet.create({
  container: {
    height: 72,
    paddingTop: 20,
    paddingLeft: 12,
    paddingRight: 12,
    flexDirection: 'row',
    elevation: 3,
  },
  message: {
    flex: 1,
    textAlign: 'center',
    paddingTop: 5,
    color: 'rgba(255, 255, 255, 0.72)',
    fontWeight: 'bold',
    fontSize: 15,
  },
  button: {
    opacity: 0.72,
    color: 'rgba(255, 255, 255, 0.72)',
  },
});

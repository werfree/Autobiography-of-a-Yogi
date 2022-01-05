import React, {Component} from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ComponentTheme, MyIcons, MyTheme} from '../theme';
const Controls = ({
  paused,
  shuffleOn,
  repeatOn,
  onPressPlay,
  onPressPause,
  onBack,
  onForward,
  onPressShuffle,
  onPressRepeat,
  backDisable,
  forwardDisabled,
  isLoading,
  playSpeed,
  changePlaySpeed,
}) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={{alignItems: 'center'}}
      activeOpacity={0.0}
      onPress={changePlaySpeed}>
      <Ionicons
        style={styles.controlButtons}
        name="speedometer-outline"
        size={MyIcons.size.small}
      />
      <Text style={styles.playSpeedText}>{playSpeed}x</Text>
    </TouchableOpacity>
    <View style={{width: 40}} />
    <TouchableOpacity onPress={onBack} disabled={backDisable}>
      {/* <Image source={require('../img/ic_skip_previous_white_36pt.png')} /> */}
      <Ionicons
        style={styles.controlButtons}
        //name="caret-back-circle-outline"
        name="ios-play-skip-back-outline"
        size={MyIcons.size.medium}
      />
    </TouchableOpacity>
    <View style={{width: 20}} />
    {isLoading ? (
      // <Ionicons size={MyIcons.size.large} name="reload-circle-outline" />
      <ActivityIndicator size="large" color={MyTheme.colors.text} />
    ) : !paused ? (
      <TouchableOpacity onPress={onPressPause}>
        <Ionicons
          //style={styles.controlButtons}
          name="pause-circle-outline"
          size={MyIcons.size.large}
        />
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={onPressPlay}>
        <Ionicons
          //style={styles.controlButtons}
          name="play-circle-outline"
          size={MyIcons.size.large}
        />
      </TouchableOpacity>
    )}
    <View style={{width: 20}} />
    <TouchableOpacity onPress={onForward} disabled={forwardDisabled}>
      <Ionicons
        style={styles.controlButtons}
        name="ios-play-skip-forward-outline"
        size={MyIcons.size.medium}
      />
    </TouchableOpacity>
    <View style={{width: 40}} />
    <TouchableOpacity activeOpacity={0.0} onPress={onPressRepeat}>
      {repeatOn ? (
        <MaterialCommunityIcons
          style={styles.controlButtons}
          name="repeat"
          size={MyIcons.size.small}
        />
      ) : (
        <MaterialCommunityIcons
          style={styles.controlButtons}
          name="repeat-off"
          size={MyIcons.size.small}
        />
      )}
    </TouchableOpacity>
  </View>
);

export default Controls;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    marginLeft: 1,
    elevation: 2,
    backgroundColor: ComponentTheme.background,
  },
  playButton: {
    height: 72,
    width: 72,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlButtons: {
    marginTop: 2,
  },
  secondaryControl: {
    height: 18,
    width: 18,
  },
  off: {
    opacity: 0.3,
  },
  playSpeedText: {
    fontSize: 10,
  },
});

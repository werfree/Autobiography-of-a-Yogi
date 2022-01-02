import React, {Component} from 'react';

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
const TrackDetails = ({
  title,
  artist,
  onAddPress,
  onMorePress,
  onTitlePress,
  onArtistPress,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onAddPress}>
        <Ionicons size={25} style={styles.button} name="add-circle-outline" />
      </TouchableOpacity>
      <View style={styles.detailsWrapper}>
        <Text style={styles.title} onPress={onTitlePress}>
          {title}
        </Text>
        <Text style={styles.artist} onPress={onArtistPress}>
          {artist}
        </Text>
      </View>
      <TouchableOpacity onPress={onMorePress}>
        <Ionicons
          size={25}
          style={styles.moreButtonIcon}
          name="ellipsis-horizontal-circle-outline"
        />
      </TouchableOpacity>
    </View>
  );
};

export default TrackDetails;

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    paddingRight: 20,
  },
  detailsWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  artist: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 12,
    marginTop: 4,
  },
  button: {
    color: 'rgba(255, 255, 255, 0.72)',
  },
  //   moreButton: {
  //     borderColor: 'rgb(255, 255, 255)',
  //     borderWidth: 2,
  //     opacity: 0.72,
  //     borderRadius: 10,
  //     width: 20,
  //     height: 20,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  moreButtonIcon: {
    color: 'rgba(255, 255, 255, 0.72)',
  },
});

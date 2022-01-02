import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {MyIcons, MyTheme} from '../theme';

export default function PlaylistCard({
  imageUrl,
  title,
  index,
  currentTrack,
  pause,
  onPause,
  onPlay,
  onSkip,
}) {
  return (
    <View styles={styles.container}>
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.5}
        onPress={async () => {
          currentTrack ? (pause ? onPlay() : onPause()) : await onSkip(index);
        }}>
        <MaterialCommunityIcons
          name={
            currentTrack
              ? pause
                ? 'play-pause'
                : 'music-clef-treble'
              : 'music-note-whole'
          }
          size={MyIcons.size.small}
          style={styles.icon}
          color={currentTrack ? '#950101' : MyTheme.colors.text}
        />
        <ImageBackground
          source={{uri: imageUrl}}
          style={styles.imageBackground}
        />
        <View style={styles.textContainer}>
          <Text>
            {index}: {title}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    marginTop: 7,
    paddingTop: 7,
    marginBottom: 7,
    paddingBottom: 7,
    paddingLeft: 20,
    // borderBottomColor: MyTheme.colors.elevation,
    // borderBottomWidth: 3,
    // borderRadius: 50,
    // backgroundColor: MyTheme.colors.elevation,
    // //borderWidth: 2,
  },
  icon: {
    flex: 1,
    alignSelf: 'center',
  },
  imageBackground: {
    flex: 2,
    height: 35,
  },
  textContainer: {
    flex: 8,
    marginLeft: 10,
    justifyContent: 'center',
  },
});

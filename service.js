import {BackHandler} from 'react-native';
import TrackPlayer, {Event} from 'react-native-track-player';

module.exports = async function () {
  TrackPlayer.addEventListener(Event.RemotePlay, async () => {
    await TrackPlayer.play();
  });

  TrackPlayer.addEventListener(Event.RemotePause, async () => {
    await TrackPlayer.pause();
  });

  TrackPlayer.addEventListener(Event.RemoteNext, async () => {
    console.log('next');
    await TrackPlayer.skipToNext();
  });

  TrackPlayer.addEventListener(Event.RemoteSkip, async () => {
    console.log('Pre');
    await TrackPlayer.skipToPrevious();
  });

  TrackPlayer.addEventListener(Event.RemoteStop, () => {
    BackHandler.exitApp();
  });
  TrackPlayer.addEventListener(Event.RemoteSeek, async second => {
    await TrackPlayer.seekTo(second.position);
  });
};

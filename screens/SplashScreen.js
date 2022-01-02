import React from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TRACKS} from '../tracks';
import AlbumArt from './components/AlbumArt';
import Controls from './components/Controls';
import HeaderComponent from './components/Header';
import Player from './components/Player';
import SeekBar from './components/SeekBar';
import MyStatusBar from './components/StatusBar';
import TrackDetails from './components/TrackDetails';

export default function SplashScreen() {
  return (
    <Player tracks={TRACKS} />
    // <SafeAreaView>
    //   <MyStatusBar />
    //   <Header message="Playing from Charts" />
    //   <AlbumArt url="https://yssofindia.org/audiobook/ay-bengali.jpg" />
    //   <TrackDetails title="Stressed Out" artist="Twenty One Pilots" />
    //   <SeekBar trackLength={204} currentPosition={156} />
    //   <Controls />
    // </SafeAreaView>
  );
}

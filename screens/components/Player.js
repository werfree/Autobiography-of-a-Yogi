import React, {useState, useEffect, useRef} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import AlbumArt from './AlbumArt';
import Controls from './Controls';
import HeaderComponent from './Header';
import SeekBar from './SeekBar';
import TrackDetails from './TrackDetails';
import MyStatusBar from './StatusBar';
import TrackPlayer, {
  useProgress,
  Event,
  useTrackPlayerEvents,
  RepeatMode,
} from 'react-native-track-player';
import PlaylistCard from './PlaylistCard';

const Player = props => {
  const tracks = props.tracks;
  const [pause, setPause] = useState(true);

  const {position, buffered, duration} = useProgress(1000);

  const [state, setState] = useState({
    totalLength: 1,
    currentPosition: 0,
    selectedTrack: 0,
    repeatOn: false,
    shuffleOn: false,
    isChanging: false,
  });
  const [playSpeed, setPlaySpeed] = useState(1);
  const [repeatMode, setRepeatMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [volumeDown, setVolumeDown] = useState({
    time: 100000000,
    level: 0,
  });

  const [currentTrack, setCurrentTrack] = useState({
    title: '',
    author: 'Paramahansa Yogananda',
    duration: 0,
    audioUrl:
      'https://audiobook.yssofindia.org/abook-bengali/download.php?salt=J4rJSPrDyBVspjFc&dfile=01_AYBen-001--Introduction.mp3',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    track: 0,
  });

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    if (event.type === Event.PlaybackTrackChanged && event.nextTrack != null) {
      const track = await TrackPlayer.getCurrentTrack(event.nextTrack);
      console.log('TC', track);
      setCurrentTrack({
        author: 'Paramahansa Yogananda',
        track: track,
        ...tracks[track],
      });
    }
  });

  useEffect(() => {
    // const down = async () => {
    if (position > duration) {
      TrackPlayer.stop();
      TrackPlayer.setRate(playSpeed);
      TrackPlayer.setVolume(volumeDown.volume);
      TrackPlayer.play();
    }
    if (position + 3 >= volumeDown.time) {
      console.log('In', position, volumeDown.time);
      TrackPlayer.pause();
      TrackPlayer.setRate(playSpeed);
      TrackPlayer.setVolume(1);
      TrackPlayer.play();
      setVolumeDown({
        time: 1000000,
        volume: 1,
      });

      setIsLoading(false);
    }
    //};
    //down();
  }, [position, playSpeed, duration, volumeDown]);

  // Initial Effect
  useEffect(() => {
    const playSetUp = async () => {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        alwaysPauseOnInterruption: true,
        waitForBuffer: true,
        stopWithApp: true,

        compactCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          TrackPlayer.CAPABILITY_STOP,
          // TrackPlayer.CAPABILITY_SEEK_TO,
        ],
        notificationCapabilities: [
          TrackPlayer.CAPABILITY_PLAY,
          TrackPlayer.CAPABILITY_PAUSE,
          //TrackPlayer.CAPABILITY_STOP,
          TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
          TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        ],
      }).catch(e => console.error('UpdateOption', e));

      await TrackPlayer.add(tracks);

      const track = await TrackPlayer.getCurrentTrack();
      console.log(tracks[track]);
      setCurrentTrack({
        author: 'Paramahansa Yogananda',
        track,
        ...tracks[track],
      });
      setIsLoading(false);
    };
    playSetUp();
    return () => {
      TrackPlayer.destroy();
    };
  }, [tracks]);

  const seek = async time => {
    time = Math.floor(time);
    console.log('Time', time);

    const volume = await TrackPlayer.getVolume();
    await TrackPlayer.setVolume(0);
    if (position > time) {
      await TrackPlayer.stop();
    }

    setIsLoading(true);
    await TrackPlayer.play();
    await TrackPlayer.setRate(400);
    setVolumeDown({
      time,
      volume,
    });

    // await TrackPlayer.pause();

    //setIsLoading(false);
    setPause(false);
  };

  const onBack = async () => {
    console.log('On Back Press');
    setIsLoading(false);
    await TrackPlayer.skipToPrevious();
    setIsLoading(false);
  };

  const onForward = async () => {
    console.log('On Forward Press');
    setIsLoading(false);
    await TrackPlayer.skipToNext().catch(e => console.error(e));
    setIsLoading(false);
    // setPause(true);
  };

  const onSkip = async index => {
    console.log('On Skip');
    setIsLoading(false);
    await TrackPlayer.skip(index).catch(e => console.error(e));
    setIsLoading(false);
    // setPause(true);
  };

  const onPause = async () => {
    setIsLoading(true);
    await TrackPlayer.pause().catch(e => console.error(e));
    setPause(true);
    setIsLoading(false);
  };
  const onPlay = async () => {
    setIsLoading(true);
    await TrackPlayer.play().catch(e => console.error(e));
    setPause(false);
    setIsLoading(false);
  };

  const changePlaySpeed = async () => {
    let newPlaySpeed = 0;
    if (playSpeed >= 3) {
      newPlaySpeed = 1;
    } else {
      newPlaySpeed = playSpeed + 0.25;
    }
    await TrackPlayer.setRate(newPlaySpeed);
    setPlaySpeed(newPlaySpeed);
  };

  const displayPlaylist = () => {
    if (!tracks || tracks.length === 0) {
      return <></>;
    }

    return tracks.map((track, index) => {
      return (
        <PlaylistCard
          key={index}
          index={index}
          currentTrack={index === currentTrack.track}
          pause={pause}
          title={track.title}
          imageUrl={track.imageUrl}
          onPause={onPause}
          onPlay={onPlay}
          onSkip={onSkip}
        />
      );
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <MyStatusBar />
      <ScrollView style={styles.scrollView}>
        <HeaderComponent message="Autobiography of an Yogi" />

        <AlbumArt url={currentTrack.imageUrl} />
        <TrackDetails title={currentTrack.title} artist={currentTrack.author} />
        <SeekBar
          trackLength={currentTrack.duration || 0}
          onSlidingStart={async () => {
            await onPause();
          }}
          onSeek={async time => {
            await seek(time);
          }}
          currentPosition={position || 0}
        />
        <Controls
          onPressRepeat={async () => {
            await TrackPlayer.setRepeatMode(
              repeatMode ? RepeatMode.Off : RepeatMode.Track,
            );
            setRepeatMode(!repeatMode);
          }}
          repeatOn={repeatMode}
          shuffleOn={state.shuffleOn}
          onPressShuffle={() =>
            setState({...state, shuffleOn: !state.shuffleOn})
          }
          onPressPlay={async () => {
            await onPlay();
          }}
          onPressPause={async () => {
            await onPause();
          }}
          onBack={onBack}
          onForward={onForward}
          paused={pause}
          isLoading={isLoading}
          playSpeed={playSpeed}
          changePlaySpeed={changePlaySpeed}
          backDisable={currentTrack.track === 0}
          forwardDisabled={tracks.length - 1 === currentTrack.track}
        />
        {displayPlaylist()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {},
});

export default Player;

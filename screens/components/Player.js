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
  Capability,
  State,
} from 'react-native-track-player';
import PlaylistCard from './PlaylistCard';
import AsyncStorageLib from '@react-native-async-storage/async-storage';

const Player = props => {
  const tracks = props.tracks;
  const lastPlayed = props.lastPlayed;
  const [playerState, setPlayerState] = useState({
    pause: false,
    isLoading: true,
  });
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

  const [currentTrack, setCurrentTrack] = useState({
    title: '',
    author: 'Paramahansa Yogananda',
    duration: 0,
    audioUrl:
      'https://audiobook.yssofindia.org/abook-bengali/download.php?salt=J4rJSPrDyBVspjFc&dfile=01_AYBen-001--Introduction.mp3',
    imageUrl: 'https://yssofindia.org/audiobook/ay-bengali.jpg',
    track: 0,
  });

  useTrackPlayerEvents(
    [Event.PlaybackTrackChanged, Event.PlaybackState],
    async event => {
      console.log(event.type, event.state, State);
      if (
        event.type === Event.PlaybackTrackChanged &&
        event.nextTrack != null
      ) {
        const track = await TrackPlayer.getCurrentTrack(event.nextTrack);
        console.log('TC', track);
        AsyncStorageLib.setItem('lastPlayed', '' + track);

        setCurrentTrack({
          author: 'Paramahansa Yogananda',
          track: track,
          ...tracks[track],
        });
      }
      if (event.type === Event.PlaybackState) {
        if (event.state === State.Connecting) {
          setPlayerState({
            pause: false,
            isLoading: true,
          });
        }
        if (event.state === State.Paused) {
          setPlayerState({
            pause: true,
            isLoading: false,
          });
        }
        if (event.state === State.Playing || event.state === State.Buffering) {
          setPlayerState({
            pause: false,
            isLoading: false,
          });
        }
      }
    },
  );

  // Initial Effect
  useEffect(() => {
    const playSetUp = async () => {
      await TrackPlayer.setupPlayer();
      await TrackPlayer.updateOptions({
        alwaysPauseOnInterruption: true,
        waitForBuffer: true,
        stopWithApp: true,

        capabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.Stop,
          Capability.SkipToNext,
          Capability.SkipToPrevious,
          Capability.SeekTo,
          // TrackPlayer.CAPABILITY_SEEK_TO,
        ],
        compactCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SeekTo,
          // TrackPlayer.CAPABILITY_SEEK_TO,
        ],
        notificationCapabilities: [
          Capability.Play,
          Capability.Pause,
          Capability.SeekTo,
        ],
      }).catch(e => console.error('UpdateOption', e));

      await TrackPlayer.add(tracks);
      await onSkip(lastPlayed);

      const track = await TrackPlayer.getCurrentTrack();
      console.log(tracks[track]);
      setCurrentTrack({
        author: 'Paramahansa Yogananda',
        track,
        ...tracks[track],
      });
    };
    playSetUp();
    return () => {
      TrackPlayer.destroy();
    };
  }, [tracks, lastPlayed]);

  // Listener

  const seek = async time => {
    //await TrackPlayer.play();
    await TrackPlayer.seekTo(time);
  };

  const onBack = async () => {
    console.log('On Back Press');

    await TrackPlayer.skipToPrevious();
  };

  const onForward = async () => {
    console.log('On Forward Press');

    await TrackPlayer.skipToNext().catch(e => console.error(e));
  };

  const onSkip = async index => {
    await TrackPlayer.skip(index).catch(e => console.error(e));

    // setPause(true);
  };

  const onPause = async () => {
    await TrackPlayer.pause().catch(e => console.error(e));
  };
  const onPlay = async () => {
    await TrackPlayer.play().catch(e => console.error(e));
  };

  const changePlaySpeed = async () => {
    let newPlaySpeed = 0;
    if (playSpeed >= 2) {
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
          pause={playerState.pause}
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
          trackLength={duration || 0}
          onSlidingStart={async () => {
            await onPlay();
          }}
          onSeek={time => {
            seek(time);
          }}
          currentPosition={position}
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
          paused={playerState.pause}
          isLoading={playerState.isLoading}
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

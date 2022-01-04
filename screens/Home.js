import React from 'react';
import {TRACKS} from '../tracks';

import Player from './components/Player';

export default function HomeScreen({route}) {
  const {lastPlayed} = route.params;

  return <Player lastPlayed={lastPlayed} tracks={TRACKS} />;
}

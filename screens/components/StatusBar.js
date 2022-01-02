import React from 'react';
import {View, Text, StatusBar} from 'react-native';
import {MyTheme} from '../theme';

export default function MyStatusBar() {
  return (
    <StatusBar
      barStyle="light-content"
      translucent={true}
      backgroundColor={MyTheme.colors.background}
    />
  );
}

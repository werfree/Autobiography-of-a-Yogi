import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  AsyncS,
  StyleSheet,
  Image,
  Dimensions,
  ToastAndroid,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import MyStatusBar from './components/StatusBar';
import Logo from './logo/logo.png';
import {MyTheme} from './theme';

export default function SplashScreen({navigation}) {
  NetInfo.addEventListener(state => {
    console.log(state.isInternetReachable);
    if (!state.isInternetReachable) {
      Alert.alert('Network Error', 'Your internet does not seems to work');
      ToastAndroid.show('No Internet', ToastAndroid.SHORT);
    }
  });

  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('lastPlayed').then(res => {
        setTimeout(() => {
          console.log(res);
          navigation.replace('Home', {
            lastPlayed: !res || +res <= 0 ? 0 : +res,
          });
        }, 1000);
      }, 1000);
    });

    return () => {};
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <MyStatusBar />
      <View style={styles.imageContainer}>
        <Image source={Logo} style={styles.imageStyle} />

        <Text style={styles.caption}>
          "𝑻𝒉𝒆 𝒔𝒆𝒂𝒔𝒐𝒏 𝒐𝒇 𝒇𝒂𝒊𝒍𝒖𝒓𝒆 𝒊𝒔 𝒕𝒉𝒆 𝒃𝒆𝒔𝒕 𝒕𝒊𝒎𝒆 𝒇𝒐𝒓 𝒔𝒐𝒘𝒊𝒏𝒈 𝒕𝒉𝒆 𝒔𝒆𝒆𝒅𝒔 𝒐𝒇
          𝒔𝒖𝒄𝒄𝒆𝒔𝒔.” {'\n'}~ 𝑷𝒂𝒓𝒂𝒎𝒂𝒉𝒂𝒏𝒔𝒂 𝒀𝒐𝒈𝒂𝒏𝒂𝒏𝒅𝒂
        </Text>
      </View>
      <Text style={styles.footer}>ᴄʀᴇᴀᴛᴇᴅ ʙʏ ~ ꜱᴀʏᴀɴᴛᴀɴ ɢʜᴏꜱʜ</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  imageContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    height: '95%',
    width: '100%',
  },
  imageStyle: {
    height: Dimensions.get('window').width + 100,
    width: Dimensions.get('window').width,
    alignSelf: 'center',
  },
  caption: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: MyTheme.colors.text,
    margin: 14,
    fontSize: 15,
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: MyTheme.colors.text,
    margin: 14,
    fontSize: 12,
  },
});

// Live quietly in the moment and see the beauty of all before you. The future will take care of itself.

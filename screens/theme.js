import {DarkTheme} from '@react-navigation/native';

export const MyTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: 'rgb(255, 45, 85)',
    text: 'rgba(255,255,255,0.5)',
    //background: 'rgb(33,36,40)',
    background: 'rgb(30,30,35)',
    elevation: 'rgb(22,22,22)',
  },
};

export const ComponentTheme = {
  background: 'rgba(255,255,255)',
};

export const MyIcons = {
  size: {
    large: 60,
    medium: 25,
    small: 18,
  },
};

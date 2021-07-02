import 'react-native-gesture-handler';

import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';
import { StatusBar } from 'react-native';

import { Routes } from './src/routes';
import { RepositoriesProvider } from './src/contexts/RepositoriesProvider';

import theme from './src/global/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar backgroundColor={theme.colors.gray_50} barStyle="dark-content" />

      <RepositoriesProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </RepositoriesProvider>
    </>
  )
}

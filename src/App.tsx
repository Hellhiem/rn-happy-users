import 'config/translations/i18n';
import React from 'react';
import { StatusBar } from 'react-native';

import { lightTheme, darkTheme } from 'config/styles';
import { isDarkMode } from 'lib/device';
import { ReactQueryClientProvider } from 'lib/wrappers';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';

import { RootNavigator } from './RootNavigator';

const App = () => {
  const theme = isDarkMode() ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <ReactQueryClientProvider>
        <SafeAreaProvider>
          <StatusBar backgroundColor="transparent" translucent barStyle="dark-content" />
          <RootNavigator />
        </SafeAreaProvider>
      </ReactQueryClientProvider>
    </ThemeProvider>
  );
};

export default App;

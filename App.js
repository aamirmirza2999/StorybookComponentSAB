import React, {Suspense} from 'react';
import {LogBox, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import PostLoginNavigator from './screens/navigations/PostLoginNavigator';
import {ThemeProvider} from './constants/Theme/ThemeProvider';
import i18n from './locales/i18n';
import {I18nextProvider} from 'react-i18next';
import TabBar from './screens/navigations/TabBar';
import { store } from "./redux/store/Store"
import { Provider } from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function App() {
  LogBox.ignoreAllLogs();
  return (
    <ThemeProvider>
      <View style={{flex: 1}}>
        <NavigationContainer>
        <Provider store={store}>
          <I18nextProvider i18n={i18n}>
            <Suspense fallback="loading">
              <PostLoginNavigator />
            </Suspense>
          </I18nextProvider>
          </Provider>
        </NavigationContainer>
      </View>
    </ThemeProvider>
  );
}

let AppEntryPoint = App;

if (!true) {
  const AppEntry = require('./.ondevice').default;
  AppEntryPoint = () => (
    <ThemeProvider>
        <Provider store={store}>
      <AppEntry />
      </Provider>
    </ThemeProvider>
  );
}

export default AppEntryPoint;

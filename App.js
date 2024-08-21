// import React, {Suspense} from 'react';
// import {LogBox, StyleSheet, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import HomeStack from './screens/navigations/HomeStack';
// import {ThemeProvider} from './constants/Theme/ThemeProvider';
// import i18n from './locales/i18n';
// import {I18nextProvider} from 'react-i18next';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// function App() {
//   console.log(
//     'process.env.STORYBOOK_ENABLED...',
//     process.env.STORYBOOK_ENABLED,
//   );
//   LogBox.ignoreAllLogs();
//   return (
//     <ThemeProvider>
//       <View style={{flex: 1}}>
//         <NavigationContainer>
//           <I18nextProvider i18n={i18n}>
//             <Suspense fallback="loading">
//               <HomeStack />
//             </Suspense>
//           </I18nextProvider>
//           {/* stackNavigator */}
//         </NavigationContainer>
//       </View>
//     </ThemeProvider>
//   );
// }

// let AppEntryPoint = App;

// if (process.env.STORYBOOK_ENABLED) {
//   AppEntry = require('./.ondevice').default;
//   AppEntryPoint = () => {
//     return (
//       <ThemeProvider>
//         {/* {require('./.ondevice').default} */}
//         <AppEntry />
//       </ThemeProvider>
//     );
//   };
// }

// export default AppEntryPoint;

import React, {Suspense} from 'react';
import {LogBox, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeStack from './screens/navigations/HomeStack';
import {ThemeProvider} from './constants/Theme/ThemeProvider';
import i18n from './locales/i18n';
import {I18nextProvider} from 'react-i18next';
import TabBar from './screens/navigations/TabBar';
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
          <I18nextProvider i18n={i18n}>
            <Suspense fallback="loading">
              <TabBar />
            </Suspense>
          </I18nextProvider>
        </NavigationContainer>
      </View>
    </ThemeProvider>
  );
}

let AppEntryPoint = App;

if (process.env.STORYBOOK_ENABLED) {
  const AppEntry = require('./.ondevice').default;
  AppEntryPoint = () => (
    <ThemeProvider>
      <AppEntry />
    </ThemeProvider>
  );
}

export default AppEntryPoint;

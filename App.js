import React, {useEffect} from 'react';
import {StyleSheet, View, StatusBar, Platform} from 'react-native';

import {setCustomTextInput, setCustomText} from 'react-native-global-props';
import AppNavigation from './navigation/AppNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import configureStore from './redux/store/index';
import SplashScreen from 'react-native-splash-screen';

const customTextProps = {
  style: {
    fontFamily: Platform.OS === 'ios' ? 'Poppins-Regular' : 'Poppins-Medium',
  },
};

setCustomTextInput(customTextProps);
setCustomText(customTextProps);
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const store = configureStore();

const App: () => React$Node = () => {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {Platform.OS === 'ios' && (
          <StatusBar style={styles.status} barStyle="default" />
        )}
        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffeff',
  },
  status: {
    height: STATUSBAR_HEIGHT,
  },
});

export default App;

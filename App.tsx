/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import AuthScreen from './src/screens/AuthScreen';
import store from './src/store/store';
import { observer } from 'mobx-react-lite';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  const [initializing, setInitializing] = useState(true);

  function onAuthStateChanged(user) {
    store.setUsername(user.displayName);
    if (initializing) setInitializing(false);
  }

  useEffect(()=>{
    GoogleSignin.configure({
      webClientId:'133431779770-3qcm80m8lnml1n7qmkf85hk88fi26elv.apps.googleusercontent.com',
      offlineAccess: false,
    });
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
    
  },[])

  if (initializing) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
        { store.isLogined ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="Auth" component={AuthScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default observer(App);

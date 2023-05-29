/* eslint-disable react-hooks/exhaustive-deps */

import auth from '@react-native-firebase/auth'
import {GoogleSignin} from '@react-native-google-signin/google-signin'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {observer} from 'mobx-react-lite'
import React, {useEffect, useState} from 'react'
import {Text, View} from 'react-native'
import AuthScreen from './src/screens/AuthScreen'
import HomeScreen from './src/screens/HomeScreen'
import store from './src/store/store'

const Stack = createNativeStackNavigator()
function App(): JSX.Element {
  const [initializing, setInitializing] = useState(true)

  function onAuthStateChanged(user: any) {
    store.setUsername(user.displayName)
    if (initializing) {
      setInitializing(false)
    }
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '133431779770-3qcm80m8lnml1n7qmkf85hk88fi26elv.apps.googleusercontent.com',
      offlineAccess: false,
    })
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [])

  if (initializing) {
    return (
      <View>
        <Text>Inititalizing</Text>
      </View>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {store.isLogined ? (
          <Stack.Screen name="Home" component={HomeScreen} />
        ) : (
          <Stack.Screen name="Auth" component={AuthScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default observer(App)

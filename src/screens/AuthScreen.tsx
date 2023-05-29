import {GoogleSigninButton} from '@react-native-google-signin/google-signin'
import {observer} from 'mobx-react-lite'
import React from 'react'
import {View} from 'react-native'
import store from '../store/store'
import styles from './AuthStyles'

function AuthScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => {
          store.onGoogleButtonPress()
        }}
      />
    </View>
  )
}

export default observer(AuthScreen)

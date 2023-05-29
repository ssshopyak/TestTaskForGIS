import auth from '@react-native-firebase/auth'
import {GoogleSignin} from '@react-native-google-signin/google-signin'
import {makeAutoObservable, runInAction} from 'mobx'
class Store {
  isLogined = false
  username = ''
  constructor() {
    makeAutoObservable(this)
  }

  setUsername(username: string) {
    this.username = username
  }

  async onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true})
    const {idToken} = await GoogleSignin.signIn()
    const googleCredential = auth.GoogleAuthProvider.credential(idToken)

    runInAction(() => {
      if (this.username.length > 0) {
        this.isLogined = true
      }
    })

    return auth().signInWithCredential(googleCredential)
  }
}

export default new Store()

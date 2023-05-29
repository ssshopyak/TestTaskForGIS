import auth from '@react-native-firebase/auth'
import {GoogleSignin} from '@react-native-google-signin/google-signin'
import {makeAutoObservable, runInAction} from 'mobx'
class Store {
  isLogined = false
  username = ''
  user = {}
  constructor() {
    makeAutoObservable(this)
  }

  setUser(user: any) {
    this.user = user
  }

  async onGoogleButtonPress() {
    await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true})
    const {idToken} = await GoogleSignin.signIn()
    const googleCredential = auth.GoogleAuthProvider.credential(idToken)
    auth()
      .signInWithCredential(googleCredential)
      .then(res => {
        if (res.additionalUserInfo?.profile.email.length > 0) {
          runInAction(() => {
            this.isLogined = true
          })
        }
      })

    //return auth().signInWithCredential(googleCredential)
  }
}

export default new Store()

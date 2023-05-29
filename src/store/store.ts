import { makeAutoObservable, runInAction } from "mobx";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
class Store {

    isLogined = false
    username = ''
    constructor() {
        makeAutoObservable(this)
    }

    setUsername (username: string) {
      this.username = username
    }

    async onGoogleButtonPress() {
      await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
      const { idToken } = await GoogleSignin.signIn();  
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    
      runInAction(()=>{
        this.isLogined = true
      })

      return auth().signInWithCredential(googleCredential);
    }

}

export default new Store()
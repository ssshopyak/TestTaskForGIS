import { observer } from 'mobx-react-lite';
import React,{useState} from 'react';
import {View, Text} from 'react-native';
import store from '../store/store';

function AuthScreen(): JSX.Element {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={()=>{
        store.onGoogleButtonPress()
      }}>Auth Screen</Text>
    </View>
  );
}

export default observer(AuthScreen);

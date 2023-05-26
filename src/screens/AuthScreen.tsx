import { observer } from 'mobx-react-lite';
import React from 'react';
import {View, Text} from 'react-native';
import store from '../store/store';
function AuthScreen(): JSX.Element {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={()=>{
        store.toAuth()
      }}>Auth Screen</Text>
    </View>
  );
}

export default observer(AuthScreen);

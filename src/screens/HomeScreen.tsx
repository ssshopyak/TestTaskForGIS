import React from 'react';
import {View, Text} from 'react-native';
import {observer} from 'mobx-react-lite';
import store from '../store/store';
function HomeScreen(): JSX.Element {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text onPress={()=>{
        store.toAuth()
      }}>Home Screen</Text>
    </View>
  );
}

export default observer(HomeScreen);

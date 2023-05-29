import React from 'react';
import data from '../video/data.json'
import styles from './HomeStyles';
import {View, FlatList, Text, Dimensions} from 'react-native';
import {observer} from 'mobx-react-lite';
import Video from 'react-native-video'
import { VideoItem } from '../components/VideoItem';
import store from '../store/store';

function HomeScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      {/* <Text onPress={()=>{
        console.log(data.videos[0].sources[0])
      }}>{store.username}</Text> */}
       <FlatList
        data={data.videos}
        renderItem={(item)=><VideoItem item={item}/>}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
      {/* <VideoItem item={data.videos[0].sources[0]}/> */}
    </View>
  );
}

export default observer(HomeScreen);

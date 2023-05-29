import {observer} from 'mobx-react-lite'
import React from 'react'
import {Dimensions, FlatList, View} from 'react-native'
import {VideoItem} from '../components/VideoItem'
import data from '../video/data.json'
import styles from './HomeStyles'

function HomeScreen(): JSX.Element {
  return (
    <View style={styles.container}>
      <FlatList
        data={data.videos}
        renderItem={item => <VideoItem item={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  )
}

export default observer(HomeScreen)

import VisibilitySensor from '@svanboxel/visibility-sensor-react-native'
import React, {useState} from 'react'
import {TouchableWithoutFeedback, View} from 'react-native'
import Video from 'react-native-video'
import styles from '../screens/HomeStyles'

export const VideoItem = ({item}: {item: any}) => {
  const [isPaused, setIsPaused] = useState(true)
  const onPlayPaused = () => {
    setIsPaused(!isPaused)
    console.log(item.item.sources[0])
  }

  return (
    <VisibilitySensor
      onChange={isVisible => {
        return isVisible ? setIsPaused(false) : setIsPaused(true)
      }}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={onPlayPaused}>
          <Video
            source={{uri: item.item.sources[0]}}
            style={styles.video}
            resizeMode="cover"
            onError={error => {
              console.log(error)
            }}
            poster={item.item.thumb}
            posterResizeMode="cover"
            paused={isPaused}
            repeat={true}
            useTextureView={false}
            playInBackground={true}
            disableFocus={true}
          />
        </TouchableWithoutFeedback>
      </View>
    </VisibilitySensor>
  )
}

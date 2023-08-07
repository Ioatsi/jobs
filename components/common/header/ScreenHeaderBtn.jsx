import React from 'react'
import { View, TouchableOpacity, Image } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({ iconUrl, dimenmsion, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
        <Image
          source={iconUrl}
          resizeMode='cover'
          style={styles.btnImg(dimenmsion)}
        />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn
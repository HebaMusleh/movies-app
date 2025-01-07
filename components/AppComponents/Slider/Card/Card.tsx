import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { ISlider } from '@/types/types'


const Card = ({movie}: {movie:ISlider}) => {
  return (
    <View style={styles.wrapper}>
      <Image source={movie.image} />
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        marginRight: 20
    }
})

export default Card
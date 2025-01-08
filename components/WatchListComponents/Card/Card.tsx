import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

type Props = {}

const Card = (props: Props) => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Image
            style={styles.ImageStyle}
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
         />
      </View>
      <View>
        <Text style={styles.titleStyle}>Movie Title</Text>
        <View>
            <Text>Review</Text>
            <Text>Action</Text>
            <Text>2019</Text>
            <Text>193 minutes</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper :{
        flexDirection: 'row',
        padding: 16,
    }
    ,ImageStyle:{
        width: 100, 
        height: 150,
        borderRadius: 16,
        marginRight: 16
    },
    titleStyle:{
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 24,
        textAlign: 'left',
        color: '#fff'
    }
})

export default Card
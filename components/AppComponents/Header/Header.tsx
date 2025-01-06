import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <View>
      <Text style={styles.textStyle}>What do you want to watch?</Text>
    </View>
  )
}

const styles = StyleSheet.create({
textStyle:{
    fontFamily: "Poppins",
    fontSize: 18,
    fontWeight:"600",
    lineHeight: 27,
    textAlign: "left",
    textDecorationStyle: "solid",
    color:"#fff",
    paddingBottom: 16,
    paddingTop:16
}
})

export default Header

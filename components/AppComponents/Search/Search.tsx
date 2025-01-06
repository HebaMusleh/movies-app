import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

type Props = {};

const Search = (props: Props) => {
  return (
    <View style={styles.viewStyle}>
      <TextInput 
      placeholder="Search" 
      placeholderTextColor=" #67686D"
      style={styles.inputStyle}
    />
    <MaterialIcons name="search" size={32} color="#67686D" style={styles.iconStyle} />
    </View>
  );
};

const styles =StyleSheet.create({
    viewStyle:{
        flexDirection:"row",
    },
    inputStyle:{
        flex:1,
        backgroundColor:"#3A3F47",
        padding:10,
        borderRadius:16,
        borderWidth:0,
        borderColor: "transparent",
        position:"relative",
        maxWidth:"100%",
        color:"#fff"

    },
    iconStyle:{
        position:"absolute",
        right:10,
        top:5
    }
})

export default Search;

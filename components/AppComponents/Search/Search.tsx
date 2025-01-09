import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { useSearch } from "@/context/SearchContext";

const Search = () => {
  const {searchQuery,setSearchQuery}=useSearch()
  return (
    <View style={styles.viewStyle}>
      <TextInput
        placeholder="Search"
        placeholderTextColor=" #67686D"
        style={styles.inputStyle}
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <MaterialIcons
        name="search"
        size={32}
        color="#67686D"
        style={styles.iconStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    backgroundColor: "#3A3F47",
    padding: 10,
    borderRadius: 16,
    borderWidth: 0,
    borderColor: "transparent",
    position: "relative",
    maxWidth: "100%",
    color: "#fff",
    paddingLeft: 20,
  },
  iconStyle: {
    position: "absolute",
    right: 10,
    top: 5,
  },
});

export default Search;

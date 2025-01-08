import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";

const Header = ({ icon ,title }: { icon?: boolean,title:string }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => router.push("/")}>
        <MaterialIcons size={28} name="arrow-back" color="#fff" />
      </Pressable>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View>
        {icon && (
          <Pressable onPress={() => console.log("bookmark")}>
            <MaterialIcons size={28} name="bookmark" color="#fff" />
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#242A32",
    padding: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#fff",
  },
  text: {
    alignItems: "center",
    color: "#fff",
  },
});

export default Header;

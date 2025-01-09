import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

const Card = () => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Image
          style={styles.ImageStyle}
          source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }}
        />
      </View>
      <View style={{ justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>Movie Title</Text>
        <View>
          <View style={styles.details}>
            <MaterialIcons size={16} name="star" color="orange" />
            <Text style={[styles.text, { color: "orange" }]}>9.5</Text>
          </View>
          <View style={styles.details}>
            <MaterialIcons
              size={16}
              name="confirmation-number"
              color={"#eee"}
            />
            <Text style={styles.text}>Action</Text>
          </View>
          <View style={styles.details}>
            <MaterialIcons size={16} name="calendar-today" color={"#eee"} />
            <Text style={styles.text}>2019</Text>
          </View>
          <View style={styles.details}>
            <MaterialIcons size={16} name="access-time" color={"#eee"} />
            <Text style={styles.text}>20 minutes</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    padding: 16,
  },
  ImageStyle: {
    width: 100,
    height: 150,
    borderRadius: 16,
    marginRight: 16,
  },
  titleStyle: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    textAlign: "left",
    color: "#fff",
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    textAlign: "left",
  },
  text: {
    color: "#EEEEEE",
    fontWeight: 400,
    fontSize: 12,
    lineHeight: 18,
    marginLeft: 10,
  },
});

export default Card;

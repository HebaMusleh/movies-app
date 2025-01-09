import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { IData } from "@/types/types";
import { router } from "expo-router";

const SingleCard = ({ movie }: { movie: IData }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        router.push({
          pathname: "/detailsScreen/[id]",
          params: { id: movie.id },
        })
      }
      style={styles.wrapper}
    >
      <View>
        <Image style={styles.ImageStyle} source={movie.image} />
      </View>
      <View style={{ justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{movie.title}</Text>
        <View>
          <View style={styles.details}>
            <MaterialIcons size={16} name="star" color="orange" />
            <Text style={[styles.text, { color: "orange" }]}>
              {movie.reviews}
            </Text>
          </View>
          <View style={styles.details}>
            <MaterialIcons
              size={16}
              name="confirmation-number"
              color={"#eee"}
            />
            <Text style={styles.text}>{movie.type}</Text>
          </View>
          <View style={styles.details}>
            <MaterialIcons size={16} name="calendar-today" color={"#eee"} />
            <Text style={styles.text}>{movie.year}</Text>
          </View>
          <View style={styles.details}>
            <MaterialIcons size={16} name="access-time" color={"#eee"} />
            <Text style={styles.text}>{movie.runtime} minutes</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Card = ({ movie }: { movie: IData[] | null }) => {
  return (
    <FlatList
      data={movie}
      renderItem={({ item }) => <SingleCard movie={item} />}
      keyExtractor={(item) => item.id.toString()}
    />
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

import { View, Text, ImageBackground, Image, StyleSheet } from "react-native";
import React from "react";
import { IData } from "@/types/types";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "@/components/AppComponents";

const DetailsCard = ({ movie }: { movie: IData }) => {
  const TabsData = [
    {
      key: "AboutMovie",
      title: "About Movie",
      content: (
        <Text style={styles.movieContent}>
          {movie?.description || "No description Available"}
        </Text>
      ),
    },
    {
      key: "Review",
      title: "Review",
      content: (
        <Text style={styles.movieContent}>
          {movie?.reviews || "No Review Available "}
        </Text>
      ),
    },
    {
      key: "Cast",
      title: "Cast",
      content: (
        <Text style={styles.movieContent}>
          {movie?.actors || "No cast available"}
        </Text>
      ),
    },
  ];
  return (
    <View>
      <View>
        <ImageBackground
          source={movie.header}
          style={{ width: "100%", height: 300 }}
        />
      </View>
      <View style={styles.movieInfo}>
        <View style={styles.movieImage}>
          <Image source={movie.image} style={{ width: 100, height: 150 }} />
        </View>
        <View style={styles.movieTitleWrapper}>
          <Text style={styles.movieTitle}>{movie.title}</Text>
        </View>
      </View>
      <View style={styles.movieReview}>
        <View style={styles.movieReviewCard}>
          <MaterialIcons size={16} name="calendar-today" color={"#92929D"} />
          <Text style={styles.movieText}>{movie.year}</Text>
        </View>
        <View>
          <Text style={{ color: "#92929D" }}>|</Text>
        </View>
        <View style={styles.movieReviewCard}>
          <MaterialIcons size={16} name="access-time" color={"#92929D"} />
          <Text style={styles.movieText}>{movie.runtime}</Text>
        </View>
        <View>
          <Text style={{ color: "#92929D" }}>|</Text>
        </View>
        <View style={styles.movieReviewCard}>
          <MaterialIcons
            size={16}
            name="confirmation-number"
            color={"#92929D"}
          />
          <Text style={styles.movieText}>{movie.type}</Text>
        </View>
      </View>
      <View>
        <Tabs tabs={TabsData} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  movieInfo: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
  },
  movieImage: {
    marginTop: "-30%",
    marginRight: 20,
  },
  movieTitleWrapper: {
    width: "70%",
  },
  movieTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    lineHeight: 27,
  },
  movieReview: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 24,
  },
  movieReviewCard: {
    flexDirection: "row",
    alignItems: "center",
  },
  movieText: {
    color: "#92929D",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 15,
    marginLeft: 10,
  },
  movieContent: {
    padding: 20,
    fontSize: 12,
    fontWeight: 400,
    textAlign: "left",
    color: "#fff",
  },
});

export default DetailsCard;

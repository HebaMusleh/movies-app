import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { mockMoviesData } from "@/constants/data";
import { useLocalSearchParams } from "expo-router";

const DetailsScreen = () => {
  const { id } = useLocalSearchParams();
  console.log("Movie ID:", id);

  const movie = mockMoviesData.find((item) => item.id === parseInt(id, 10));
  if (!movie) {
    return (
      <View>
        <Text>Movie not found.</Text>
      </View>
    );
  }

  return <View></View>;
};

export default DetailsScreen;

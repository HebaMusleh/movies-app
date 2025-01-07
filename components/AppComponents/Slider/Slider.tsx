import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import Card from "./Card";
import { imagesSlider } from "@/constants/data";

type Props = {};

const Slider = (props: Props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={imagesSlider}
        renderItem={({ item }) => <Card movie={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});

export default Slider;

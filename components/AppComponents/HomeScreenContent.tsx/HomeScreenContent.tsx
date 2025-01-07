import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { mockMoviesData } from "@/constants/data";
import { useRouter } from "expo-router"; 

const HomeScreenContent = () => {
  const router = useRouter(); 

  return (
    <View style={styles.container}>
      {mockMoviesData.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            router.push({
              pathname: "/detailsScreen/[id]",
              params: { id: item.id },
            })
          }
        >
          <Image
            source={item.image}
            style={styles.image}
            resizeMode="cover"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 150,
    marginBottom: 10,
  },
});

export default HomeScreenContent;

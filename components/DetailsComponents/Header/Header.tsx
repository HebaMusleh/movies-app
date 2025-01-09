import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useBookmarks } from "@/context/BookMarkContext";
import { IData } from "@/types/types";

const Header = ({
  icon,
  title,
  movie,
}: {
  icon?: boolean;
  title: string;
  movie?: IData;
}) => {
  const { list, addBookmark, removeBookmark } = useBookmarks();
  const isBooked = list?.some((item) => item.id === movie?.id);
  const toggleBookMark = () => {
    if (isBooked) {
      if (movie?.id !== undefined) {
        removeBookmark(movie.id);
      }
    } else {
      if (movie !== undefined) {
        addBookmark(movie);
      }
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push("/")}>
        <MaterialIcons size={28} name="arrow-back" color="#fff" />
      </TouchableOpacity>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View>
        {icon && (
          <TouchableOpacity onPress={toggleBookMark}>
            {isBooked ? (
              <MaterialIcons size={28} name="bookmark" color="#fff" />
            ) : (
              <MaterialIcons size={28} name="bookmark-border" color="#fff" />
            )}
          </TouchableOpacity>
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

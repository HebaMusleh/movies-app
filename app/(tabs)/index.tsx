import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  Container,
  Header,
  Search,
  Slider,
  Tabs,
} from "@/components/AppComponents";
import HomeScreenContent from "@/components/AppComponents/HomeScreenContent.tsx/HomeScreenContent";

const TabData = [
  {
    key: "1",
    title: "Now Playing",
    content: React.createElement(HomeScreenContent),
  },
  {
    key: "2",
    title: "Upcoming",
    content: (
      <View>
        <Text>UpComing Components</Text>
      </View>
    ),
  },
  {
    key: "3",
    title: "Top Rated",
    content: (
      <View>
        <Text>Top Rated</Text>
      </View>
    ),
  },
  {
    key: "4",
    title: "Popular",
    content: (
      <View>
        <Text>Popular Components</Text>
      </View>
    ),
  },
];

const HomeScreen = () => {
  return (
    <Container>
      <View>
        <Header />
        <Search />
        <Slider />
        <Tabs tabs={TabData} />
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

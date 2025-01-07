import React from "react";
import { StyleSheet, View } from "react-native";

import {
  Container,
  Header,
  Search,
  Slider,
  Tabs,
} from "@/components/AppComponents";
import { TabData } from "@/constants/data";

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

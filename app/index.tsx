import { StyleSheet, View } from "react-native";
import React from "react";
import { Container, Header, Search, Slider } from "@/components/AppComponents";

type Props = {};

const index = (props: Props) => {
  return (
    <Container>
      <View>
        <Header />
        <Search />
        <Slider/>
      </View>
    </Container>
  );
};

export default index;

const styles = StyleSheet.create({});

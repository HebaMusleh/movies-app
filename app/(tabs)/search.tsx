import React from "react";
import { Text, View } from "react-native";

import {
  Container,
  Header,
  Search as SearchComponent,
} from "@/components/AppComponents";

const Search = () => {
  return (
    <Container>
      <Header />
      <SearchComponent />
      <View>
        <Text>Result show here !</Text>
      </View>
    </Container>
  );
};

export default Search;

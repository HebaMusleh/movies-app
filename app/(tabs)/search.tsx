import React from "react";
import { Text, View } from "react-native";

import {
  Container,
  Header,
  Search as SearchComponent,
} from "@/components/AppComponents";

import { useSearch } from "@/context/SearchContext";
import { Card } from "@/components/WatchListComponents";

const Search = () => {
  const { filteredData } = useSearch();
  return (
    <Container>
      <Header />
      <SearchComponent />
      <View>
        {filteredData ? (
          <Card movie={filteredData} />
        ) : (
          <Text style={{ color: "#fff" }}>
            There's now data with this title
          </Text>
        )}
      </View>
    </Container>
  );
};

export default Search;

import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { mockMoviesData } from "@/constants/data";

import { DetailsCard, Header } from "@/components/DetailsComponents";
import { Container } from "@/components/AppComponents";

const DetailsScreen = () => {
  const { id } = useLocalSearchParams();
  console.log("Movie ID:", id);

  const movie = mockMoviesData.find(
    (item) => item.id === parseInt(Array.isArray(id) ? id[0] : id, 10)
  );

  if (!movie) {
    return (
      <View>
        <Text>Movie not found.</Text>
      </View>
    );
  }

  return (
    <Container>
      <Header title="Details" icon />
      <DetailsCard movie={movie} />
    </Container>
  );
};

export default DetailsScreen;

import {
  Button,
  Dimensions,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import Carousel from "react-native-snap-carousel";
import Movie from "../components/Movie";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ActivityIndicator, ImageBackground } from "react-native";
import HorizontalSlider from "../components/HorizontalSlider";
import { useMovies } from "../hooks/useMovies";

const { width: windowWidth } = Dimensions.get("window");

export default function HomeScreen() {
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();

  const {isLoading,peliculas } = useMovies()

  //vamos a crear un estado de el circulito de carga , para que el estado pase de false a true y viceversa



  //Esta es una fumcion de nuestro componente (ruedita giratoria de carga) que en react native se llama ActivityIndicator  //Literal todo este componente lo hice en la documentacion de react native todo

  if (isLoading) {
    return (
      <View style={styles.activityindicatorView}>
        <ActivityIndicator size={50} color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 15 }}>
        <View style={{ height: 430 }}>
          <Carousel
            data={peliculas.nowPlaying}
            renderItem={({ item }) => <Movie movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300}
            inactiveSlideOpacity={0.9}
          />
        </View>

        {/* populares */}

        <View style={{ height: 260 }}>
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              marginLeft: 10,
            }}
          >
            Popular
          </Text>
          <FlatList
            data={peliculas.popular}
            renderItem={({ item }) => (
              <Movie movie={item} width={140} height={200} />
            )}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
          />
        </View>

        {/* //El componente de arriba lo pasamos a un archivo(componentes/HorizontalSlider) para reutilizarlo y en menos lineas de codigo */}

        {/* Top */}

        <HorizontalSlider movies={peliculas.topRated} title={"Top Rated"} />

        {/* Upcoming */}

        <HorizontalSlider movies={peliculas.upcoming} title={"Up Coming"} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  activityindicatorView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

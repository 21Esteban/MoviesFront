import {
  ActivityIndicator,
  Button,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityBase,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from "axios";
import MovieDetails from "../components/MovieDetails";
import { useMoviesDetails } from "../hooks/useMovieDetails";

//con esta constante estamos obteniend la altura de nuestro telefono o dispositivo

const screenHeight = Dimensions.get("screen").height;

export default function DetailScreen({ route }) {
  //Esta variable movie nos sirve como un input por asi decirlo , el usuario aprieta la pelicula y automaticamente es como si en la ruta el parametro cambia a la de la pelicula

  const movie = route.params;

  console.log(movie.original_title);

  const navigation = useNavigation();

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const {isLoading,movieFull,cast} = useMoviesDetails(movie)

  return (
    <ScrollView>
      <View style={styles.Contenedordeimagen}>
        <View style={styles.bordeDeLaImagen}>
          <Image style={styles.Imagen} source={{ uri }} />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.title}>{movie.original_title}</Text>
        <Text style={styles.subtitle}>{movie.title}</Text>
      </View>


      {
        isLoading? ( <ActivityIndicator size={60} color="gray" /> ):(<MovieDetails movieFull={movieFull} cast={cast}/>
      )}

      

      

      {/* Boton para volver  a HomeScreen*/}

    <TouchableOpacity style={styles.backboton}>
    <Ionicons name="close-outline" color="white" onPress={()=>{navigation.goBack()}} size={60}></Ionicons>
    </TouchableOpacity>




    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Contenedordeimagen: {
    width: "100%",
    height: screenHeight * 0.7,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    //Sombrita para el contenedor de la imagen de la muvi

    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },

  bordeDeLaImagen: {
    flex: 1,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    overflow: "hidden",
  },

  Imagen: {
    flex: 1,
  },

  marginContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },

  title: { fontSize: 20, fontWeight: "bold" },

  subtitle: { fontSize: 16, opacity: 0.8 },

backboton:{ position:"absolute" , top:30 , left:6, opacity:0.7

}

});

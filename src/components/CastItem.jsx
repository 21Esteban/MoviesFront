import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const CastItem = ({ actor }) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.ContenedorDeImagenActor}>
      {actor.profile_path && 
        <Image source={{ uri }} style={styles.CaracteristicasdeImg} />
      }
      <View style={styles.ActorInfo}>
        <Text style={{fontsize:18,fontWeight:"bold"}} >{actor.name}</Text>
        <Text style={{fontsize:16,opacity:0.7}} >{actor.character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ContenedorDeImagenActor: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    height: 50,
    shadowColor: "#000000",
    shadowOffset: {
      width: 5,
      height: 3,
    },
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 10,
    marginLeft: 10,
    paddingRight: 15,
  },

  ActorInfo: {
    marginLeft: 10,
    marginTop: 2,
  },

  CaracteristicasdeImg: {
    width: 50,
    height: 50,
    borderRadius: 15,
  },
});

export default CastItem;

import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import Movie from "./Movie";

export default function HorizontalSlider({ movies, title }) {
  return (
    <View style={{ height: title? 260 : 220 }}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            marginLeft: 10,
          }}
        >
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <Movie movie={item} width={140} height={200} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

import React, { useEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";

import Categoryitem from "../components/FlatListElements/CategoryItem";
import Sourceitem from "../components/FlatListElements/SourceItem";

import color from "../config/color";

import { categories, sources } from "../util/api";

const Home = ({ jumpTo }) => {
  return (
    <View style={[styles.container, { backgroundColor: color.dark_primary }]}>
      <Text style={[styles.heading, { color: "white" }]}>Categories</Text>
      <FlatList
        data={categories}
        keyExtractor={(category) => category.name}
        renderItem={(category) => (
          <Categoryitem category={category} jumpTo={jumpTo} />
        )}
        style={styles.categories}
        horizontal
        showsHorizontalScrollIndicator
      />

      <Text style={[styles.heading, { color: "white" }]}>Sources</Text>

      <View style={styles.sourcesConatiner}>
        <FlatList
          data={sources}
          keyExtractor={(source) => source.id}
          renderItem={(source) => (
            <Sourceitem source={source} jumpTo={jumpTo} />
          )}
          numColumns={2}
          style={styles.sources}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  heading: {
    fontSize: 24,
    margin: 30,
  },
  categories: {
    flexGrow: 0,
  },
  sourcesConatiner: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sources: {
    width: "100%",
  },
});

export default Home;

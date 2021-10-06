import React, { useEffect } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import { connect } from "react-redux";

import Categoryitem from "../components/FlatListElements/CategoryItem";
import Sourceitem from "../components/FlatListElements/SourceItem";

import color from "../config/color";

import { categories, sources } from "../util/api";

const Home = ({ jumpTo, darkMode }) => {
  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: darkMode
            ? color.dark_primary
            : color.white_secondary,
        },
      ]}
    >
      <Text style={[styles.heading, { color: darkMode ? "white" : "black" }]}>
        Categories
      </Text>
      <FlatList
        data={categories}
        keyExtractor={(category) => category.name}
        renderItem={(category) => (
          <Categoryitem
            category={category}
            jumpTo={jumpTo}
            darkMode={darkMode}
          />
        )}
        style={styles.categories}
        horizontal
        showsHorizontalScrollIndicator
      />

      <Text style={[styles.heading, { color: darkMode ? "white" : "black" }]}>
        Sources
      </Text>

      <View style={styles.sourcesConatiner}>
        <FlatList
          data={sources}
          keyExtractor={(source) => source.id}
          renderItem={(source) => (
            <Sourceitem source={source} jumpTo={jumpTo} darkMode={darkMode} />
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

const mapStateToProps = ({ darkMode }) => {
  return { darkMode: darkMode };
};

export default connect(mapStateToProps)(Home);

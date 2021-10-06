import React from "react";
import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";
import { connect } from "react-redux";

import { getNews } from "../../actions";

const Categoryitem = ({ category, getNews, jumpTo }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        getNews({ topic: category.item.name, jumpTo, type: "category" })
      }
    >
      <Image
        style={styles.image}
        source={{
          uri: category.item.pic,
        }}
      />
      <Text style={[styles.text, { color: "white" }]}>
        {category.item.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 130,
    margin: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
});

export default connect(null, { getNews })(Categoryitem);

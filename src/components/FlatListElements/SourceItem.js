import React from "react";
import { connect } from "react-redux";
import { StyleSheet, TouchableOpacity, Image, Text } from "react-native";

import { getNews } from "../../actions";

const Sourceitem = ({ source, getNews, jumpTo, darkMode }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => getNews({ topic: source.item.id, jumpTo, type: "source" })}
    >
      <Image
        style={styles.image}
        source={{
          uri: source.item.pic,
        }}
      />
      <Text style={[styles.text, { color: darkMode ? "white" : "black" }]}>
        {source.item.name}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 180,
    width: 180,
    margin: 10,
  },
  image: {
    width: "80%",
    height: "80%",
    borderRadius: 15,
  },
  text: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "900",
  },
});

export default connect(null, { getNews })(Sourceitem);

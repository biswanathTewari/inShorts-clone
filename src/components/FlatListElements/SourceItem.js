import React from "react";
import { View, StyleSheet, TouchableOpacity, Image, Text } from "react-native";

const Sourceitem = ({ source }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: source.item.pic,
        }}
      />
      <Text style={[styles.text, { color: "white" }]}>{source.item.name}</Text>
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

export default Sourceitem;

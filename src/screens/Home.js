import React from "react";
import { View, StyleSheet, Text } from "react-native";

import color from "../config/color";

const Home = () => {
  return (
    <View style={{ flex: 1, backgroundColor: color.dark_primary }}>
      <Text style={{ color: "white" }}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Home;

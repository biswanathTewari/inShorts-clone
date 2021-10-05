import React from "react";
import { View, Text, StyleSheet } from "react-native";

import color from "../config/color";

const Feed = () => {
  return (
    <View style={{ flex: 1, backgroundColor: color.dark_primary }}>
      <Text style={{ color: "white" }}>Feed</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Feed;

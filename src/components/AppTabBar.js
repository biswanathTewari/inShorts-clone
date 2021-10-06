import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

import color from "../config/color";

const Apptabbar = (props) => {
  const { navigationState, jumpTo } = props;
  const { index } = navigationState;

  const HomeRightButton = () => (
    <TouchableOpacity>
      <MaterialCommunityIcons name="theme-light-dark" size={24} color="white" />
    </TouchableOpacity>
  );

  const HomeLeftButton = () => (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => jumpTo("feed")}
    >
      <Text style={{ color: "white", position: "absolute", right: "100%" }}>
        My Feed
      </Text>
      <MaterialIcons name="arrow-forward-ios" size={24} color="white" />
    </TouchableOpacity>
  );

  const FeedRightButton = () => (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => jumpTo("home")}
    >
      <MaterialIcons name="arrow-back-ios" size={24} color="white" />
      <Text style={{ color: "white", position: "absolute", left: "100%" }}>
        Discover
      </Text>
    </TouchableOpacity>
  );

  const FeedLeftButton = () => (
    <TouchableOpacity>
      <Ionicons name="ios-reload" size={24} color="white" />
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: color.dark_secondary }]}>
      {index === 0 ? <HomeRightButton /> : <FeedRightButton />}
      <Text style={{ color: "white", textDecorationLine: "underline" }}>
        {index === 0 ? "Discover" : "My Feed"}
      </Text>
      {index === 0 ? <HomeLeftButton /> : <FeedLeftButton />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    position: "relative",
  },
});

export default Apptabbar;

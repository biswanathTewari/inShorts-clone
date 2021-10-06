import React from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";

import { getNews } from "../actions";

import color from "../config/color";

const Apptabbar = (props) => {
  const { navigationState, jumpTo, getNews } = props;
  const { index } = navigationState;

  const HomeLeftButton = () => (
    <TouchableOpacity>
      <MaterialCommunityIcons name="theme-light-dark" size={24} color="white" />
    </TouchableOpacity>
  );

  const HomeRightButton = () => (
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

  const FeedLeftButton = () => (
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

  const FeedRightButton = () => (
    <TouchableOpacity onPress={() => getNews({ isFromFeed: true })}>
      <Ionicons name="ios-reload" size={24} color="white" />
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: color.dark_secondary }]}>
      {index === 0 ? <HomeLeftButton /> : <FeedLeftButton />}
      <Text style={{ color: "white", textDecorationLine: "underline" }}>
        {index === 0 ? "Discover" : "My Feed"}
      </Text>
      {index === 0 ? <HomeRightButton /> : <FeedRightButton />}
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

export default connect(null, { getNews })(Apptabbar);

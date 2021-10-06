import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

import { getNews } from "../actions";

import NewsItem from "../components/FlatListElements/NewsItem";

import color from "../config/color";

const Feed = ({ news, getNews }) => {
  useEffect(() => {
    if (news == []) getNews({ isFromFeed: true });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: color.dark_primary }}>
      <NewsItem />
    </View>
  );
};

const styles = StyleSheet.create({});

const mapStateToProps = ({ news }) => {
  return { news: news };
};

export default connect(mapStateToProps, { getNews })(Feed);

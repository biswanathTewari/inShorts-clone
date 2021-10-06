import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import { connect } from "react-redux";

import { getNews } from "../actions";

import NewsItem from "../components/FlatListElements/NewsItem";

import color from "../config/color";

const Feed = ({ news, getNews, darkMode }) => {
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    if (news == []) getNews({ isFromFeed: true });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: darkMode ? color.dark_primary : color.white_secondary,
      }}
    >
      <FlatList
        data={news}
        keyExtractor={(newsItem) => newsItem.title}
        renderItem={(newsItem) => (
          <NewsItem newsItem={newsItem} darkMode={darkMode} />
        )}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={Dimensions.get("window").height - 127}
        refreshing={refreshing}
        onRefresh={() => getNews({ isFromFeed: true })}
      />
    </View>
  );
};

const mapStateToProps = ({ news, darkMode }) => {
  return { news: news, darkMode: darkMode };
};

export default connect(mapStateToProps, { getNews })(Feed);

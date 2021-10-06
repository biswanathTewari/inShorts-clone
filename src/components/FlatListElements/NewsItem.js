import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  ImageBackground,
  Linking,
} from "react-native";

const NewsItem = () => {
  const newsItem = {
    source: {
      id: null,
      name: "NDTV News",
    },
    author: null,
    title:
      "Bigg Boss 15 October 5, 2021, Written Update: Jay Bhanushali And Pratik Sehajpal Get Into An Ugly Fight - NDTV Movies",
    description:
      "Bigg Boss 15: The fight between Jay Bhanushali and Pratik started when the latter hid the map inside the house that was given by Bigg Boss to junglewasis to survive outside the house for a few days",
    url: "https://www.ndtv.com/entertainment/bigg-boss-15-october-5-2021-written-update-jay-bhanushali-and-pratik-sehajpal-get-into-an-ugly-fight-2565159",
    urlToImage:
      "https://c.ndtvimg.com/2021-10/993mto1_bigg-boss-15_625x300_05_October_21.jpg",
    publishedAt: "2021-10-05T18:22:33Z",
    content:
      "Bigg Boss 15: A still from the house. (Image courtesy: colorrstv)\r\nHighlights\r\n<ul><li>Shamita Shetty, Pratik Sehajpal, Nishant Bhat are safe inside the house\r\n</li><li>They made plans to stop other … [+2468 chars]",
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: newsItem.urlToImage }} />
      <View style={styles.details}>
        <Text style={[styles.title, { color: "white" }]}>{newsItem.title}</Text>
        <Text style={[styles.description, { color: "white" }]}>
          {newsItem.description}
        </Text>
        <Text style={[styles.source, { color: "white" }]}>
          Source: {newsItem.source.name}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.footer}
        onPress={() => Linking.openURL(newsItem.url)}
      >
        <ImageBackground
          style={styles.footerBackGround}
          source={{ uri: newsItem.urlToImage }}
          blurRadius={10}
        >
          <Text style={{ color: "white", zIndex: 1 }}>{newsItem.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height - 117,
    alignItems: "center",
    position: "relative",
    borderRadius: 10,
  },
  image: {
    height: "30%",
    width: "100%",
  },
  details: {
    padding: 20,
    paddingTop: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "500",
  },
  source: {
    marginTop: 13,
    fontSize: 14,
    fontWeight: "700",
  },
  footer: {
    height: "8%",
    width: "100%",
    position: "absolute",
    bottom: 5,
  },
  footerBackGround: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NewsItem;

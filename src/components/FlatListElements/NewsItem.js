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

const NewsItem = ({ newsItem }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: newsItem.item.urlToImage }} />
      <View style={styles.details}>
        <Text style={[styles.title, { color: "white" }]}>
          {newsItem.item.title}
        </Text>
        <Text style={[styles.description, { color: "white" }]}>
          {newsItem.item.description}
        </Text>
        <Text style={[styles.source, { color: "white" }]}>
          Source: {newsItem.item.source.name}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.footer}
        onPress={() => Linking.openURL(newsItem.item.url)}
      >
        <ImageBackground
          style={styles.footerBackGround}
          source={{ uri: newsItem.item.urlToImage }}
          blurRadius={10}
        >
          <Text style={{ color: "white", zIndex: 1 }}>
            {newsItem.item.title}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: Dimensions.get("window").height - 127,
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
    bottom: 0,
  },
  footerBackGround: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NewsItem;

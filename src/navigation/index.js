import React, { useState } from "react";
import { useWindowDimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";

import Home from "../screens/Home";
import Feed from "../screens/Feed";

import AppTabBar from "../components/AppTabBar";

const renderScene = SceneMap({
  home: Home,
  feed: Feed,
});

export default function Navigation() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "home", title: "Home" },
    { key: "feed", title: "Feed" },
  ]);

  return (
    <TabView
      renderTabBar={(props) => <AppTabBar {...props} />}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}

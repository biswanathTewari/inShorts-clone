import React from "react";
import { Provider } from "react-redux";

import { store } from "./src/store";

import Screen from "./src/components/Screen";

import Navigation from "./src/navigation";

const ConnectedApp = () => {
  return (
    <Screen>
      <Navigation />
    </Screen>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <ConnectedApp />
    </Provider>
  );
}

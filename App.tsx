import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "@/app/providers/stores/store";
import CoreLayout from "@/app/layouts/core/ui";
import "./global.css";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <CoreLayout />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

// vendors
import "react-native-gesture-handler";
import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// routes
import Routes from "./routes";

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} />

      <View style={styles.sectionContainer}>
        <Routes />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: "#312e38",
    justifyContent: "center",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: "600",
    color: "#FFF",
  },
});

export default App;

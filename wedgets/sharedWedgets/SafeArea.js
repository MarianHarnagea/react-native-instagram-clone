import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";

const SafeArea = () => {
  return <View style={styles.container}></View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: StatusBar.currentHeight,
  },
});

export default SafeArea;

import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LandingScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    marginTop: StatusBar.currentHeight,
  },
});
export default LandingScreen;

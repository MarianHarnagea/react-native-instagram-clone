import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { StyleSheet, View, ScrollView, Text } from "react-native";

const Drawer = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.linkContainer}>
          <MaterialIcons name="menu" size={26} color="white" />

          <Text style={styles.text}>Settings</Text>
        </View>
        <View style={styles.linkContainer}>
          <MaterialIcons name="menu" size={26} color="white" />

          <Text style={styles.text}>Settings</Text>
        </View>
      </View>

      <View style={styles.linkContainer}>
        <MaterialIcons name="menu" size={26} color="white" />

        <Text style={styles.text}>Log out</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingLeft: 20,
  },
  linkContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  text: {
    color: "white",
    marginLeft: 10,
  },
});

export default Drawer;

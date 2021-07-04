import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icons from "react-native-vector-icons/Ionicons";

const NavBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button_back}>
        <Icons style={styles.icon} name="close" color="white" size={30} />
      </TouchableOpacity>

      <Text style={styles.text}>New Post</Text>

      <TouchableOpacity style={styles.button_forward}>
        <Icons
          style={styles.icon}
          name="arrow-forward"
          color="white"
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "700",
    // textTransform: "uppercase",
  },
  button_back: {
    paddingRight: 40,
  },
  button_forward: {
    paddingLeft: 40,
  },
});

export default NavBar;

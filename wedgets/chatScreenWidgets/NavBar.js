import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icons from "react-native-vector-icons/Ionicons";

const NavBar = ({ goToFeed }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToFeed}>
        <Icons style={styles.icon} name="arrow-back" color="white" size={28} />
      </TouchableOpacity>

      <Text style={styles.text}>Chat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
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
  icon: {
    marginRight: 35,
  },
});

export default NavBar;

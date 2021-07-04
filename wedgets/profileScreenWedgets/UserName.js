import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const UserName = ({ openDrawer, closeDrawer, isDrawerOpen }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>John Doe</Text>

      <TouchableOpacity>
        <AntDesign
          onPress={!isDrawerOpen ? openDrawer : closeDrawer}
          name={isDrawerOpen ? "menu-fold" : "menu-unfold"}
          size={24}
          color="white"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
    marginTop: 15,
  },
  text: {
    color: "white",
    fontWeight: "700",
    fontSize: 20,
  },
});

export default UserName;

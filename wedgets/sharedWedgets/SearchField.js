import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const SearchField = () => {
  return (
    <View style={styles.container}>
      <MaterialIcons
        style={styles.icon}
        name="search"
        size={20}
        color="white"
      />
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#fff"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 5,
    paddingLeft: 10,
    backgroundColor: "#262626",
    margin: 10,
  },
  icon: {
    marginRight: 5,
  },
  input: {
    flex: 1,
    color: "white",
  },
});

export default SearchField;

import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const User = ({ image }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={image} />
      <View style={styles.infoContainer}>
        <Text style={styles.userName}>UserName</Text>
        <Text style={styles.name}>First Name Last Name</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
  },
  infoContainer: {
    marginLeft: 15,
    justifyContent: "center",
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  userName: {
    color: "white",
  },
  name: {
    color: "grey",
    fontSize: 12,
  },
});

export default User;

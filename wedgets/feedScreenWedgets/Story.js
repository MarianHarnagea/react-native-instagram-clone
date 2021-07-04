import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Story = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["rgba(225,0,0,1)", "rgba(255,166,0,1)"]}
        style={styles.gradient}
      >
        <View style={styles.ring}>
          <Image
            style={styles.image}
            source={require("../../assets/images/profile_2.jpg")}
          />
        </View>
      </LinearGradient>
      <Text style={styles.text}>Post</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 5,
  },
  gradient: {
    borderRadius: 50,
    padding: 2,
  },
  ring: {
    backgroundColor: "black",
    borderRadius: 50,
    padding: 2,
  },
  image: {
    width: 65,
    height: 65,
    borderRadius: 50,
    backgroundColor: "white",
  },
  text: {
    color: "white",
    paddingTop: 3,
    fontSize: 10,
    letterSpacing: 1,
  },
});

export default Story;

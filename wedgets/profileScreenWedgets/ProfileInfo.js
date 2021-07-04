import React from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";

import img from "../../assets/images/profile_2.jpg";

const ProfileInfo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.InfoContainer}>
        <Image style={styles.image} source={img} />
        <View style={styles.innerContainer}>
          <View style={styles.socials}>
            <Text style={styles.socialNumber}>20</Text>
            <Text style={styles.socialTitle}>Posts</Text>
          </View>
          <View style={styles.socials}>
            <Text style={styles.socialNumber}>200</Text>
            <Text style={styles.socialTitle}>Followers</Text>
          </View>
          <View style={styles.socials}>
            <Text style={styles.socialNumber}>430</Text>
            <Text style={styles.socialTitle}>Following</Text>
          </View>
        </View>
      </View>
      <Text style={styles.name}>John</Text>
      <Text style={styles.description}>
        Description Description Description Description Descriptions
      </Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
  },
  InfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginRight: 40,
  },
  innerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  socialTitle: {
    color: "white",
    textAlign: "center",
  },
  socialNumber: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
  name: {
    color: "white",
    marginTop: 15,
    fontWeight: "700",
  },
  description: {
    color: "white",
    marginTop: 0,
  },
  buttonContainer: {
    marginTop: 10,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: "grey",
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "white",
  },
});
export default ProfileInfo;

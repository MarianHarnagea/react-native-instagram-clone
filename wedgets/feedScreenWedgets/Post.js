import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Dimensions } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

const windowWidth = Dimensions.get("window").width;

const Post = () => {
  return (
    <View style={styles.postContainer}>
      <View style={styles.containerInfo}>
        <Image
          style={styles.profileImage}
          source={require("../../assets/images/profile_2.jpg")}
        />
        <Text style={styles.userName}>Name</Text>
      </View>
      <View>
        <Image
          style={styles.postImage}
          source={require("../../assets/images/feed_post_2.jpg")}
        />
      </View>
      <View style={styles.interactIcons}>
        <Ionicons
          style={{ marginLeft: 5, marginRight: 10 }}
          name="heart-outline"
          size={26}
          color="white"
        />
        <Ionicons name="chatbubble-outline" size={24} color="white" />
      </View>
      <Text style={styles.linkedBy}>Liked by John and 300 others </Text>
      <Text style={styles.description}>Description</Text>
      <Text style={styles.postedAgo}>2 hours ago</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    marginTop: 20,
  },
  text: {
    color: "white",
    padding: 20,
  },
  containerInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  userName: {
    color: "white",
    marginLeft: 15,
  },
  profileImage: {
    borderRadius: 50,
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  postImage: {
    marginTop: 10,
    width: windowWidth - 3,
    height: windowWidth - 3,
    resizeMode: "contain",
  },
  interactIcons: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  linkedBy: {
    color: "white",
    marginTop: 5,
    marginLeft: 5,
  },
  description: {
    color: "white",
    marginTop: 5,
    marginLeft: 5,
  },
  postedAgo: {
    color: "grey",
    fontSize: 10,
    marginTop: 5,
    marginLeft: 5,
  },
});

export default Post;

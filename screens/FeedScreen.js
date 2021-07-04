import React from "react";
import { StyleSheet, View, ScrollView, Dimensions } from "react-native";
import NavBar from "../wedgets/feedScreenWedgets/NavBar";
import Post from "../wedgets/feedScreenWedgets/Post";
import StoryFeed from "../wedgets/feedScreenWedgets/StoryFeed";
import Devider from "../wedgets/sharedWedgets/Devider";

const windowWidth = Dimensions.get("window").width;

const FeedScreen = ({ goToChat }) => {
  return (
    <View style={styles.container}>
      <NavBar goToChat={goToChat} />
      <ScrollView>
        <StoryFeed />
        <Devider width={0.2} top={5} />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
  },
});

export default FeedScreen;

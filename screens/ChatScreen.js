import React from "react";
import { StyleSheet, Text, View, StatusBar, Dimensions } from "react-native";
import NavBar from "../wedgets/chatScreenWidgets/NavBar";
import Devider from "../wedgets/sharedWedgets/Devider";
import SearchField from "../wedgets/sharedWedgets/SearchField";
import SearchList from "../wedgets/sharedWedgets/SearchList";

const windowWidth = Dimensions.get("window").width;

const ChatScreen = ({ goToFeed }) => {
  return (
    <View style={styles.container}>
      <NavBar goToFeed={goToFeed} />
      <Devider top={5} bottom={5} />
      <SearchField />
      <SearchList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
  },
  text: { color: "white" },
});
export default ChatScreen;

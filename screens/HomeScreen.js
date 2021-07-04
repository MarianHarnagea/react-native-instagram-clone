import React, { useRef } from "react";
import { StyleSheet, View, ScrollView, StatusBar } from "react-native";
import FeedScreen from "./FeedScreen";
import ChatScreen from "./ChatScreen";

const HomeScreen = () => {
  const scrollRef = useRef();

  const goToFeed = () => {
    scrollRef.current.scrollTo({
      y: 0,
      animated: true,
    });
    console.log("Scrolled to Feed");
  };

  const goToChat = () => {
    scrollRef.current.scrollToEnd({ animated: true });
    console.log("Scrolled to Chat");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        scrollEnabled={false}
        ref={scrollRef}
        decelerationRate="normal"
      >
        <FeedScreen goToChat={goToChat} />

        <ChatScreen goToFeed={goToFeed} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    marginTop: StatusBar.currentHeight,
  },
});

export default HomeScreen;

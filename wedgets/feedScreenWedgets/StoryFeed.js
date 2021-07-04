import React, { useState } from "react";
import {
  ScrollView,
  Dimensions,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import Story from "./Story";

const windowWidth = Dimensions.get("window").width;

const StoryFeed = () => {
  return (
    <ScrollView
      style={{ width: windowWidth }}
      horizontal={true}
      scrollEventThrottle={400}
    >
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
      <Story />
    </ScrollView>
  );
};

export default StoryFeed;

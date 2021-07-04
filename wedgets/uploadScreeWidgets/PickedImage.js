import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { deviceWidth } from "../../constants/constants";

const PickedImage = ({ image }) => {
  return (
    <View style={styles.container}>
      {image !== null ? (
        <Image
          style={{ aspectRatio: 4 / 3 }}
          resizeMode="cover"
          source={{ uri: image.url }}
        />
      ) : (
        <Text style={{ color: "white" }}>No Photos</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
  },
});

export default PickedImage;

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";

import { darkGrey } from "../../constants/constants";

const SelectAlbum = ({ album, setIsAlbumListOpen }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.album}
        onPress={() => setIsAlbumListOpen(true)}
      >
        <Text style={styles.text}>{album !== null ? album.title : ""}</Text>
        <Icon
          style={styles.icon}
          name="keyboard-arrow-up"
          color="white"
          size={30}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    color: "white",
    backgroundColor: darkGrey,
    paddingLeft: 20,
    paddingRight: 20,
  },
  album: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 5,
    paddingTop: 5,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});

export default SelectAlbum;

import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";

import {
  deviceWidth,
  deviceHeight,
  darkGrey,
  lightGrey,
  grey500,
} from "../../constants/constants";
import Devider from "../sharedWedgets/Devider";

const AlbumList = ({
  albums,
  isAlbumListOpen,
  setIsAlbumListOpen,
  changeAlbum,
}) => {
  return (
    <View
      style={{
        opacity: isAlbumListOpen ? 1 : 0,
        zIndex: isAlbumListOpen ? 10 : -999,
      }}
    >
      <View style={styles.container}>
        <View style={styles.arrowContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsAlbumListOpen(false)}
          >
            <Icon
              style={styles.icon}
              name="keyboard-arrow-down"
              color="white"
              size={35}
            />
          </TouchableOpacity>
        </View>
        <ScrollView>
          {albums !== undefined && albums.length !== 0 ? (
            albums.map((album, index) => (
              <TouchableOpacity key={index} onPress={() => changeAlbum(album)}>
                <Text style={styles.album}>{album.title}</Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text style={styles.album}>No Albums Found</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default AlbumList;

const styles = StyleSheet.create({
  container: {
    width: deviceWidth - 20,
    height: deviceHeight - 200,
    marginLeft: 10,
    marginRight: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: darkGrey,
    position: "absolute",
    left: 0,
    bottom: 0,
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  arrowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  button: {
    paddingLeft: 50,
    paddingRight: 50,
  },
  album: {
    fontWeight: "700",
    color: "white",
    fontSize: 18,
    marginBottom: 20,
  },
});

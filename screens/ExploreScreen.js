import React from "react";
import { StyleSheet, StatusBar, View } from "react-native";
import SearchField from "../wedgets/sharedWedgets/SearchField";
import ImageGrid from "../wedgets/sharedWedgets/ImageGrid";
import SearchList from "../wedgets/sharedWedgets/SearchList";
import Devider from "../wedgets/sharedWedgets/Devider";

const ExploreScreen = () => {
  return (
    <View style={styles.container}>
      <SearchField />
      <Devider bottom={10} width={0.5} />
      {/* <ImageGrid /> */}
      <SearchList />
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

export default ExploreScreen;

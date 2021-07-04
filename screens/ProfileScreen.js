import React, { useState, useRef } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  ScrollView,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import ImageGrid from "../wedgets/sharedWedgets/ImageGrid";
import ProfileInfo from "../wedgets/profileScreenWedgets/ProfileInfo";
import UserName from "../wedgets/profileScreenWedgets/UserName";
import Devider from "../wedgets/sharedWedgets/Devider";
import Drawer from "../wedgets/profileScreenWedgets/Drawer";

const windowWidth = Dimensions.get("window").width;

const ProfileScreen = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const scrollRef = useRef();

  const openDrawer = () => {
    console.log("Drawer Opend");
    scrollRef.current.scrollToEnd({ animated: true });
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    scrollRef.current.scrollTo({
      y: 0,
      animated: true,
    });
    setIsDrawerOpen(false);
    console.log("Drawer Closed");
  };

  return (
    <View style={styles.container}>
      <UserName
        openDrawer={openDrawer}
        closeDrawer={closeDrawer}
        isDrawerOpen={isDrawerOpen}
      />
      <ScrollView horizontal={true} scrollEnabled={false} ref={scrollRef}>
        <TouchableWithoutFeedback
          onPress={closeDrawer}
          style={styles.profileContiner}
        >
          <Devider width={0.5} />
          <ProfileInfo />
          <Devider width={0.5} bottom={5} top={5} />
          <ImageGrid numColumns={3} />
        </TouchableWithoutFeedback>

        <View style={styles.drawerContiner}>
          <Drawer />
        </View>
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
  profileContiner: {
    width: windowWidth,
  },
  drawerContiner: {
    width: 200,
    borderColor: "#212121",
    borderLeftWidth: 0.5,
  },
});
export default ProfileScreen;

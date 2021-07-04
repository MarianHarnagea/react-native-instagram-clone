import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Icons from "react-native-vector-icons/Ionicons";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const getFonts = () =>
  Font.loadAsync({ Billabong: require("../../assets/fonts/Billabong.ttf") });

const NavBar = ({ goToChat }) => {
  const [font, setFont] = useState(false);

  if (font) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Instagram</Text>
        <TouchableOpacity onPress={goToChat}>
          <Icons
            style={styles.icon}
            name="paper-plane-outline"
            color="white"
            size={24}
          />
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onError={(error) => console.log(error)}
        onFinish={() => setFont(true)}
      />
    );
  }
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingTop: 8,
    paddingRight: 10,
  },
  text: {
    color: "white",
    fontSize: 35,
    letterSpacing: 1,
    fontFamily: "Billabong",
  },
  icon: {
    paddingTop: 5,
  },
});

export default NavBar;

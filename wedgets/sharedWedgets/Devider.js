import React from "react";
import { View } from "react-native";

const Devider = ({ top, bottom, width }) => {
  return (
    <View
      style={{
        borderColor: "#212121",
        borderWidth: width,
        marginTop: top,
        marginBottom: bottom,
      }}
    />
  );
};

export default Devider;

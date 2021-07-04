import React, { useState } from "react";
import { FlatList, Image, TouchableWithoutFeedback } from "react-native";

import { deviceWidth } from "../../constants/constants";

const ImageGrid = ({ images, getSeletedImage }) => {
  const numColumns = 4;

  return (
    <FlatList
      numColumns={numColumns}
      data={images !== undefined && images.length !== "0" ? images : null}
      renderItem={({ item, index }) => (
        <TouchableWithoutFeedback onPress={() => getSeletedImage(item, index)}>
          <Image
            style={{
              height: deviceWidth / numColumns,
              flex: 1,
              borderWidth: 1,
              borderColor: "black",
              opacity: item.isSelected ? 0.3 : 1,
            }}
            source={{ uri: item.url }}
            keyExtractor={(item, index) => index.toString()}
            key={index}
          ></Image>
        </TouchableWithoutFeedback>
      )}
    />
  );
};

export default ImageGrid;

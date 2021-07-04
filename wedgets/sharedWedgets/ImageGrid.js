import React from "react";
import { FlatList, Image, Dimensions } from "react-native";

import { deviceWidth } from "../../constants/constants";

const ImageGrid = ({ images, numColumns }) => {
  return (
    <FlatList
      numColumns={numColumns}
      data={images !== undefined && images.length !== "0" ? images : null}
      renderItem={({ item }) => (
        <Image
          style={{
            height: deviceWidth / numColumns,
            flex: 1,
            borderWidth: 1,
            borderColor: "black",
          }}
          source={{ uri: item.url }}
        ></Image>
      )}
    />
  );
};

export default ImageGrid;

import React, { useState, useEffect } from "react";
import * as MediaLibrary from "expo-media-library";
import { Button, View, StyleSheet, StatusBar } from "react-native";

// Widgets
import ImageGrid from "../wedgets/uploadScreeWidgets/ImageGrid";
import Devider from "../wedgets/sharedWedgets/Devider";
import PickedImage from "../wedgets/uploadScreeWidgets/PickedImage";
import NavBar from "../wedgets/uploadScreeWidgets/NavBar";
import SelectAlbum from "../wedgets/uploadScreeWidgets/SelectAlbum";
import AlbumList from "../wedgets/uploadScreeWidgets/AlbumList";

const UploadScreen = () => {
  const [images, setImages] = useState([]);
  const [image, setImage] = useState(null);
  const [isAlbumListOpen, setIsAlbumListOpen] = useState(false);
  const [albums, setAlbums] = useState([]);
  const [album, setAlbum] = useState(null);

  const getAlbums = async () => {
    let { status } = await MediaLibrary.requestPermissionsAsync();

    if (status == "granted") {
      MediaLibrary.getAlbumsAsync().then((data) => {
        setAlbums(data);
        setAlbum(data[10]);
      });
    }
  };

  const getAssets = async () => {
    let { status } = await MediaLibrary.requestPermissionsAsync();

    if (status == "granted") {
      MediaLibrary.getAssetsAsync({ first: 4 })
        .then(async (data) => {
          let media = await data.assets.map((image) => {
            return {
              url: image.uri,
              id: image.id,
              isSelected: true,
            };
          });

          setImages(media);
          setImage(media[0]);
        })
        .catch((err) => console.log(err));
    }
  };

  useEffect(() => {
    getAlbums();
    getAssets();
  }, []);

  const getSeletedImage = (image, index) => {
    setImage(image);
    let oldImages = images.map((image) => ({ ...image, isSelected: false }));
    oldImages[index].isSelected = true;
    setImages(oldImages);
  };

  const changeAlbum = (album) => {
    setAlbum(album);
    setIsAlbumListOpen(false);
    getAssets();
  };

  return (
    <View style={styles.container}>
      <NavBar />

      <Devider top={5} width={0.5} />

      <PickedImage image={image} />

      <SelectAlbum album={album} setIsAlbumListOpen={setIsAlbumListOpen} />

      <ImageGrid images={images} getSeletedImage={getSeletedImage} />

      <AlbumList
        albums={albums}
        isAlbumListOpen={isAlbumListOpen}
        setIsAlbumListOpen={setIsAlbumListOpen}
        changeAlbum={changeAlbum}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    marginTop: StatusBar.currentHeight,
  },
  imageContainer: {
    height: 400,
  },
});
export default UploadScreen;

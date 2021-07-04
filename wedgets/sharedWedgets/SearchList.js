import React from "react";
import { StyleSheet, FlatList } from "react-native";
import User from "./User";

import img1 from "../../assets/images/profile_1.jpg";
import img2 from "../../assets/images/profile_2.jpg";
import img3 from "../../assets/images/profile_1.jpg";
import img4 from "../../assets/images/profile_2.jpg";

const SearchList = () => {
  let data = [
    { img: img1, id: 1 },
    { img: img2, id: 2 },
    { img: img3, id: 3 },
    { img: img4, id: 4 },
    { img: img1, id: 5 },
    { img: img2, id: 6 },
    { img: img3, id: 7 },
    { img: img4, id: 8 },
    { img: img1, id: 9 },
    { img: img2, id: 10 },
  ];

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <User image={item.img} />}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({});

export default SearchList;

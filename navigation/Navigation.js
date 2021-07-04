import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";
import UploadScreen from "../screens/UploadScreen";
import ActivityScreen from "../screens/ActivityScreen";
import ProfileScreen from "../screens/ProfileScreen";

const Tab = createMaterialBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        activeColor="white"
        inactiveColor="#3e2465"
        barStyle={{ backgroundColor: "black" }}
        labeled={false}
      >
        <Tab.Screen
          name="one"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="home"
                size={26}
                color={focused ? "white" : "grey"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="two"
          component={ExploreScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="search"
                size={26}
                color={focused ? "white" : "grey"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="tree"
          component={UploadScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="add"
                size={26}
                color={focused ? "white" : "grey"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="four"
          component={ActivityScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name="heart-outline"
                size={26}
                color={focused ? "white" : "grey"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="five"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialIcons
                name="perm-identity"
                size={26}
                color={focused ? "white" : "grey"}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

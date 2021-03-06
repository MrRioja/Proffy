import React from "react";
import Favorites from "../pages/Favorites";
import { Ionicons } from "@expo/vector-icons";
import TeacherList from "../pages/TeacherList";
import { Archivo_700Bold } from "@expo-google-fonts/archivo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          height: 20,
          width: 20,
        },
        labelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#FAFAFC",
        activeBackgroundColor: "#EBEBF5",
        inactiveTintColor: "#C1BCCC",
        activeTintColor: "#32264D",
      }}
    >
      <Screen
        options={{
          tabBarLabel: "Proffys",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-easel"
                size={size}
                color={focused ? "#8257E5" : color}
              />
            );
          },
        }}
        name="TeacherList"
        component={TeacherList}
      ></Screen>

      <Screen
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size, focused }) => {
            return (
              <Ionicons
                name="ios-heart"
                size={size}
                color={focused ? "#8257E5" : color}
              />
            );
          },
        }}
        name="Favorites"
        component={Favorites}
      ></Screen>
    </Navigator>
  );
}

export default StudyTabs;

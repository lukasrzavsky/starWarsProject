import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootBottomNavigationParamList } from "./types";
import { PeopleScreen } from "../screens/peopleScreen";
import { SpaceshipsScreen } from "../screens/spaceshipsScreen";
import { PlanetsScreen } from "../screens/planetsScreen";
import { BottomTabBarNavigation } from "../components/bottomTabBarNavigation";

const { Navigator, Screen } =
  createBottomTabNavigator<RootBottomNavigationParamList>();

export const RootNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "black",
          borderBottomWidth: 2,
          borderColor: "white",
        },
        headerTintColor: "white",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
      tabBar={(props) => <BottomTabBarNavigation {...props} />}
    >
      <Screen
        component={PeopleScreen}
        name="People"
        options={{
          title: "People",
        }}
      />
      <Screen
        component={SpaceshipsScreen}
        name="Spaceships"
        options={{
          title: "Spaceships",
        }}
      />
      <Screen
        component={PlanetsScreen}
        name="Planets"
        options={{
          title: "Planets",
        }}
      />
    </Navigator>
  );
};

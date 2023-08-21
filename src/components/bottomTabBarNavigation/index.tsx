import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { SafeAreaView } from "react-native";
import { NavigationWrapper, TouchableOpacityWrapper } from "./styles";
import { Icon, IconType } from "../icon";

export const BottomTabBarNavigation = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => (
  <SafeAreaView>
    <NavigationWrapper>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const tintColor = isFocused ? "blue" : "white";

        return (
          <TouchableOpacityWrapper
            key={options.title}
            onPress={onPress}
            isFocused={isFocused}
          >
            <Icon iconName={route.name as IconType} tintColor={tintColor} />
          </TouchableOpacityWrapper>
        );
      })}
    </NavigationWrapper>
  </SafeAreaView>
);

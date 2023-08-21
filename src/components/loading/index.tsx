import { ActivityIndicator } from "react-native";
import { Center } from "../common/global.styles";

export const Loading = () => (
  <Center>
    <ActivityIndicator size={60} />
  </Center>
);

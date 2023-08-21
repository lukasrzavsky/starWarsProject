import styled from "styled-components/native";

export const NavigationWrapper = styled.View`
  flex-direction: row;
`;

export const TouchableOpacityWrapper = styled.TouchableOpacity<{
  isFocused: boolean;
}>`
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: black;
  border-top-width: 2px;
  border-color: ${({ isFocused }) => (isFocused ? "blue" : "white")};
`;

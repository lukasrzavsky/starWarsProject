import styled from "styled-components/native";

export const Wrapper = styled.View`
  height: 40px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 35px;
  background-color: black;
`;

export const ButtonText = styled.Text<{ disabled: boolean }>`
  color: ${({ disabled }) => (disabled ? "grey" : "white")};
  font-size: 16px;
  font-weight: 700;
`;

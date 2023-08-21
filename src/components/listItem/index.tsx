import { Text } from "react-native";
import { DetailWrapper, Label, Name, Wrapper } from "./styles";

type Props = {
  name: string;
  label?: string;
  detail: string;
};

export const ListItem = ({ name, label, detail }: Props) => (
  <Wrapper>
    <Name>{name}</Name>
    <DetailWrapper>
      {label && <Label>{label}</Label>}
      <Text>{detail}</Text>
    </DetailWrapper>
  </Wrapper>
);

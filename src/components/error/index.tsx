import { Center } from "../common/global.styles";
import { ErrorText } from "./styles";

type Props = {
  error: string;
};

export const Error = ({ error }: Props) => (
  <Center>
    <ErrorText>{error}</ErrorText>
  </Center>
);

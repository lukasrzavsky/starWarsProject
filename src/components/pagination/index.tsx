import { TouchableOpacity } from "react-native";
import { ButtonText, Wrapper } from "./styles";

type Props = {
  isFirstPage: boolean;
  isLastPage: boolean;
  onPreviousPress: () => void;
  onNextPress: () => void;
};

export const Pagination = ({
  isFirstPage,
  isLastPage,
  onPreviousPress,
  onNextPress,
}: Props) => (
  <Wrapper>
    <TouchableOpacity onPress={onPreviousPress} disabled={isFirstPage}>
      <ButtonText disabled={isFirstPage}>Previous</ButtonText>
    </TouchableOpacity>
    <TouchableOpacity onPress={onNextPress} disabled={isLastPage}>
      <ButtonText disabled={isLastPage}>Next</ButtonText>
    </TouchableOpacity>
  </Wrapper>
);

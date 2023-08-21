import { PeopleIcon } from "../../assets/icons/PeopleIcon";
import { PlanetIcon } from "../../assets/icons/PlanetIcon";
import SpaceshipIcon from "../../assets/icons/SpaceshipIcon";

export type IconProps = {
  tintColor?: string;
  height?: number;
  width?: number;
};

export type IconType = "People" | "Planets" | "Spaceships";

type Props = IconProps & {
  iconName: IconType;
};

export const Icon = ({ iconName, ...rest }: Props) => {
  switch (iconName) {
    case "People":
      return <PeopleIcon {...rest} />;
    case "Planets":
      return <PlanetIcon {...rest} />;
    case "Spaceships":
      return <SpaceshipIcon {...rest} />;

    default:
      return null;
  }
};

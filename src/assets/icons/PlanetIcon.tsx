import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../components/icon";

export const PlanetIcon = ({ height, width, tintColor }: IconProps) => {
  const iconWidth = width ?? 24;
  const iconHeight = height ?? 24;

  const stroke = tintColor ?? "#000000";

  return (
    <Svg
      width={iconWidth}
      height={iconHeight}
      viewBox={`0 0 ${iconWidth} ${iconHeight}`}
      fill="none"
    >
      <Path
        d="M8 5.07026C9.17669 4.38958 10.5429 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 10.5429 4.38958 9.17669 5.07026 8"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path
        d="M13.8309 14.9264C8.40242 17.8185 3.18203 18.8529 2.17085 17.2367C1.63758 16.3844 2.38148 14.9651 4 13.3897M17.8486 6.19085C19.8605 5.81929 21.3391 5.98001 21.8291 6.76327C22.6266 8.03781 20.5682 10.5801 17 13.0164"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

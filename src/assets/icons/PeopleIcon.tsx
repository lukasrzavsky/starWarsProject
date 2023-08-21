import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "../../components/icon";

export const PeopleIcon = ({ width, height, tintColor }: IconProps) => {
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
        d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

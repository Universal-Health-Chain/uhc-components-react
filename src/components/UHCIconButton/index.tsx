import React from "react";
import { SContainer, SButton, SSpan } from "./style";
import { ArrowRightIcon } from "./icons";

type IconType = "arrow-right";
interface IProps {
  text?: string;
  icon: IconType;
  onPress: (event: React.MouseEvent) => void;
}

const getIcon = (name: IconType) => {
  switch (name) {
    case "arrow-right":
      return ArrowRightIcon;
    default:
      throw new Error("An icon with this name doesn't exist");
  }
};
const UHCIconButton: React.FunctionComponent<IProps> = ({
  text,
  icon,
  onPress,
}) => {
  const Icon = getIcon(icon);
  if (text) {
    return (
      <SButton onClick={onPress}>
        <SSpan>
          <Icon size="small"> </Icon>
          {text}
        </SSpan>
      </SButton>
    );
  } else {
    return (
      <SContainer onClick={onPress}>
        <Icon size="big"></Icon>
      </SContainer>
    );
  }
};

export default UHCIconButton;

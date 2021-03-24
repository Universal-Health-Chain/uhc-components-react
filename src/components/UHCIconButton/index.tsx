import React from "react";
import {
  SContainer,
  SButton,
  SSpan,
  SBadge,
  SIconBadge,
  SInnerContainer,
} from "./style";
import { ArrowRightIcon, ArrowLeftIcon, SortIcon } from "../icons";

type IconType = "arrow-right" | "arrow-left" | "messages" | "sort";
interface IProps {
  text?: string;
  icon?: IconType;
  buttonType?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  badgeNumber?: number;
  onPress: (event: React.MouseEvent) => void;
}

const getIcon = (name: IconType) => {
  switch (name) {
    case "arrow-right":
      return ArrowRightIcon;
    case "arrow-left":
      return ArrowLeftIcon;
    case "sort":
      return SortIcon;
    default:
      throw new Error("An icon with this name doesn't exist");
  }
};
const UHCIconButton: React.FunctionComponent<IProps> = ({
  text,
  icon,
  buttonType,
  disabled,
  onPress,
  badgeNumber,
}) => {
  const Icon = icon ? getIcon(icon) : getIcon("arrow-right");
  if (text) {
    return (
      <SButton onClick={onPress} disabled={disabled} buttonType={buttonType}>
        <SSpan buttonType={buttonType} disabled={disabled}>
          <Icon
            size="small"
            color={(() => {
              if (disabled) return "grey";

              switch (buttonType) {
                case "secondary":
                  return "black";
                case "primary":
                case "danger":
                default:
                  return "white";
              }
            })()}
          />
          {text}
          {!!badgeNumber && (
            <SBadge
              buttonType={buttonType}
              disabled={disabled}
              badgeNumber={badgeNumber}
            >
              {badgeNumber > 99 ? "99+" : badgeNumber}
            </SBadge>
          )}
        </SSpan>
      </SButton>
    );
  } else {
    return (
      <SContainer buttonType={buttonType} disabled={disabled} onClick={onPress}>
        <SInnerContainer buttonType={buttonType} disabled={disabled}>
          <Icon
            size="big"
            color={(() => {
              if (disabled) return "grey";

              switch (buttonType) {
                case "secondary":
                  return "black";
                case "primary":
                case "danger":
                default:
                  return "white";
              }
            })()}
          />
        </SInnerContainer>
        {!!badgeNumber && (
          <SIconBadge
            buttonType={buttonType}
            disabled={disabled}
            badgeNumber={badgeNumber}
          >
            {badgeNumber > 99 ? "99+" : badgeNumber}
          </SIconBadge>
        )}
      </SContainer>
    );
  }
};

UHCIconButton.defaultProps = {
  icon: "arrow-right",
  buttonType: "primary",
  disabled: false,
  badgeNumber: 0,
};

export default UHCIconButton;

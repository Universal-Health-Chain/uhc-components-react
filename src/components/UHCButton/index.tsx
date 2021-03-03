import React from "react";
import { SButton, SSpan, SBadge } from "./style";

interface IProps {
  text: string;
  buttonType?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  badgeNumber?: number;
  onPress: (event: React.MouseEvent) => void;
}

const UHCButton: React.FunctionComponent<IProps> = ({
  text,
  buttonType,
  disabled,
  onPress,
  badgeNumber
}) => {
  return (
    <SButton buttonType={buttonType} onClick={onPress} disabled={disabled}>
      <SSpan buttonType={buttonType} disabled={disabled}>
        {" "}
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
};

UHCButton.defaultProps = {
  buttonType: "primary",
  disabled: false,
  badgeNumber: 0
};

export default UHCButton;

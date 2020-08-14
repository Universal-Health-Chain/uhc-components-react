import React from "react";
import { SButton, SSpan } from "./style";

interface IProps {
  text: string;
  buttonType?: "primary" | "secondary" | "danger";
  size?: "big" | "small";
  disabled?: boolean;
  onPress: (event: React.MouseEvent) => void;
}
const UHCButton: React.FunctionComponent<IProps> = ({
  text,
  buttonType,
  size,
  disabled,
  onPress,
}) => {
  return (
    <SButton
      buttonType={buttonType}
      onClick={onPress}
      size={size}
      disabled={disabled}
    >
      <SSpan buttonType={buttonType} disabled={disabled}>
        {" "}
        {text}
      </SSpan>
    </SButton>
  );
};

UHCButton.defaultProps = {
  buttonType: "primary",
  size: "big",
  disabled: false,
};

export default UHCButton;

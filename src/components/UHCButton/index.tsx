import React from "react";
import { SButton, SSpan } from "./style";

interface IProps {
  text: string;
  buttonType?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  onPress: (event: React.MouseEvent) => void;
}

const UHCButton: React.FunctionComponent<IProps> = ({
  text,
  buttonType,
  disabled,
  onPress,
}) => {
  return (
    <SButton
      buttonType={buttonType}
      onClick={onPress}
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
  disabled: false,
};

export default UHCButton;

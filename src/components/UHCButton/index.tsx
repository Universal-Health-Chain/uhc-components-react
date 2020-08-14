import React from "react";
import { SButton, SSpan } from "./style";

interface IProps {
  text: string;
  type?: "primary" | "secondary";
  onClick: (event: React.MouseEvent) => void;
}
const UHCButton: React.FunctionComponent<IProps> = ({
  text,
  type,
  onClick,
}) => {
  return (
    <SButton onClick={onClick}>
      <SSpan type={type}> {text}</SSpan>
    </SButton>
  );
};

UHCButton.defaultProps = {
  type: "primary",
};

export default UHCButton;

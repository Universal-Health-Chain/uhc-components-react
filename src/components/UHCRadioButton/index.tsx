import React from "react";
import theme from "uhc-themes";
import { SRadioButton } from "./style";
interface IProps {
  isSelected?: boolean;
  onClick?: () => void;
  selectedColor?: string;
  containerColorUnselected?: string;
  containerColorSelected?: string;
}

const UHCRadioButton: React.FunctionComponent<IProps> = ({
  isSelected,
  onClick,
  selectedColor,
  containerColorSelected,
  containerColorUnselected,
}) => {
  return (
    <SRadioButton
      isSelected={isSelected}
      selectedColor={selectedColor}
      containerColorSelected={containerColorSelected}
      containerColorUnselected={containerColorUnselected}
      onClick={onClick}
    >
      <div></div>
    </SRadioButton>
  );
};

UHCRadioButton.defaultProps = {
  isSelected: false,
  selectedColor: theme.color.tertiary,
  containerColorUnselected: theme.color.gray,
  containerColorSelected: theme.color.tertiary,
};

export default UHCRadioButton;

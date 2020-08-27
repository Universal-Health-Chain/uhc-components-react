import React from "react";
import theme from "uhc-themes";
import { SRadioButton } from "./style";
interface IProps {
  isSelected?: boolean;
  selectedColor: string;
  containerColorUnselected: string;
  containerColorSelected: string;
}

const UHCRadioButton: React.FunctionComponent<IProps> = ({
  isSelected,
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

import React from "react";
import { SSelectItem } from "./UHCSelectItemStyle";

export interface ISelectItemProps {
  label: string;
  value: string;
  returnValue: (text: string, value: string) => void;
}

const UHCSelectItem: React.FunctionComponent<ISelectItemProps> = ({
  label,
  value,
  returnValue,
}) => {
  return (
    <SSelectItem onClick={() => returnValue(label, value)}>{label}</SSelectItem>
  );
};

export default UHCSelectItem;

import React from "react";
import { SSelectItem } from "./UHCSelectItemStyle";

export interface ISelectItemProps {
  text: any;
  value: string;
  returnValue: (text: string, value: string) => void;
}

const UHCSelectItem: React.FunctionComponent<ISelectItemProps> = ({
  text,
  value,
  returnValue,
}) => {
  return (
    <SSelectItem onClick={() => returnValue(text, value)}> {text}</SSelectItem>
  );
};

export default UHCSelectItem;

import React from "react";
import { SSelectItem } from "./style";

export interface ISelectItemProps {
  key: any;
  value: string;
  returnValue: (key: number, value: string) => void;
}

const UHCSelectItem: React.FunctionComponent<ISelectItemProps> = ({
  key,
  value,
  returnValue,
}) => {
  return <SSelectItem onClick={() => returnValue(key, value)}> {value}</SSelectItem>;
};

export default UHCSelectItem;

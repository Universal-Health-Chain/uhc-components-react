import React, { useState, useEffect } from "react";
import {
  SExternalContainer,
  SInternalContainer,
  SSelect,
  SText,
  SIcon,
  SLabel,
  SOptionsList,
} from "./style";

import { SmallArrowDownIcon } from "../icons";
import UHCSelectItem from "./UHCSelectItem";

export interface ISelectItem {
  label: string;
  value: string;
}

interface IProps {
  label: string;
  data: ISelectItem[];
  defaultValue?: ISelectItem;
  getValue?: (value: string) => void;
}

const UHCSelect: React.FunctionComponent<IProps> = ({
  label,
  defaultValue,
  data,
  getValue,
}) => {
  const [selectedValue, setSelectedValue] = useState<ISelectItem>(
    defaultValue ? defaultValue : { label: "", value: "" }
  );

  useEffect(() => {
    if (getValue) getValue(selectedValue.value);
  }, [selectedValue]);

  const [isListVisible, setIsListVisible] = useState<boolean>(false);

  return (
    <div style={{ width: "100%", position: "relative"}}>
      <SExternalContainer>
        <SInternalContainer onClick={() => setIsListVisible(!isListVisible)}>
          <SLabel hasSelectedValue={selectedValue.value !== ""}>{label}</SLabel>
          <SText> {selectedValue.label}</SText>
          <SIcon>
            <SmallArrowDownIcon size={"small"} />
          </SIcon>
          <SSelect></SSelect>
        </SInternalContainer>
      </SExternalContainer>

      {isListVisible && (
        <SOptionsList onClick={() => setIsListVisible(false)}>
          {data.map((item: ISelectItem) => {
            return (
              <UHCSelectItem
                label={item.label}
                value={item.value}
                returnValue={(label, value) =>
                  setSelectedValue({ label, value })
                }
              ></UHCSelectItem>
            );
          })}
        </SOptionsList>
      )}
    </div>
  );
};

export default UHCSelect;

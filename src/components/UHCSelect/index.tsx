import React, { useState, useEffect } from "react";
import {
  SWrapper,
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

const DEFAULT_EMPTY_OPTION = { label: "", value: "" };

const UHCSelect: React.FunctionComponent<IProps> = ({
  label,
  defaultValue,
  data,
  getValue,
}) => {
  const [selectedValue, setSelectedValue] = useState<ISelectItem>(
    defaultValue ? defaultValue : DEFAULT_EMPTY_OPTION
  );

  useEffect(() => {
    if (getValue) getValue(selectedValue.value);
  }, [selectedValue]);

  const [isListVisible, setIsListVisible] = useState<boolean>(false);

  return (
    <SWrapper>
      <SExternalContainer onClick={() => setIsListVisible(!isListVisible)}>
        <SLabel hasSelectedValue={selectedValue.value !== ""}>{label}</SLabel>
        <SText> {selectedValue.label}</SText>
        <SInternalContainer disabled />
        {selectedValue === DEFAULT_EMPTY_OPTION && (
          <SIcon>
            <SmallArrowDownIcon size={"small"} />
          </SIcon>
        )}
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
    </SWrapper>
  );
};

export default UHCSelect;

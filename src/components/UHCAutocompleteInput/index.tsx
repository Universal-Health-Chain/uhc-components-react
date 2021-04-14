import React, { useState, useEffect } from "react";
import {
  SWrapper,
  SExternalContainer,
  SInput,
  SIcon,
  SLabel,
  SOptionsList,
} from "./style";

import { FindIcon } from "../icons";
import UHCSelectItem from "./UHCSelectItem";

interface ISelectItem {
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

const UHCAutocompleteInput: React.FunctionComponent<IProps> = ({
  label,
  defaultValue,
  data,
  getValue,
}) => {
  const [selectedValue, setSelectedValue] = useState<ISelectItem>(
    defaultValue ? defaultValue : DEFAULT_EMPTY_OPTION
  );
  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [filtareableData, setFiltareableData] = useState<ISelectItem[]>(data);
  useEffect(() => {
    if (getValue) getValue(selectedValue.value);
  }, [selectedValue]);

  useEffect(() => {
    setValue(selectedValue.label);
  }, [selectedValue]);

  useEffect(() => {
    const filteredData = data.filter((item) => item.label.includes(value));
    setFiltareableData(filteredData);
  }, [value]);

  return (
    <SWrapper>
      <SExternalContainer onClick={() => setIsListVisible(!isListVisible)}>
        <SLabel isFocused={isFocused || value !== ""}>{label}</SLabel>
        <SInput
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(event) => setValue(event.target.value)}
        ></SInput>
        {selectedValue === DEFAULT_EMPTY_OPTION && (
          <SIcon >
            <FindIcon size={"small"} />
          </SIcon>
        )}
      </SExternalContainer>

      {isListVisible && (
        <SOptionsList onClick={() => setIsListVisible(false)}>
          {filtareableData.map((item: ISelectItem) => {
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

export default UHCAutocompleteInput;

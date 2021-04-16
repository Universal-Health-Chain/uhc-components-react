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
import UHCSelectItem from "../UHCSelect/UHCSelectItem";

interface ISelectItem {
  label: string;
  value: string;
}

interface IProps {
  label: string;
  data: ISelectItem[];
  defaultValue?: ISelectItem;
  getValue?: (value: string) => void;
  disabled?: boolean;
}

const DEFAULT_EMPTY_OPTION = { label: "", value: "" };

const UHCAutocompleteInput: React.FunctionComponent<IProps> = ({
  label,
  defaultValue,
  data,
  getValue,
  disabled,
}) => {
  const [selectedValue, setSelectedValue] = useState<ISelectItem>(
    defaultValue ? defaultValue : DEFAULT_EMPTY_OPTION
  );
  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [filtareableData, setFiltareableData] = useState<ISelectItem[]>(data);

  /**
   * º Verify the item label and the input's 
   * º value existance before
   * º filtering.
   */
  const assertAndfilterItem = (item: ISelectItem, value: string): boolean => {
    if (item && item.label && value) {
      return item.label.toLowerCase().includes(value.toLowerCase());
    }

    return false;
  };

  useEffect(() => {
    if (getValue) getValue(selectedValue.value);
  }, [selectedValue]);

  useEffect(() => {
    setValue(selectedValue.label);
  }, [selectedValue]);

  useEffect(() => {
    const filteredData = data.filter((item: ISelectItem) =>
      assertAndfilterItem(item, value)
    );
    setFiltareableData(filteredData);
  }, [value]);

  return (
    <SWrapper>
      <SExternalContainer onClick={() => setIsListVisible(!isListVisible)}>
        <SLabel isFocused={isFocused || value !== ""} disabled={disabled}>
          {label}
        </SLabel>
        <SInput
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(event) => setValue(event.target.value)}
          disabled={disabled}
        ></SInput>
        {selectedValue === DEFAULT_EMPTY_OPTION && (
          <SIcon>
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

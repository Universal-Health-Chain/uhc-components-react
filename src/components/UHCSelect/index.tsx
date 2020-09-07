import React, { useState, useEffect } from "react";
import {
  SExternalContainer,
  SInternalContainer,
  SSelect,
  SText,
  SIcon,
  SLabel,
} from "./style";

import { SmallArrowDownIcon } from "../UHCIconButton/icons";
import UHCSelectItem from "./UHCSelectItem";

interface ISelectItem {
  text: string;
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
    defaultValue ? defaultValue : { text: "", value: "" }
  );

  useEffect(() => {
    if (getValue) getValue(selectedValue.value);
  }, [selectedValue]);

  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  return (
    <>
      <SLabel> {label}</SLabel>
      <SExternalContainer>
        <SInternalContainer onClick={() => setIsListVisible(!isListVisible)}>
          <SText> {selectedValue.text}</SText>
          <SIcon>
            <SmallArrowDownIcon size={"small"} />
          </SIcon>
          <SSelect visible={isListVisible}>
            {data.map((item: ISelectItem) => {
              return (
                <UHCSelectItem
                  text={item.text}
                  value={item.value}
                  returnValue={(text, value) =>
                    setSelectedValue({ text, value })
                  }
                ></UHCSelectItem>
              );
            })}
          </SSelect>
        </SInternalContainer>
      </SExternalContainer>
    </>
  );
};

export default UHCSelect;

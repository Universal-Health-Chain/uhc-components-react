import React, { useState, useEffect } from "react";
import {
  SExternalContainer,
  SInternalContainer,
  SSelect,
  SText,
  SIcon,
} from "./style";

import { SmallArrowDownIcon } from "../UHCIconButton/icons";
import { ISelectItemProps } from "../UHCSelectItem";

interface IProps {
  defaultValue?: string;
  children:
    | React.ReactElement<ISelectItemProps>
    | React.ReactElement<ISelectItemProps>[];
  getValue?: (value: string) => void;
}

interface ISelectItem {
  key: number;
  value: string;
}

const UHCSelect: React.FunctionComponent<IProps> = ({
  defaultValue,
  children,
  getValue,
}) => {
  const [selectedValue, setSelectedValue] = useState<ISelectItem>({
    key: 0,
    value: defaultValue ? defaultValue : "",
  });

  useEffect(() => {
    if (getValue) getValue(selectedValue.value);
  }, [selectedValue]);

  const [isListVisible, setIsListVisible] = useState<boolean>(false);
  return (
    <SExternalContainer>
      <SInternalContainer onClick={() => setIsListVisible(!isListVisible)}>
        <SText> {selectedValue.value}</SText>
        <SIcon>
          <SmallArrowDownIcon size={"small"} />
        </SIcon>
        <SSelect visible={isListVisible}>
          {" "}
          {React.Children.map(
            children,
            (child: React.ReactElement<ISelectItemProps>) =>
              React.cloneElement(child, {
                key: child.props.key,
                value: child.props.value,
                returnValue: (key: number, value: string) =>
                  setSelectedValue({ key, value }),
              })
          )}
        </SSelect>
      </SInternalContainer>
    </SExternalContainer>
  );
};

UHCSelect.defaultProps = {
  defaultValue: "Seleccione una opción",
};

export default UHCSelect;

import React, { useState, useEffect } from "react";
import { SContainer, SInput } from "./style";

interface IProps {
  placeholder: string;
  getValue: (value: string) => void;
}

const UHCInput: React.FunctionComponent<IProps> = ({
  placeholder,
  getValue,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    getValue(value);
  }, [value]);

  return (
    <SContainer isFocused={isFocused}>
      <SInput
        placeholder={placeholder}
        value={value}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={(event) => setValue(event.target.value)}
      ></SInput>
    </SContainer>
  );
};

export default UHCInput;

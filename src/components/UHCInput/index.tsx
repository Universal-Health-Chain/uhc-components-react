import React, { useState, useEffect } from "react";
import { SContainer, SInput, STextArea } from "./style";

interface IProps {
  placeholder: string;
  getValue: (value: string) => void;
  multiline?: boolean;
}

const UHCInput: React.FunctionComponent<IProps> = ({
  placeholder,
  getValue,
  multiline,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    getValue(value);
  }, [value]);

  if (multiline) {
    return (
      <SContainer isFocused={isFocused} multiline={multiline}>
        <STextArea
          placeholder={placeholder}
          value={value}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onChange={(event) => setValue(event.target.value)}
        ></STextArea>
      </SContainer>
    );
  } else {
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
  }
};

UHCInput.defaultProps = {
  multiline: false,
};

export default UHCInput;

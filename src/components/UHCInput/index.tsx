import React, { useState, useEffect } from "react";
import { SContainer, SInput, STextArea, SLabel, SError } from "./style";

interface IProps {
  placeholder: string;
  getValue: (value: string) => void;
  multiline?: boolean;
  error?: string;
  format?: string;
}

const UHCInput: React.FunctionComponent<IProps> = ({
  placeholder,
  getValue,
  multiline,
  error,
  format,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    getValue(value);
  }, [value]);

  if (multiline) {
    return (
      <>
        <SContainer isFocused={isFocused} multiline={multiline} error={error}>
          <STextArea
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(event) => setValue(event.target.value)}
          ></STextArea>
          <SLabel isFocused={isFocused}>{placeholder}</SLabel>
        </SContainer>
        {error && <SError>{error}</SError>}
      </>
    );
  } else {
    return (
      <>
        <SContainer isFocused={isFocused} error={error}>
          <SInput
            type={format}
            value={value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(event) => setValue(event.target.value)}
          ></SInput>
          <SLabel isFocused={isFocused}>{placeholder}</SLabel>
        </SContainer>
        {error && <SError>{error}</SError>}
      </>
    );
  }
};

UHCInput.defaultProps = {
  multiline: false,
  error: undefined,
  format: "text",
};

export default UHCInput;

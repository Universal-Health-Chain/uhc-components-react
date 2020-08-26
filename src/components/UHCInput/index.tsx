import React, { useState, useEffect } from "react";
import moment from "moment";

import {
  SContainer,
  SInput,
  STextArea,
  SDatePicker,
  SLabel,
  SError,
} from "./style";

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
    if (format === "date") {
      return (
        <>
          <SContainer isFocused={isFocused} error={error}>
            <SDatePicker
              onKeyDown={(event) => {
                console.log()
                if (event.keyCode === 8) {
                  setValue("");
                }
              }}
              customInput={
                <div>
                  <SInput
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    value={value}
                  />
                  <SLabel isFocused={isFocused}>{placeholder}</SLabel>
                </div>
              }
              onChange={(date) => {
                setValue(moment(date).format("DD/MM/YYYY"));
              }}
            ></SDatePicker>
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
  }
};

UHCInput.defaultProps = {
  multiline: false,
  error: undefined,
  format: "text",
};

export default UHCInput;

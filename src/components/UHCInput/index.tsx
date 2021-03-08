import React, { useState, useEffect } from "react";
import moment from "moment";

import {
  SContainer,
  SInput,
  STextArea,
  SDatePicker,
  SLabel,
  SError,
  SDateContainer,
} from "./style";

interface IProps {
  placeholder: string;
  getValue: (value: string) => void;
  multiline?: boolean;
  error?: string;
  format?: string;
  name?: string;
  defaultValue?: string;
}

const UHCInput: React.FunctionComponent<IProps> = ({
  placeholder,
  getValue,
  multiline,
  error,
  format,
  name,
  defaultValue,
}) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

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
            name={name}
          ></STextArea>
          <SLabel isFocused={isFocused} value={value}>
            {placeholder}
          </SLabel>
        </SContainer>
        {error && <SError>{error}</SError>}
      </>
    );
  } else {
    if (format === "date") {
      return (
        <>
          <SDateContainer isFocused={isFocused} error={error}>
            <SDatePicker
              onKeyDown={(event) => {
                console.log();
                if (event.keyCode === 8) {
                  setValue("");
                }
              }}
              customInput={
                <>
                  <SContainer isFocused={isFocused} error={error}>
                    <SLabel isFocused={isFocused} value={value}>
                      {placeholder}
                    </SLabel>
                    <SInput
                      type={format}
                      value={value}
                      onFocus={() => setIsFocused(true)}
                      onBlur={() => setIsFocused(false)}
                      onChange={(event) => setValue(event.target.value)}
                      name={name}
                    ></SInput>
                  </SContainer>
                  {error && <SError>{error}</SError>}
                </>
              }
              onChange={(date) => {
                setValue(moment(date?.toString()).format("DD/MM/YYYY"));
              }}
            ></SDatePicker>
          </SDateContainer>
          {error && <SError>{error}</SError>}
        </>
      );
    } else {
      return (
        <>
          <SContainer isFocused={isFocused} error={error}>
            <SLabel isFocused={isFocused} value={value}>
              {placeholder}
            </SLabel>
            <SInput
              type={format}
              value={value}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={(event) => setValue(event.target.value)}
              name={name}
            ></SInput>
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
  defaultValue: undefined,
};

export default UHCInput;

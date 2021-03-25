// React
import React, { useState, useEffect } from "react";

// Styles
import {
  SContainer,
  SInput,
  STextArea,
  SDatePicker,
  SLabel,
  SError,
  SDateContainer,
  SIcon,
} from "./style";

// Components
import { ShowIcon, HideIcon } from "../icons";

// External utils
import moment from "moment";

// Types
type InputTypes =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

interface IProps {
  placeholder: string;
  getValue: (value: string) => void;
  multiline?: boolean;
  error?: string;
  format?: InputTypes;
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
  // Variables
  const [value, setValue] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  // Life cycles

  /**
   * Stores the default value from props
   * to state value.
   */
  useEffect(() => {
    if (defaultValue) {
      setValue(defaultValue);
    }
  }, [defaultValue]);

  /**
   * Returns the input's value on change.
   */
  useEffect(() => {
    getValue(value);
  }, [value]);

  // Functions

  /**
   * Automatically toggles input type password
   * to text and vice versa
   */
  const togglePasswordVisibility = React.useCallback(
    () => setIsPasswordVisible((state: boolean) => !state),
    [setIsPasswordVisible]
  );

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
    } else if (format === "password") {
      return (
        <>
          <SContainer isFocused={isFocused} error={error}>
            <SLabel isFocused={isFocused} value={value}>
              {placeholder}
            </SLabel>
            <SInput
              type={isPasswordVisible ? "text" : "password"}
              value={value}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              onChange={(event) => setValue(event.target.value)}
              name={name}
            ></SInput>
            <SIcon onClick={togglePasswordVisibility}>
              {isPasswordVisible ? (
                <ShowIcon size={"small"} />
              ) : (
                <HideIcon size={"small"} />
              )}
            </SIcon>
          </SContainer>
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

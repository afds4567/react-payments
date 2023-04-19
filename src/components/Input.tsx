import { ChangeEvent } from "react";
import styled from "styled-components";
import { InputTitle } from "./InputField";

export interface InputProps {
  id?: InputTitle;
  type: string;
  placeholder?: string;
  maxLength?: number;
  onInput?: (event: ChangeEvent<HTMLInputElement>) => void;
  textAlign?: string;
  isNumber?: boolean;
}

const StyledInput = styled.input<{ textAlign?: string }>`
  border: none;
  background-color: #ecebf1;
  font-size: 18px;
  font-weight: 500;
  width: 100%;
  text-align: ${(props) => props.textAlign};
`;

export default function Input({
  textAlign = "baseline",
  isNumber,
  ...rest
}: InputProps) {
  const onInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.currentTarget) return;
    event.currentTarget.value = event.currentTarget.value.replace(
      /[^0-9]/g,
      ""
    );
  };
  const defaultOnInput = (event: ChangeEvent<HTMLInputElement>) => {};
  return (
    <StyledInput
      textAlign={textAlign}
      inputMode={isNumber ? "numeric" : "text"}
      onInput={isNumber ? onInput : defaultOnInput}
      {...rest}
    />
  );
}

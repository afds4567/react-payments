import styled from "styled-components";
import { UseInputProps } from "../../hooks/useInput";
import Input from "../common/Input";

export interface PasswordInputProps {
  firstPassword: UseInputProps;
  secondPassword: UseInputProps;
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 7px;
  align-items: center;
  gap: 7px;
`;

const GrayWrapper = styled.div`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 8px;
  width: 45px;
  height: 45px;
  border-radius: 7px;
  background-color: #ecebf1;
`;

const WhiteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 7px;
`;

export default function PasswordInput({
  firstPassword,
  secondPassword,
}: PasswordInputProps) {
  return (
    <Wrapper>
      <GrayWrapper>
        <Input
          isNumber={true}
          maxLength={1}
          id="password"
          required
          type="password"
          textAlign="center"
          {...firstPassword}
        />
      </GrayWrapper>
      <GrayWrapper>
        <Input
          isNumber={true}
          maxLength={1}
          required
          type="password"
          textAlign="center"
          {...secondPassword}
        />
      </GrayWrapper>
      <WhiteWrapper>•</WhiteWrapper>
      <WhiteWrapper>•</WhiteWrapper>
    </Wrapper>
  );
}

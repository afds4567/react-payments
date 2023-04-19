import styled from "styled-components";

const StyledCard = styled.div`
  width: 213px;
  height: 133px;
  background: #333;
  box-shadow: 3px 3px 5px #00000040;
  border-radius: 5px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  justify-content: end;
`;
const StyledTitle = styled.div`
  color: #383838;
  font-size: 12px;
  height: 14px;
  margin-bottom: 22px;
`;
const StyledMagnet = styled.div`
  background: #cbba64;
  position: absolute;
  top: 73px;
  width: 40px;
  height: 26px;
  margin-bottom: 15px;
  border-radius: 4px;
`;
const StyledCardNumber = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;
const StyledCardNumberItem = styled.span`
  width: 34px;
  letter-spacing: 3px;
  &:nth-child(3) {
    font-size: 24px;
    letter-spacing: 2px;
  }
  &:last-child {
    font-size: 24px;
    letter-spacing: 2px;
  }
`;

const StyledOwnerName = styled.span`
  display: inline-block;
  width: 130px;
  color: #fff;
  font-weight: bold;
  overflow-x: hidden;
  word-break: break-all;
  font-size: 14px;
`;
const StyledExpiracy = styled.span`
  color: #fff;
  float: right;
  font-weight: bold;
  font-size: 14px;
`;

export default function Card({ cardNumberSet, owner, expiracy }: any) {
  return (
    <StyledCard>
      <StyledTitle></StyledTitle>
      <StyledMagnet />
      <div>
        <StyledCardNumber>
          {cardNumberSet.map((num: any) => (
            <StyledCardNumberItem>{num}</StyledCardNumberItem>
          ))}
        </StyledCardNumber>
        <StyledOwnerName>{owner}</StyledOwnerName>
        <StyledExpiracy>{expiracy}</StyledExpiracy>
      </div>
    </StyledCard>
  );
}

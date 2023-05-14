import styled from "styled-components";
import CardLogo from "./Button/CardLogo";
import { Modal } from "eykmodal";

const Wrapper = styled.div`
  align-items: center;
  background: #fff;
  box-sizing: border-box;
  column-gap: 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: calc(757px / 3);
  justify-content: center;
  padding: 30px;
  top: calc(757px / 3 * 2);
  width: 400px;
`;
const COMPANY_LIST = [
  "BC",
  "HYUNDAI",
  "HANA",
  "KAKAO",
  "KOOKMIN",
  "LOTTE",
  "SINHAN",
  "WOORI",
];
export default function CardTypeModal() {
  return (
    <Modal>
      <Wrapper>
        {COMPANY_LIST.map((company) => (
          <CardLogo key={`${company}`} cardName={company} />
        ))}
      </Wrapper>
    </Modal>
  );
}

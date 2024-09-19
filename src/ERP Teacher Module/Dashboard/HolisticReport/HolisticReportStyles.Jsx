import styled from "styled-components";
import background from "../../assets/LoginBackground.png";
import { Card, Row } from "react-bootstrap";
import { FaChevronLeft } from "react-icons/fa";

export const MainBackground = styled.div`
  background: url(${background}) no-repeat center center fixed;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  z-index: 999;
`;

export const MarkCard = styled(Card)`
top: 70px;
  width: 88vw;

  background-color: #ffffff99;
  left: 65px;
  positon: absolute;
  border: none;
`;

export const Atag = styled.a`
  text-decoration: none;
  color: black;
`;
export const BackIcon = styled(FaChevronLeft)`
  width: 13px;
  height: 13px;
  cursor: pointer;
  position: absolute;
  left: 10px;
  top: 10px;
`;
export const Heading = styled.h5`
  width: 300px;
  height: 25px;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  margin-left: 40px;
`;
export const ActionButton = styled.button`
  top: 7px;
  right: 25px;
  position: absolute;
  width: 90px;
  height: 30px;
  border-radius: 15px;
  border: none;
  background-color: #e9d6ff;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
`;
export const Title = styled.p`
  margin-top: -5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;
export const SubTitle = styled.p`
  margin-top: -15px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #00000080;
`;
export const StyledRow = styled(Row)`
  margin-left: 20px;
  margin-top: 7px;
`;
export const ExamSelectBtn = styled.button`
  border-radius: 15px;
  border: 1px solid #00000040;
`;
export const ButtonsDiv = styled.div`
  margin-top: -13px;
  display: flex;
  gap: 20px;
`;
export const RowDiv = styled(Row)`
  margin-left: 20px;
  margin-top: -5px;
`;
export const SubDiv = styled.div`
  margin-top: -13px;
  display: flex;
  gap: 7px;
`;
export const RadioInput1 = styled.label`
  font-size: 13px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
`;
export const RadioInput = styled.input`
  margin-left: 15px;
`;
export const SelectExams = styled.select`
  width: 130px;
  height: 30px;
  padding-left: 15px;
  border-radius: 15px;
  padding-right: 10px;
  border: none;

  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
`;
export const MarkInputDiv = styled.div`
  margin-left: 20px;
  margin-top: 7px;
  display: flex;
  gap: 190px;
`;
export const MarkTitle = styled.p`
  margin-top: -5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #00000080;
`;
export const MarksubTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;

export const MarksDiv = styled.div`
  margin-top: -15px;
  display: flex;
  gap: 15px;
`;
export const IandEMarks = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: 21px;

  color: #000000;
`;
export const StyledTable = styled.table`
  width: 88vw;
  height: 55vh;
  background-color: white;
  border-radius: 10px;
`;
export const THeadRow = styled.tr`
  border-radius: 10px;
`;
export const Tbody = styled.tbody`
  & :hover {
    background-color: #ebdbff;
  }
  align-items: center;
`;
export const Thead = styled.th`
  color: #000000;
  font-size: 15px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;

export const Tdata = styled.td`
  font-size: 13px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  align-items: center;
  justify-content: center;
  color: #5f5f5f;
`;
export const TdataBtn = styled.td`
  text-align: end;
`;

export const EnteringMark = styled.input`
  text-align: center;
  border-radius: 10px;
  height: 25px;
  width: 70px;
  padding-top: 2px;
  border: 1px solid #00000080;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: none;
  }
`;

export const PaginationDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 5px;
`;
export const PageSize = styled.label`
  margin-right: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  color: #000000b2;
`;
export const Pagination = styled.div`
  display: flex;
  gap: 15px;
`;
export const TextPagination = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
`;
export const SaveButton = styled.button`
  width: 100px;
  height: 33px;
  border-radius: 20px;
  color: #ffffff;
  border: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  background: linear-gradient(270deg, #7200ff 18.46%, #b376ff 83.85%);
  margin-left: 10px;
`;
export const ClearButton = styled.button`
  width: 100px;
  height: 33px;
  border-radius: 20px;
  color: black;
  border: none;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  border: 1px solid #7e3bd1;
`;
export const WandIMark = styled.input`
  text-align: center;
  border-radius: 5px;
  height: 25px;
  width: 35px;
  border: 1px solid #00000080;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &:focus {
    outline: none;
  }
`;
export const StyledDiv =styled.div`
width:100%;
height:100%;
`

import styled from "styled-components";
import background from "../../assets/LoginBackground.png";
import { Card } from "react-bootstrap";
import { FaChevronLeft } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

export const MainBackground = styled.div`
  background: url(${background}) no-repeat center center fixed;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  overflow: auto;
`;
export const ProgresReport = styled(Card)`
  height: 87vh;
  width: 90vw;
  position: absolute;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif;
  border-radius: 15px;
  border: 1px solid #7e3bd133;
  background: #f9f9f959;
  top: 70px;
  left: 38px;
  overflow: hidden;
`;
export const ProgresReportHead = styled(Card.Header)``;
export const ReportHeading = styled.h5`
  margin-left: 35px;
  margin-top: 5px;
  font-size: 20px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  color: #000000;
`;
export const TermButtonsDiv = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  left: 40%;
  top: 8px;
`;
export const TermButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #00000040;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  color: #00000080;
`;

export const SelectExam = styled.select`
  position: absolute;
  right: 30px;
  top: 8px;
  width: 140px;
  height: 30px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  color: #00000080;
  padding-left: 10px;
  padding-right: 10px;
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
  left: 15px;
  top: 15px;
`;

export const Search = styled.div`
  position: relative;
  bottom: 10px;
  left: 0px;
`;
export const SearchInput = styled.input`
  position: absolute;
  width: 240px;
  height: 35px;
  border-radius: 15px;
  border: 1px solid #e0e3e9;
  padding: 0 10px;
  padding-left: 25px;
  outline: 0;
  font-size: 11px;
  font-weight: 400;
`;
export const SIcon = styled(CiSearch)`
  position: absolute;
  left: 210px;
  cursor: pointer;
  top: 10px;
`;
export const StyledTable = styled.table`
  // border-collapse: collapse;
  width: 82vw;
  height: 65vh;
  background-color: white;
  margin-top: 35px;
  margin-left: 20px;
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
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
`;
export const THeadRow = styled.tr`
  border-radius: 10px;
`;
export const Trow = styled.tr`
  border-bottom: 1px solid #0000001a;
`;
export const Tdata = styled.td`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
  color: #000000;
`;
export const AddTdata = styled.td`
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #5f5f5f80;
  padding-left: 30px;
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
  gap: 10px;
`;
export const TextPagination = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
`;
export const CardBody = styled(Card.Body)``;
export const TableHeadear = styled.thead`
  height: 35px;
  // background-color: #f9f7ff;
  border-radius: 15px;
`;

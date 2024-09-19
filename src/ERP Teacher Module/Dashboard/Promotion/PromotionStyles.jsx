import styled from "styled-components";
import background from "../../assets/LoginBackground.png";
import { Card } from "react-bootstrap";
import { FaChevronLeft } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BiMessageAltDots } from "react-icons/bi";

export const MainBackground = styled.div`
  background: url(${background}) no-repeat center center fixed;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  overflow: auto;
`;
export const Content = styled.div`
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
export const Cards = styled(Card)`
  background: none;
  border: none;
`;
export const CardHeader = styled(Card.Header)`
  position: relative;
`;
export const Search = styled.div`
  position: relative;
  bottom: 35px;
  left: 200px;
`;
export const Heading = styled.h5`
  width: 300px;
  height: 25px;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  margin-left: 35px;
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
export const BackIcon = styled(FaChevronLeft)`
  width: 13px;
  height: 13px;
  cursor: pointer;
  position: absolute;
  left: 10px;
  top: 17px;
`;
export const Atag = styled.a`
  text-decoration: none;
  color: black;
`;
export const ClassP = styled.p`
  position: absolute;
  top: 10px;
  left: 40%;
  font-size: 15px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
  color: #00000080;
`;
export const CardBody = styled(Card.Body)`
  display: flex;
  gap: 45px;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
export const StyledTable = styled.table`
  border-collapse: collapse;
  width: 88vw;
  height: 74vh;
  background-color: white;
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
export const THeadRow = styled.tr`
  border-radius: 10px;
`;
export const Tdata = styled.td`
  font-size: 13px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #5f5f5f;
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
export const StyledSpan = styled.div`
  text-align: center;
  border-radius: 10px;
  height: 25px;
  width: 60px;
  padding-top: 2px;
 
`;
export const SelectClass = styled.select`
  width: 55px;
  height: 28px;
  background: #f4f4f4;
  border-radius: 10px;
  border: none;
  padding-left: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  color: #5f5f5f;
`;
export const MessageIcon = styled(BiMessageAltDots)`
  width: 17px;
  height: 17px;
`;
export const IconButton = styled.button`
  border: none;
  border-radius: 5px;
`;

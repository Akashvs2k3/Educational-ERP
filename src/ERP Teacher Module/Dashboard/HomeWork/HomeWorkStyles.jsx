import styled from "styled-components";
import background from "../../assets/LoginBackground.png";
import { Card } from "react-bootstrap";
import { FaChevronLeft } from "react-icons/fa";
import { MdTune } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

export const MainBackground = styled.div`
  background: url(${background}) no-repeat center center fixed;
  height: 100vh;
  width: 100vw;
  overflow: auto;
  z-index:999;
`;
export const MarkCard = styled(Card)`
top:70px;
  left: 65px;
  positon: absolute;
  border: none;
  width: 88vw;
  background: none;
`;

export const Atag = styled.a`
  text-decoration: none;
  color: black;
  position: absolute;
  top: 15px;
  left: 15px;
`;
export const BackIcon = styled(FaChevronLeft)`
  width: 13px;
  height: 13px;
  cursor: pointer;
`;
export const Heading = styled.h5`
  width: 300px;
  height: 25px;
  font-size: 18px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  position: absolute;
  top: 13px;
  left: 45px;
`;
export const AddButton = styled.button`
  top: 7px;
  right: 25px;
  position: absolute;
  width: 140px;
  height: 35px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(270deg, #7e3bd1 12.67%, #b375ff 76.71%);
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
`;
export const FilterButon = styled.button`
  top: 7px;
  right: 180px;
  position: absolute;
  width: 100px;
  height: 35px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
`;
export const FIcon = styled(MdTune)`
  margin-right: 5px;
`;
export const CardBody = styled(Card.Body)`
  background-color: white;
  position: absolute;
  top: 60px;
  width: 88vw;
  height: 78vh;
  border-radius: 15px;
`;
export const Search = styled.div`
  position: relative;
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
  border-collapse: collapse;
  width: 86vw;
  height: 68vh;
  position: relative;
  top: 45px;
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
  text-align: left;
`;
export const THeadRow = styled.tr`
  border-radius: 10px;
`;
export const Tdata = styled.td`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
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
export const StyledSpan = styled.div`
  text-align: center;
  border-radius: 10px;
  height: 30px;
  width: 70px;
  padding-top: 5px;
`;
export const SubmitButton = styled.button`
  width: 140px;
  height: 35px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(270deg, #7e3bd1 12.67%, #b375ff 76.71%);
  color: white;
  font-size: 14px;
  font-weight: 400;
  line-height: 27px;
  letter-spacing: 0em;
`;
export const StyledLabel =styled.label`
font-family: 'Poppins', sans-serif;
color: #00000040;
font-size: 14px;
font-weight: 400;
line-height: 24px;
text-align: left;
`
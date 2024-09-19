import styled from "styled-components";
import { Card, Col, ListGroup, Nav, Row } from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import { MdTune } from "react-icons/md";
import { LuPrinter } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import background from "../../assets/LoginBackground.png";
import { FaChevronLeft } from "react-icons/fa";

export const MainBackground = styled.div`
  background: url(${background}) no-repeat center center fixed;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
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
export const ListCards = styled(Card)`
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif;
  border-radius: 20px;
  height: 84vh;
  width: 250px;
`;

export const ViewCards = styled.div`
  width: 70vw;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif;
  border-radius: 20px;
`;

export const ViewDiv = styled.div`
  display: flex;
  width: 89vw;
  position: fixed;
  top: 70px;
  left: 15px;
`;
export const FilterButon = styled.button`
  top: 7px;
  right: 25px;
  position: absolute;
  width: 100px;
  height: 35px;
  border-radius: 15px;
  border: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
`;
export const CardHeader = styled(Card.Header)`
  position: relative;
`;
export const Heading = styled.h5`
  width: 300px;
  height: 25px;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  letter-spacing: 0em;
  margin-left: 15px;
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
  top: 17px;
`;
export const Search = styled.div`
  position: relative;
  bottom: 35px;
  left: 150px;
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
export const Top = styled.div`
  position: relative;
`;
export const ActionButon = styled.button`
  top: 8px;
  right: 140px;
  position: absolute;
  width: 85px;
  height: 32px;
  border-radius: 15px;
  border: none;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
`;
export const FIcon = styled(MdTune)`
  margin-right: 5px;
`;
export const StyledAgGrid = styled.div`
  .ag-theme-balham {
    height: 500px;
    width: 82vw;
    .ag-header {
      // Styles for the header
    }

    .ag-row {
      // Styles for the row
    }

    .ag-cell {
      // Styles for the cell
    }
  }
`;

export const StudentView = styled(Card)`
  height: 84vh;
  overflow: auto;
  border-radius: 20px;
  border: none;
`;
export const NavLink = styled(Nav.Link)`
  text-decoration: none;
  color: black;
  width: auto;
  height: auto;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  margin-left: 19px;
`;
export const Title = styled.p`
  margin-top: -5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #00000080;
`;
export const SubTitle = styled.p`
  margin-top: -13px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;
export const OverViewCard = styled(Card)`
  border: none;
  margin-top: -14px;
  width: auto;
  height: auto;
`;
export const MainTitle = styled.h4`
  margin-top: 30px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
export const ParentDiv = styled.div`
  margin-top: -10px;
`;
export const StyledRow = styled(Row)`
  margin-top: 10px;
`;
export const ParentMainTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
export const HeadingRow = styled(Row)`
  margin-bottom: 10px;
`;
export const ParentTitle = styled.p`
  margin-top: -5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #00000080;
  margin-left: 25px;
`;
export const ParentSubTitle = styled.p`
  margin-top: -13px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  margin-left: 25px;
`;
export const PrfileHeading = styled.p`
  position: absolute;
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  top: 15px;
  left: 60px;
  color: #000000;
`;
export const ProfileImg = styled.img`
  width: 35px;
  height: 35px;
`;

export const PrinterIconBtn = styled.button`
  position: absolute;
  right: 75px;
  height: 30px;
  width: 30px;
  border: 1px solid #00000026;
  border-radius: 5px;
`;
export const MsgIconBtn = styled.button`
  position: absolute;
  right: 35px;
  border: 1px solid #00000026;
  border-radius: 5px;
  height: 30px;
  width: 30px;
`;

export const PrinterIcon = styled(LuPrinter)`
  height: 20px;
  top: 15px;
  color: #6d6d6d;
`;
export const MsgIcon = styled(AiOutlineMessage)`
  height: 20px;
  top: 15px;
  color: #6d6d6d;
`;
export const ProfilePic = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 15px;
`;
export const CommentsHeading = styled.p`
  margin-top: 15px;
  font-size: 16px;
  line-height: 13px;
  font-weight: 600;
  letter-spacing: 0em;
  width: 91px;
  color: #000000;
`;
export const CommentCard = styled(Card)`
  border: none;
  border-radius: 20px;
  margin-top: -20px;
  width: 63vw;
  height: 58vh;
  margin-left: 30px;
`;
export const CommentBtnDiv = styled.div`
  position: absolute;
  right: 20px;
  display: flex;
  gap: 10px;
  top: 15px;
`;
export const CommentBtn = styled.button`
  width: 63px;
  height: 34px;
  background: white;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;

  border: 1px solid #00000066;
`;
export const ListGrpItem = styled(ListGroup.Item)`
  position: relative;
  height: 75px;
`;
export const Comments = styled.div`
  position: absolute;
  left: 65px;
  display: flex;
  gap: 10px;
  top: 15px;
`;
export const Hover = styled(ListGroup)`
  & :hover {
    background: #ebdbff;
  }
`;
export const CommenterName = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;
export const CommentedDate = styled.p`
  font-size: 14px;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #515151;
`;
export const Comment = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin-top: 5px;
  letter-spacing: 0em;
  text-align: left;
  color: #4b4b4b;
`;
export const Tdata = styled.td`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
`;
export const Thead = styled.th`
  color: #000000;
  font-size: 15px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: center;
`;
export const Trow = styled.tr`
  & :hover {
    background-color: #ebdbff;
  }
`;
export const Tbody = styled.tbody`
  & :hover {
    background-color: #ebdbff;
  }
`;
export const StyledTable = styled.table`
  border-radius: 10px;
  border-collapse: collapse;
  width: 88vw;
  height: 74vh;
  background-color: white;
  padding-left: 5px;
`;
export const PaginationDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 5px;
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
export const FeeTable = styled.table`
  border-radius: 20px;
  border-collapse: collapse;
  width: 63vw;
  height: 58vh;
  background-color: #ffffff;
  margin-left: 30px;
  overflow: auto;
`;
export const FeeTdata = styled.td`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0em;
  text-align: left;
  color: #5f5f5f;
`;
export const FeeThead = styled.th`
  color: #000000;
  font-size: 15px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
`;
export const FeeTrow = styled.tr`
  & :hover {
    background-color: #ebdbff;
  }
  border-bottom: 1px solid #0000001a;
`;
export const FeeTbody = styled.tbody`
  & :hover {
    background-color: #ebdbff;
  }
`;
export const FeeHeading = styled.tr`
  background: #f9f7ff;
  border-radius: 20px, 20px, 0px, 0px;
`;
export const ActivityTdata = styled.td`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #5f5f5f;
`;
export const ActivityTable = styled.table`
  border-radius: 20px;
  border-collapse: collapse;
  width: 55vw;
  height: 58vh;
  background-color: #ffffff;
  margin-top: -5px;
  margin-left: 75px;
`;
export const ListView = styled(ListGroup)`
  text-decoration: none;
  color: #5f5f5f;
  font-size: 15px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  border: none;
  & :hover {
    background: #ebdbff;
  }
`;
export const ListViewItem = styled(ListGroup.Item)`
  border: none;
  height: 50px;
`;
export const ListViewImg = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;
export const PaginationBtnGroup = styled.div`
  display: flex;
  gap: 10px;
  position: absolute;
  bottom: 5px;
  left: 25px;
`;
export const PaginationBtn = styled.button`
  width: auto;
  height: auto;
  border: none;
  border-radius: 5px;
`;
export const ChartCard = styled(Card)`
  width: 280px;
  height: 250px;
  border-radius: 20px;
  margin-top: -17px;
  align-items: center;
`;
export const DoughnutChart = styled.div`
  position: absolute;
  width: 160px;
  height: 160px;
  top: 25px;
`;
export const ChartHeading = styled.p`
  font-size: 15px;
  color: #2f2828;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #2f2828;
  position: absolute;
  left: 10px;
  top: 5px;
`;
export const ChartFoot = styled(Row)`
  position: absolute;
  bottom: 5px;
`;
export const ChartFootText = styled.p`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0em;
  color: #858585;
`;
export const ChartFootCol = styled(Col)`
  width: 125px;
  height: 45px;
  align-items: center;
`;
export const ChartFootAttendence = styled.p`
  color: #ef0000;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  position: absolute;
  top: 20px;
  left: 50px;
`;
export const ChartFootLeaves = styled.p`
  color: #0019ff;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  position: absolute;
  top: 20px;
  right: 70px;
`;
export const ChartAttendance = styled.p`
  position: absolute;
  color: #0019ff;
  background: #ffd0d080;
  border-radius: 10px;
  bottom: 0px;
  right: -25px;
  font-size: 12px;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0em;
`;
export const Chartleave = styled.p`
  position: absolute;
  color: #ef0000;
  background: #d5e3ff99;
  border-radius: 10px;
  top: 10px;
  left: 0px;
  font-size: 12px;
  font-weight: 300;
  line-height: 21px;
  letter-spacing: 0em;
`;
export const StyledSpan = styled.div`
  text-align: center;
  align:items:center;
  border-radius: 10px;
  height: 38px;
  width: 70px;
  padding-top:10px;

`;
export const PrizeImg = styled.img`
  width: 15px;
  height: 20px;
  margin-right: 5px;
`;
export const PageSize = styled.label`
  margin-right: 5px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  color: #000000b2;
`;
export const ListHeading = styled(Card.Header)`
  font-size: 15px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;

import styled from "styled-components";
import background from "../assets/LoginBackground.png";
import { Card} from "react-bootstrap";
import { FaChevronLeft } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";
import { BsPersonGear } from "react-icons/bs";
import { RiBook2Line } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { PiWhatsappLogo } from "react-icons/pi";
import { FiMapPin } from "react-icons/fi";
import { SlGraduation } from "react-icons/sl";
import { LuSchool } from "react-icons/lu";
import { GrCertificate } from "react-icons/gr";

export const MainBackground = styled.div`
background: url(${background}) no-repeat center center fixed;
height: 100vh;
width: 100vw;
overflow: auto;
z-index:999;
`
export const Content = styled.div`
  width: 90vw;
  position: absolute;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif;
  border-radius: 15px;
  border: 1px solid #7e3bd133;
  background: #f9f9f959;
  top: 70px;
  left: 38px;
`;
export const Cards = styled(Card)`
  background: none;
  border: none;
  overflow: auto;
`;
export const CardHeader = styled(Card.Header)`
  position: relative;
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
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;
export const SubHeading = styled.h5`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;
export const Styledimage = styled.img`
  margin-top: -10px;
  width: 110px;
  height: 100px;
  object-fit: cover;
  border-radius: 15px;
`;
export const EditProfileBtn = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 10px;
  background: #7e3bd1;
  font-size: 13px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  color: #ffffff;
  border: none;
`;
export const StyledDIv = styled.div`
  display: flex;
  gap: 30px;
`;
export const TeachingClassDiv = styled.div`
  margin-top: -10px;
  width: 200px;
  height: 145px;
  background: #ffffff80;
  border-radius: 10px;
  display: flex;
  overflow: auto;
`;

export const TH = styled.th`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #00000080;
`;
export const TD = styled.td`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;
export const ResponsibilityDiv = styled.div`
  margin-top: -10px;
  width: 340px;
  height: 145px;
  background: #ffffff80;
  border-radius: 10px;
  display: flex;
  overflow: auto;
`;
export const AchievementsDiv = styled.div`
  margin-top: -10px;
  width: 450px;
  height: 175px;
  background: #ffffff80;
  border-radius: 10px;

  display: flex;

  overflow: auto;
`;
export const DT = styled.dt`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #00000080;
`;
export const DD = styled.dd`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;
export const Fileimage = styled.img`
  width: 20px;
  height: 25px;
`;
export const LI = styled.li`
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #00000080;
`;
export const Awardimage = styled.img`
  width: 20px;
  height: 20px;
`;
export const AwardLi = styled.li`
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  color: #000000;
`;
export const EditProfileDiv = styled.div`
  display: flex;
  gap: 20px;
position:absolute;
left:65px;
top:70px;
`;
export const EditProfileCard = styled(Card)`
  width: 60vw;
  height: 80vh;
  border-width: 0px, 0px, 0px, 0px;
  border-style: solid;
  border-color: #c3cddb;
  border-radius: 15px;
  background: #f9f9f959;
  border: none;
  overflow: auto;
`;
export const EditTabDiv = styled.div`
  width: 25vw;
`;
export const EditProfileHeading = styled.h5`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  text-align: left;
  color: #8c8c8c;
`;
export const StyledCol = styled.div`
  position: relative;
`;

export const StyledInput = styled.input`
  width: 300px;
  height: 43px;
  border-radius: 15px;
  border: 1px solid #e0e3e9;
  padding: 0 10px;
  padding-left: 50px;
  outline: 0;
  font-size: 13px;
  font-weight: 400;
`;
export const Icons = styled(AiOutlineUser)`
  position: absolute;
  top: 9px;
  left: 20px;
  width: 20px;
  height: 20px;
`;
export const DateIcon = styled(MdDateRange)`
  position: absolute;
  top: 10px;
  left: 20px;
  width: 20px;
  height: 20px;
`;
export const RoleIcon = styled(BsPersonGear)`
  position: absolute;
  top: 10px;
  left: 20px;
  width: 20px;
  height: 20px;
`;

export const SubjectIcon = styled(RiBook2Line)`
  position: absolute;
  top: 10px;
  left: 20px;
  width: 20px;
  height: 20px;
`;
export const EmailIcon = styled(MdOutlineMail)`
  position: absolute;
  top: 12px;
  left: 20px;
  width: 20px;
  height: 20px;
`;
export const WhatsappIcon = styled(PiWhatsappLogo)`
  position: absolute;
  top: 12px;
  left: 20px;
  width: 20px;
  height: 20px;
`;
export const MapIcon = styled(FiMapPin)`
  position: absolute;
  top: 10px;
  left: 20px;
  width: 20px;
  height: 20px;
`;

export const GradutionIcon = styled(SlGraduation)`
  position: absolute;
  top: 10px;
  left: 20px;
  width: 20px;
  height: 20px;
`;

export const CollegeIcon = styled(LuSchool)`
  position: absolute;
  top: 10px;
  left: 20px;
  width: 20px;
  height: 20px;
`;

export const ExperienceIcon = styled(GrCertificate)`
  position: absolute;
  top: 10px;
  left: 20px;
  width: 20px;
  height: 20px;
`;
export const DutiesIcon = styled.img`
  position: absolute;
  top: 13px;
  left: 20px;
`;
export const AwardsIcon = styled.img`
  position: absolute;
  top: 10px;
  left: 20px;
  width: 20px;
  height: 20px;
`;
export const DocumentsIcon = styled.img`
  position: absolute;
  top: 9px;
  left: 20px;
  width: 17px;
  height: 20px;
`;
export const ClassIcon = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
`;
export const SelectNumber = styled.select`
  position: absolute;
  top: 7px;
  left: 10px;
  width: 55px;
  height: 30px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: #808195;
  background: #ecdcff;
  border: none;
  border-radius: 15px;
`;
export const ButtonsDiv = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 400px;
`;
export const CancelButton = styled.button`
  width: 150px;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  color: #7e3bd1;
  border: 1px solid #7200ff;
  border-radius: 15px;
`;
export const SaveButton = styled.button`
  width: 150px;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: center;
  border-radius: 15px;
  color: white;
  background: #7e3bd1;
  border: none;
`;
export const AddDuties = styled.a`
  text-decoration: none;
  color: #535353;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  position: absolute;
  right: 50px;
  top: 65px;
`;
export const ClassDuty = styled.input`
  position: absolute;
  width: 130px;
  height: 43px;
  border-radius: 15px;
  border: 1px solid #e0e3e9;
  padding: 0 10px;
  padding-left: 50px;
  outline: 0;
  font-size: 13px;
  font-weight: 400;
`;
export const InputDiv = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;
export const AddDocuments = styled.a`
  text-decoration: none;
  color: #535353;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  position: absolute;
  right: 40px;
  margin-top: -28px;
`;

import background from "../assets/LoginBackground.png";
import styled from "styled-components";
import { CiSettings } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import Navbar from "react-bootstrap/Navbar";
import { CiSearch } from "react-icons/ci";
import { RiHome5Fill } from "react-icons/ri";
import { SiGoogleclassroom } from "react-icons/si";
import { MdMailOutline } from "react-icons/md";

export const StyledNavbar = styled(Navbar)`
  background: url(${background});
  width: 100%;
  position: fixed;
  z-index: 999;
  // @media (max-width: 768px) {
  //   .navbar-nav {
  //     flex-direction: column;
  //   }
  // }
`;
export const MainDIv = styled.div``;
export const StyledLogo = styled.img`
  margin-left: 5px;
  width: 60px;
  height: 30px;
`;
export const Styledprofile = styled.img`
  margin-right: 5px;
  width: 30px;
  height: 25px;
`;
export const SearchDiv = styled.div`
  position: relative;
  margin-top: 6px;
`;
export const SearchIcon = styled(CiSearch)`
  position: absolute;
  left: 8px;
  cursor: pointer;
  top: 12px;
`;
export const Input = styled.input`
  width: 240px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid #e0e3e9;
  padding: 0 10px;
  padding-left: 35px;
  outline: 0;
  font-size: 12px;
  opacity: 0.5;
`;
export const SettingsIcon = styled(CiSettings)`
  width: 25px;
  height: 29px;
`;
export const NotificationIcon = styled(IoMdNotificationsOutline)`
  width: 25px;
  height: 29px;
`;
export const DashboardIcon = styled(RiHome5Fill)`
  width: 20px;
  height: 15px;
  position: absolute;
  top: 22px;
  margin-left: -22px;
`;
export const ClassIcon = styled(SiGoogleclassroom)`
  width: 20px;
  height: 15px;
  position: absolute;
  top: 22px;
  margin-left: -22px;
`;
export const LeaveIcon = styled(MdMailOutline)`
  width: 18px;
  height: 13px;
  position: absolute;
  top: 22px;
  margin-left: -17px;
  transform: rotate(270deg);
`;
export const Navsub = styled.div`
  width: 345px;
  height: 40px;
  background: #ffffff;
  border-radius: 15px;
  display: flex;
  gap: 30px;
  align-items: center;
  margin-left: 10px;
`;
export const StyledLink = styled.a`
  width: auto;
  height: 23px;
  font-size: 12px;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  text-decoration: none;
  margin-left: 18px;
  color: #646464;
  &:hover {
    color: #7200ff;
  }
`;
export const Iconbutton = styled.button`
  border: none;
  border-radius: 50%;
  width: 35px;
  height: 30px;
  align-items: center;
  margin-right: 10px;
`;

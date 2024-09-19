import background from "../assets/LoginBackground.png";
import styled from "styled-components";
import { FaAt } from "react-icons/fa";
import { RxDividerVertical } from "react-icons/rx";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { RiDoorLockLine } from "react-icons/ri";
import { LuEyeOff } from "react-icons/lu";
import { LuEye } from "react-icons/lu";

export const Main = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: url(${background}) no-repeat center center fixed;
  background-size: cover;
  background-position: center;
`;
export const LoginSec = styled.div`
  height: 380px;
  width: 350px;
  position: relative;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  font-family: "Poppins", sans-serif;
  border-radius: 20px;
  padding: 20px;
  background: #f9f9f959;
`;
export const HeadSec = styled.div`
  text-align: center;
  align-items: center;
  justify-content: center;
`;
export const StyledImg = styled.img`
  width: 110px;
  height: 55px;
`;

export const Heading = styled.p`
  width: 308px;
  height: 3px;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 0em;
  color: #5f5f5f;
  margin-top: 3px;
`;
export const SubHeading = styled.p`
  width: 315px;
  height: 20px;
  font-size: 12px;
  font-weight: 200;
  line-height: 23px;
  letter-spacing: 0em;
  color: #8c8c8c;
  padding-top: 15px;
`;
export const InputDiv = styled.div`
  position: relative;
  margin-top: 30px;
`;
export const Input = styled.input`
  width: 245px;
  height: 45px;
  border-radius: 10px;
  border: 1px solid #e0e3e9;
  padding: 0 10px;
  padding-left: 60px;
  outline: 0;
  font-size: 12px;
`;
export const FaAtIcon = styled(FaAt)`
  position: absolute;
  left: 50px;
  cursor: pointer;
  top: 15px;
`;
export const DividerIcon = styled(RxDividerVertical)`
  position: absolute;
  left: 70px;
  font-weight: 100;
  cursor: pointer;
  top: 15px;
`;
export const CheckedIcon = styled(IoIosCheckmarkCircle)`
  position: absolute;
  right: 50px;
  font-weight: 100;
  cursor: pointer;
  top: 15px;
`;
export const CheckIcon = styled(IoIosCheckmarkCircleOutline)`
  position: absolute;
  right: 50px;
  font-weight: 100;
  cursor: pointer;
  top: 15px;
`;
export const LockIcon = styled(RiDoorLockLine)`
  position: absolute;
  left: 50px;
  cursor: pointer;
  top: 15px;
`;
export const EyeOn = styled(LuEye)`
  position: absolute;
  right: 50px;
  font-weight: 100;
  cursor: pointer;
  top: 15px;
`;
export const EyeOff = styled(LuEyeOff)`
  position: absolute;
  right: 50px;
  font-weight: 100;
  cursor: pointer;
  top: 15px;
`;
export const ForgetDiv = styled.div`
  margin-left: 120px;
  margin-top: 15px;
`;
export const Forget = styled.a`

  text-decoration: none;
  width: 155px;
  height: 26px;
  font-size: 14px;
  font-weight: 400;
  line-height: 26px;
  letter-spacing: 0em;
  color: blue;
`;
export const Button = styled.button`
font-family: Poppins;

  width: 245px;
  height: 42px;
  padding: 10px;
  border-radius: 15px;
  background: linear-gradient(269.51deg, #7e3bd1 -4.88%, #b375ff 99.58%);
  border: 1px solid #e0e3e9;
  margin-top: 15px;
  color: white;
  font-size: 15px;
`;
export const Logoimg = styled.img`
  width: 55px;
  height: 55px;
`;
export const ResetHeading = styled.p`
  width: 308px;
  height: 3px;
  font-size: 25px;
  font-weight: 600;
  letter-spacing: 0em;
  color: #5f5f5f;
  margin-top: 3px;
`;
export const ResetSubHeading = styled.p`
  width: 310px;
  height: 25px;
  font-size: 11px;
  font-weight: 200;
  letter-spacing: 0em;
  color: #8c8c8c;
  padding-top: 15px;
`;
export const SucessHeading = styled.p`
  font-size: 21px;
  font-weight: 600;
  letter-spacing: 0em;
  color: #5f5f5f;
`;
export const SucessSubHeading = styled.p`
  width: 310px;

  font-size: 11px;
  font-weight: 200;
  letter-spacing: 0em;
  color: #8c8c8c;
`;
export const ResetSubHeading1 = styled.p`
  width: 310px;
  height: 50px;
  font-size: 11px;
  font-weight: 200;
  letter-spacing: 0em;
  color: #8c8c8c;
  padding-top: 15px;
`;
export const BackToLogin = styled.div`
  margin-top: 20px;
`;
export const Back = styled.a`
  text-decoration: none;
  width: 128px;
  height: 30px;
  font-size: 13px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  color: #8c8c8c;
  padding-right: 20px;
`;
export const OtpSection = styled.div`
  display: flex;
  gap: 15px;
  margin-left: 58px;
`;
export const Otp = styled.input`
  width: 38px;
  height: 43px;
  border-radius: 5px;
  border: 1px solid #000000;
  color: #000000;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  background: #f0f0f0;
  border: none;
`;
export const Resend = styled.p`
  width: 325px;
  height: 20px;
  font-size: 14px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0em;
  text-decoration: none;
`;
export const ResendSection = styled.div`
  margin-top: 8px;
`;
export const ButtonCancel = styled.button`
  width: 110px;
  height: 38px;
  border-radius: 12px;
  background: none;
  border: 1px solid #7e3bd1;
  margin-top: 15px;
  color: #8b48dc;
  text-align: center;
  font-size: 15px;
`;
export const ButtonVerify = styled.button`
  width: 110px;
  height: 40px;
  border-radius: 12px;
  background: linear-gradient(269.51deg, #7e3bd1 -4.88%, #b375ff 99.58%);
  border: 1px solid #e0e3e9;
  margin-top: 15px;
  color: white;
  font-size: 15px;
`;
export const ButtonSection = styled.div`
  display: flex;
  margin-left: 34px;
  gap: 25px;
`;
export const Resettext = styled.p`
  width: 280px;
  height: 28px;
  font-size: 11px;
  font-weight: 100;
  letter-spacing: 0em;
  color: #8c8c8c;
  padding-left: 28px;
`;
export const ResetLogo = styled.img`
  width: 60px;
  height: 55px;
  margin-top: -10px;
`;
export const SetPassword = styled.div`
  position: relative;
  margin-top: 20px;
`;
export const BtoLogin = styled.div`
  margin-top: 12px;
`;
export const SucessDiv = styled.div`
  margin-top: 65px;
`;

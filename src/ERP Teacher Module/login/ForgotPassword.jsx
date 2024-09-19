import React, { useState } from "react";
import {
  Main,
  LoginSec,
  HeadSec,
  InputDiv,
  FaAtIcon,
  DividerIcon,
  CheckIcon,
  CheckedIcon,
  Input,
  Button,
  Logoimg,
  ResetSubHeading,
  ResetHeading,
  BackToLogin,
  Back,
  OtpSection,
  Otp,
  Resend,
  ResendSection,
  ButtonCancel,
  ButtonSection,
  ButtonVerify,
  EyeOn,
  EyeOff,
  LockIcon,
  Resettext,
  ResetLogo,
  SetPassword,
  BtoLogin,
  SucessDiv,
  ResetSubHeading1,
  SucessHeading,
  SucessSubHeading,
} from "./StyledLogin";
import { useNavigate } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import Logo from "../assets/Reset.png";
import OTPLogo from "../assets/OTPLogo.png";
import SetPasswordLogo from "../assets/SetPasswordLogo.png";
import SucessLogo from "../assets/SucessLogo.png";

function ForgotPassword() {
  const [sections, setsections] = useState(1);
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [inputtext, setInputText] = useState({});
  const [newpassword, setNewpassword] = useState("password");
  const [isIconVisible, setIsIconVisible] = useState(true);

  const navigate = useNavigate();

  const handleOtpChange = (e, index) => {
    if (isNaN(e.target.value)) return false;

    const updatedOtp = [...otp];
    updatedOtp[index] = e.target.value;
    setOtp(updatedOtp);

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    } else if (e.key === "Backspace" && index > 0 && e.target.value === "") {
      e.target.previousSibling.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && e.target.value === "") {
      e.target.previousSibling.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      e.target.previousSibling.focus();
    } else if (e.key === "ArrowRight" && index < otp.length - 1) {
      e.target.nextSibling.focus();
    }
  };

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setInputText((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
  const Eye = () => {
    setIsIconVisible((prevState) => !prevState);
    if (newpassword === "password") {
      setNewpassword("text");
    } else {
      setNewpassword("password");
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    setsections(2);
  };
  const submitForm2 = (e) => {
    e.preventDefault();
    setsections(3);
  };
  const submitForm3 = (e) => {
    e.preventDefault();
    setsections(4);
  };
  const Login = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const ForgotSection = () => {
    switch (sections) {
      case 1:
        return (
          <>
            <Logoimg src={Logo} alt="" />
            <ResetHeading>Reset Password</ResetHeading>
            <ResetSubHeading1>
              Enter the email you used to create your account so we can send you
              a link for resetting your password
            </ResetSubHeading1>

            <form onSubmit={submitForm}>
              <InputDiv>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={inputtext.email}
                  onChange={inputEvent}
                  name="email"
                  required
                />
                {inputtext.email && inputtext.email.includes(".") ? (
                  <CheckedIcon />
                ) : (
                  <CheckIcon />
                )}
                <FaAtIcon />
                <DividerIcon />
              </InputDiv>
              <div>
                <Button type="submit">Send</Button>
              </div>
              <BackToLogin>
                <Back href="/">
                  <GoArrowLeft />
                  Back to login
                </Back>
              </BackToLogin>
            </form>
          </>
        );

      case 2:
        return (
          <>
            <Logoimg src={OTPLogo} alt="" />
            <ResetHeading>Reset Password</ResetHeading>
            <ResetSubHeading>
              We sent a code to Anamika@gmail.com
            </ResetSubHeading>

            <form onSubmit={submitForm2}>
              <OtpSection>
                {otp.map((data, i) => {
                  return (
                    <Otp
                      type="text"
                      key={i}
                      maxLength={1}
                      value={data}
                      onChange={(e) => handleOtpChange(e, i)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                      required
                    />
                  );
                })}
              </OtpSection>
              <ResendSection>
                <Resend>
                  Didn’t received the email ?
                  <a href="/resend" style={{ textDecoration: "none" }}>
                    {" "}
                    Click to resend
                  </a>
                </Resend>
              </ResendSection>
              <ButtonSection>
                <ButtonCancel type="button">Cancel</ButtonCancel>
                <ButtonVerify type="submit">Send</ButtonVerify>
              </ButtonSection>
              <BackToLogin>
                <Back href="/">
                  <GoArrowLeft />
                  Back to login
                </Back>
              </BackToLogin>
            </form>
          </>
        );

      case 3:
        return (
          <>
            <ResetLogo src={SetPasswordLogo} alt="" />
            <ResetHeading>Set New Password</ResetHeading>
            <ResetSubHeading>
              Choose a new password for your account
            </ResetSubHeading>

            <form onSubmit={submitForm3}>
              <SetPassword>
                <Input
                  type={newpassword}
                  placeholder="Enter New Password"
                  value={inputtext.newPassword}
                  onChange={inputEvent}
                  name="newpassword"
                  required
                />
                <LockIcon />
                <DividerIcon />
                {isIconVisible ? (
                  <EyeOn onClick={Eye} />
                ) : (
                  <EyeOff onClick={Eye} />
                )}

                <Resettext>
                  Your password must be at least 8 characters long and include 1
                  capital letter and 1 number
                </Resettext>
              </SetPassword>
              <SetPassword>
                <Input
                  type="password"
                  placeholder="Confirm Password"
                  value={inputtext.confirmPassword}
                  onChange={inputEvent}
                  name="confirmpassword"
                  required
                />
                <LockIcon />
              </SetPassword>

              <div>
                <Button type="submit">Reset Password</Button>
              </div>
              <BtoLogin>
                <Back href="/">
                  <GoArrowLeft />
                  Back to login
                </Back>
              </BtoLogin>
            </form>
          </>
        );
      case 4:
        return (
          <>
            <form onSubmit={Login}>
              <SucessDiv>
                <Logoimg src={SucessLogo} alt="" />
                <SucessHeading> Password Reset Successfully</SucessHeading>
                <SucessSubHeading>
                  Login into your account with new password
                </SucessSubHeading>

                <div>
                  <Button type="submit">Login</Button>
                </div>
              </SucessDiv>
            </form>
          </>
        );

      default:
        return null;
    }
  };
  return (
    <Main>
      <LoginSec>
        <HeadSec>{ForgotSection()}</HeadSec>
      </LoginSec>
    </Main>
  );
}

export default ForgotPassword;

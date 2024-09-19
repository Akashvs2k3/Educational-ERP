import React, { useState } from "react";
import {
  Main,
  LoginSec,
  HeadSec,
  Heading,
  SubHeading,
  StyledImg,
  InputDiv,
  FaAtIcon,
  DividerIcon,
  CheckIcon,
  CheckedIcon,
  Input,
  LockIcon,
  EyeOff,
  EyeOn,
  Forget,
  ForgetDiv,
  Button,
} from "./StyledLogin";
import Logo from "../assets/Logo.png";
import { useNavigate } from 'react-router-dom'

function Login() {
  const [inputtext, setInputText] = useState({
    email: "",
    password: "",
  });

  const [password, setpassword] = useState("password");
  const [isIconVisible, setIsIconVisible] = useState(true);

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setInputText((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };
const navigate =useNavigate()
  const submitForm = (e) => {
    e.preventDefault();
    navigate('/dashboard')
  };

  const Eye = () => {
    setIsIconVisible((prevState) => !prevState);
    if (password === "password") {
      setpassword("text");
    } else {
      setpassword("password");
    }
  };

  return (
    <Main>
      <LoginSec>
        <HeadSec>
          <StyledImg src={Logo} alt="" />
          <Heading>Welcome Back!</Heading>
          <SubHeading>Enter you user ID and password.</SubHeading>

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
            <InputDiv>
              <Input
                type={password}
                placeholder="Password"
                value={inputtext.password}
                onChange={inputEvent}
                name="password"
                required
              />
              <LockIcon />
              <DividerIcon />
              {isIconVisible ? (
                <EyeOn onClick={Eye} />
              ) : (
                <EyeOff onClick={Eye} />
              )}
            </InputDiv>
            <ForgetDiv>
              <Forget href="/forgot-password"> Forgot Password ?</Forget>
            </ForgetDiv>

            <div>
              <Button type="submit">Login</Button>
            </div>
          </form>
        </HeadSec>
      </LoginSec>
    </Main>
  );
}

export default Login;

import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../assets/Logo.png";
import { Card, Container, Form } from "react-bootstrap";

import icon from "../assets/icon.png";
import Attendance from "../assets/Attendance.png";
import Marks from "../assets/Marks.png";
import Transportation from "../assets/Transportation.png";
import Message from "../assets/Message.png";
import LessonPlanner from "../assets/Lesson Planner.png";
import StudentList from "../assets/Student List.png";
import ReportCard from "../assets/Report Card.png";
import Promotion from "../assets/Promotion.png";
import ClassTimetable from "../assets/ClassTimetable.png";
import HolisticReport from "../assets/HolisticReport.png";
import ExamTimetable from "../assets/ExamTimetable.png";
import Homework from "../assets/Homework.png";

import {
  ClassIcon,
  DashboardIcon,
  Iconbutton,
  Input,
  LeaveIcon,
  MainDIv,
  Navsub,
  NotificationIcon,
  SearchDiv,
  SearchIcon,
  SettingsIcon,
  StyledLink,
  StyledLogo,
  StyledNavbar,
  Styledprofile,
} from "./StylesDashboard";
import {
  CanvasCard,
  CanvasHeading,
  CanvasItemsBtn,
  CanvasOptions,
  CloseIcon,
  StyledButton,
  StyledOffCanvas,
  StyledSidebar,
} from "./StylesSidebar";

import Main from "../Main/Main";

function Dashboard() {
  const [show, setShow] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null); // State to store selected button

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleButtonClick = (buttonText) => {
    setSelectedButton(buttonText); // Update selected button
    handleShow(); // Show off-canvas
  };
  const placements = ["end"];

  const [activeComponent, setActiveComponent] = useState("");
  const [showMain, setShowMain] = useState(false);

  const handleItemsClick = (componentName) => {
    setActiveComponent(componentName);

    setShowMain(true); //-
    handleClose();
  };
  const Back = () => {
    setShowMain(false); //-
  };

  return (
    <MainDIv>
      <StyledNavbar className="bg-body-tertiary" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#home">
            <StyledLogo src={Logo} alt="" />
          </Navbar.Brand>

          <Navsub className="me-auto" style={{ paddingLeft: "20px" }}>
            <StyledLink href="/Dashboard">
              <DashboardIcon />
              My Dashboard
            </StyledLink>
            <StyledLink href="/Class">
              <ClassIcon />
              My Class
            </StyledLink>
            <StyledLink onClick={() => handleItemsClick("Leave")}>
              <LeaveIcon />
              My Leaves
            </StyledLink>
          </Navsub>

          <Nav>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <SearchDiv>
                <Form className="d-flex">
                  <Input
                    type="search"
                    placeholder="Search in dashboard..."
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
                <SearchIcon />
              </SearchDiv>

              <Nav>
                <Iconbutton>
                  <SettingsIcon />
                </Iconbutton>
                <Iconbutton>
                  <NotificationIcon />
                </Iconbutton>
                <a onClick={() => handleItemsClick("Profile")}>
                  <Styledprofile src={icon} alt="" />
                </a>
              </Nav>
            </Navbar.Collapse>
          </Nav>
        </Container>
      </StyledNavbar>

      <StyledSidebar>
        <StyledButton onClick={() => handleButtonClick("6B")}>6B</StyledButton>
        <StyledButton onClick={() => handleButtonClick("6A")}>6A</StyledButton>
        <StyledButton onClick={() => handleButtonClick("6C")}>6C</StyledButton>
        <StyledButton onClick={() => handleButtonClick("8C")}>8C</StyledButton>
      </StyledSidebar>

      <StyledOffCanvas
        show={show}
        placement={placements}
        style={{ right: "50px", top: "70px", width: "20vw" }}
        backdrop={false}
        animation={false}
      >
        <CanvasCard>
          <Card.Header>
            <CanvasHeading>{selectedButton} </CanvasHeading>
            <CloseIcon onClick={handleClose} />
          </Card.Header>
          <CanvasOptions>
            {" "}
            <CanvasItemsBtn onClick={() => handleItemsClick("attendance")}>
              <img src={Attendance} alt="" />
            </CanvasItemsBtn>{" "}
            <CanvasItemsBtn onClick={() => handleItemsClick("Mark")}>
              {" "}
              <img src={Marks} alt="" />
            </CanvasItemsBtn>
            <CanvasItemsBtn onClick={() => handleItemsClick("Transportation")}>
              {" "}
              <img
                src={Transportation}
                alt=""
                style={{ width: "100px", objectFit: "fill" }}
              />
            </CanvasItemsBtn>
            <CanvasItemsBtn onClick={() => handleItemsClick("Message")}>
              {" "}
              <img src={Message} alt="" />
            </CanvasItemsBtn>
            <CanvasItemsBtn onClick={() => handleItemsClick("LessonPlanner")}>
              {" "}
              <img
                src={LessonPlanner}
                style={{ width: "100px", objectFit: "fill" }}
                alt=""
              />
            </CanvasItemsBtn>
            <CanvasItemsBtn onClick={() => handleItemsClick("StudentList")}>
              <img src={StudentList} alt="" />
            </CanvasItemsBtn>
            <CanvasItemsBtn onClick={() => handleItemsClick("ReportCard")}>
              <img src={ReportCard} alt="" />
            </CanvasItemsBtn>
            <CanvasItemsBtn onClick={() => handleItemsClick("Promotion")}>
              <img
                src={Promotion}
                alt=""
                style={{ width: "100px", objectFit: "fill" }}
              />
            </CanvasItemsBtn>
            <CanvasItemsBtn onClick={() => handleItemsClick("Homework")}>
              <img src={Homework} alt="" />
            </CanvasItemsBtn>
            <CanvasItemsBtn onClick={() => handleItemsClick("ExamTimetable")}>
              <img
                src={ExamTimetable}
                alt=""
                style={{ width: "100px", objectFit: "fill" }}
              />
            </CanvasItemsBtn>
            <CanvasItemsBtn onClick={() => handleItemsClick("ClassTimetable")}>
              <img
                src={ClassTimetable}
                alt=""
                style={{ width: "100px", objectFit: "fill" }}
              />
            </CanvasItemsBtn>
            <CanvasItemsBtn onClick={() => handleItemsClick("HolisticReport")}>
              <img
                src={HolisticReport}
                alt=""
               
              />
            </CanvasItemsBtn>
          </CanvasOptions>
        </CanvasCard>
      </StyledOffCanvas>

      {showMain && <Main activeComponent={activeComponent} Back={Back} />}
    </MainDIv>
  );
}

export default Dashboard;

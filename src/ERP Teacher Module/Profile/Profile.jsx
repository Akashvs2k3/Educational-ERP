import React, { useState } from "react";
import {
  AchievementsDiv,
  Atag,
  AwardLi,
  Awardimage,
  BackIcon,
  CardHeader,
  Cards,
  Content,
  DD,
  DT,

  EditProfileBtn,
  Fileimage,
  Heading,
  LI,
  MainBackground,
  ResponsibilityDiv,
  StyledDIv,
  Styledimage,
  SubHeading,
  SubTitle,
  TD,
  TH,
  TeachingClassDiv,
  Title,
} from "./ProfileStyles";
import { Card, Col, Row } from "react-bootstrap";
import MyProfile from "../assets/MyProfile.png";
import File from "../assets/File.png";
import Awards from "../assets/Awards.png";
import { FaRegEdit } from "react-icons/fa";
import EditProfile from "./EditProfile";

function Profile() {
  const initialSubTitles = {
    Name: "John Doe",
    Role: "Software Engineer",
    Gender: "Male",
    Subject: "Computer Science",
    Dob: "01/01/1990",
    ResidentialAddress: "123 Main St, City, Country",
    Email: "john.doe@example.com",
    Number: "+1234567890",
    EmployeeNo: "#23578899",
    Experience: "1 Year",
    Profession: "Hindi Teacher",
    PreviousSchool: "School Name",
    Qulification: "MA Hindi",
    Institutionsattended: "Rajiv ghandi college of art and science",
    YearOfGraduation: "2023",
  };

  const initialResponsibilities = [
    { name: "Anti Ragging Squad", role: "Member" },
    { name: "Shijavi house", role: "Capitan" },
    { name: "IEEE Club of elecrtical and eletronics", role: "Capitan" },
  ];

  const initialTeachingData = [
    { class: "7B", role: "Hindi Teacher" },
    { class: "7A", role: "Class Teacher" },
    { class: "7C", role: "Hindi Teacher" },
  ];

  const [subTitles, setSubTitles] = useState(initialSubTitles);
  const [responsibilities, setResponsibilities] = useState(
    initialResponsibilities
  );
  const [teachingData, setTeachingData] = useState(initialTeachingData);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleEditProfileClick = () => {
    setShowEditForm(true);
  };

  const handleCloseEditForm = () => {
    setShowEditForm(false);
  };

  const handleSaveChanges = (updatedData) => {
    setSubTitles(updatedData.subTitles);
    setResponsibilities(updatedData.responsibilities);
    setTeachingData(updatedData.teachingData);
    setShowEditForm(false);
  };
  return (
    <MainBackground>
       {showEditForm ? (
              <EditProfile
                initialSubTitles={subTitles}
                initialResponsibilities={responsibilities}
                initialTeachingData={teachingData}
                onSave={handleSaveChanges}
                onClose={handleCloseEditForm}
              />
            ):(<>
      <Content>
        <Cards>
          <CardHeader>
            <Atag href="/dashboard">
              <BackIcon />
            </Atag>
            <Heading>My Profile</Heading>
          </CardHeader>
          <Card.Body style={{ overflow: "auto" }}>
            <Row>
              <Col
                style={{ display: "flex", flexDirection: "column", gap: "5px" }}
              >
                <Styledimage src={MyProfile} alt="" />
                <EditProfileBtn type="button" 
                onClick={handleEditProfileClick}
                >
                  <FaRegEdit /> Edit Profile
                </EditProfileBtn>
              </Col>
              <Col>
                <Title>Name</Title>
                {/* Displaying SubTitle value from state */}
                <SubTitle>{subTitles.Name}</SubTitle>

                <Title>Role</Title>
                <SubTitle>{subTitles.Role}</SubTitle>
              </Col>
              <Col>
                <Title>Gender</Title>
                <SubTitle>{subTitles.Gender}</SubTitle>

                <Title>Subject</Title>
                <SubTitle>{subTitles.Subject}</SubTitle>
              </Col>
              <Col>
                <Title>Date of birth</Title>
                <SubTitle>{subTitles.Dob}</SubTitle>

                <Title>Residential address</Title>
                <SubTitle>{subTitles.ResidentialAddress}</SubTitle>
              </Col>
              <Col>
                <Title>Email Address</Title>
                <SubTitle>{subTitles.Email}</SubTitle>
              </Col>
              <Col>
                <Title>Phone Number</Title>
                <SubTitle>{subTitles.Number}</SubTitle>
              </Col>
            </Row>

            <Row>
              <SubHeading style={{ paddingTop: "10px" }}>
                Professional Information
              </SubHeading>
              <Col>
                <Title>Employee No</Title>
                <SubTitle>{subTitles.EmployeeNo}</SubTitle>

                <Title>Experience</Title>
                <SubTitle>{subTitles.Experience}</SubTitle>
              </Col>
              <Col>
                <Title>Profession</Title>
                <SubTitle>{subTitles.Profession}</SubTitle>

                <Title>Previous School </Title>
                <SubTitle>{subTitles.PreviousSchool}</SubTitle>
              </Col>
              <Col>
                <Title>Qulification</Title>
                <SubTitle>{subTitles.Qulification}</SubTitle>
              </Col>
              <Col>
                <Title>Institutions attended</Title>
                <SubTitle>{subTitles.Institutionsattended}</SubTitle>
              </Col>
              <Col>
                <Title>Year of graduation </Title>
                <SubTitle>{subTitles.YearOfGraduation}</SubTitle>
              </Col>
            </Row>

            <Row>
              <Col>
                <div>
                  <SubHeading> Responsiblity Information</SubHeading>
                  <StyledDIv>
                    <div>
                      <Title>Teaching Class </Title>
                      <TeachingClassDiv>
                        <table>
                          <thead>
                            <tr>
                              <TH style={{ paddingLeft: "8px" }}>Class</TH>
                              <TH style={{ paddingLeft: "30px" }}>Role</TH>
                            </tr>
                          </thead>
                          <tbody>
                            {teachingData.map((row, index) => (
                              <tr key={index}>
                                <td style={{ paddingLeft: "8px" }}>
                                  {row.class}
                                </td>
                                <td style={{ paddingLeft: "30px" }}>
                                  {row.role}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </TeachingClassDiv>
                    </div>
                    <div>
                      <Title>Other Responsibility</Title>
                      <ResponsibilityDiv>
                        <table>
                          <thead>
                            <tr>
                              <TH style={{ paddingLeft: "8px" }}>Name</TH>
                              <TH style={{ paddingLeft: "15px" }}>Role</TH>
                            </tr>
                          </thead>
                          <tbody>
                            {responsibilities.map((rowData, index) => (
                              <tr key={index}>
                                <TD style={{ paddingLeft: "8px" }}>
                                  {rowData.name}
                                </TD>
                                <TD style={{ paddingLeft: "15px" }}>
                                  {rowData.role}
                                </TD>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </ResponsibilityDiv>
                    </div>
                  </StyledDIv>
                </div>
              </Col>
              <Col>
                <div>
                  <SubHeading>Professional Development</SubHeading>

                  <div>
                    <AchievementsDiv className="row">
                      <div className="col" style={{ paddingTop: "5px" }}>
                        <dl>
                          <DT> Workshops</DT>
                          <DD>
                            <Fileimage src={File} alt="" /> Certificate
                          </DD>
                          <DT> Training</DT>
                          <DD>
                            <Fileimage src={File} alt="" /> Certificate
                          </DD>
                          <DT> Training</DT>
                          <DD>
                            <Fileimage src={File} alt="" /> Certificate
                          </DD>
                        </dl>
                      </div>
                      <div className="col" style={{ paddingTop: "5px" }}>
                        <ul style={{ listStyleType: "none" }}>
                          <LI>Awards</LI>
                          <AwardLi>
                            <Awardimage src={Awards} alt="" /> Award 1
                          </AwardLi>
                          <AwardLi>
                            <Awardimage src={Awards} alt="" /> Award 2
                          </AwardLi>
                        </ul>
                      </div>
                    </AchievementsDiv>
                  </div>
                </div>
              </Col>
            </Row>
          </Card.Body>
        </Cards>
    
      </Content>
          </>)}
    </MainBackground>
  );
}

export default Profile;

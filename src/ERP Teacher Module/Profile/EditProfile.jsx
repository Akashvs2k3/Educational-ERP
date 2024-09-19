import React, { useState } from "react";
import { Card, CardHeader, Col, Nav, Row, Tab } from "react-bootstrap";
import {
  AddDocuments,
  AddDuties,
  Atag,
  AwardsIcon,
  BackIcon,
  ButtonsDiv,
  CancelButton,
  ClassDuty,
  ClassIcon,
  CollegeIcon,
  DateIcon,
  DocumentsIcon,
  DutiesIcon,
  EditProfileCard,
  EditProfileDiv,
  EditProfileHeading,
  EditTabDiv,
  EmailIcon,
  ExperienceIcon,
  GradutionIcon,
  Heading,
  Icons,
  InputDiv,
  MapIcon,
  RoleIcon,
  SaveButton,
  SelectNumber,
  StyledCol,
  StyledInput,
  SubjectIcon,
  WhatsappIcon,
} from "./ProfileStyles";
import SelectedAcivement from "../assets/SelectedAcivement.png";
import SelectedProInfo from "../assets/SelectedProInfo.png";
import Achivement from "../assets/Achivement.png";
import SelectedPreInfo from "../assets/SelectedPreInfo.png";
import ProInfo from "../assets/ProInfo.png";
import Responsibility from "../assets/Responsibility.png";
import SelectedResponsibility from "../assets/SelectedResponsibility.png";
import PerInfo from "../assets/PerInfo.png";
import Duties from "../assets/Duties.png";
import { IoMdAdd } from "react-icons/io";
import Class from "../assets/Class.png";
import File from "../assets/File.png";
import Awards from "../assets/Awards.png";

function EditProfile({ initialSubTitles, onSave, onClose }) {
  const [formData, setFormData] = useState(initialSubTitles || {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  const [selectedImage, setSelectedImage] = useState(SelectedPreInfo);
  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const [addDuties, setAddDuties] = useState([{ id: 1 }]);
  const addDutiesField = () => {
    const newInput = { id: addDuties.length + 1 };
    setAddDuties([...addDuties, newInput]);
  };

  const [addAwards, setAddAwards] = useState([{ id: 1 }]);
  const addAwardField = () => {
    const newInput = { id: addAwards.length + 1 };
    setAddAwards([...addAwards, newInput]);
  };

  const [addDocuments, setAddDocuments] = useState([{ id: 1 }]);
  const addDocumentsField = () => {
    const newInput = { id: addDocuments.length + 1 };
    setAddDocuments([...addDocuments, newInput]);
  };

  return (
    <EditProfileDiv>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <EditTabDiv>
          <Row>
            <Col>
              <Nav className="flex-column gap-4 align-items-center">
                <Nav.Item
                  style={{
                    backgroundColor:
                      selectedImage === SelectedPreInfo ? "#FFFFFF" : "",
                    borderRadius: "15px",
                  }}
                >
                  <Nav.Link
                    eventKey="first"
                    onClick={() => handleClick(SelectedPreInfo)}
                  >
                    <div>
                      <img
                        src={
                          selectedImage === SelectedPreInfo
                            ? SelectedPreInfo
                            : PerInfo
                        }
                        style={{ width: "220px" }}
                        alt=""
                      />
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="second"
                    onClick={() => handleClick(ProInfo)}
                    style={{
                      backgroundColor:
                        selectedImage === ProInfo ? "#FFFFFF" : "",
                      borderRadius: "15px",
                    }}
                  >
                    <div>
                      <img
                        src={
                          selectedImage === ProInfo ? SelectedProInfo : ProInfo
                        }
                        style={{ width: "220px" }}
                        alt=""
                      />
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="third"
                    onClick={() => handleClick(Responsibility)}
                    style={{
                      backgroundColor:
                        selectedImage === Responsibility ? "#FFFFFF" : "",
                      borderRadius: "15px",
                    }}
                  >
                    <div>
                      <img
                        src={
                          selectedImage === Responsibility
                            ? SelectedResponsibility
                            : Responsibility
                        }
                        style={{ width: "220px" }}
                        alt=""
                      />
                    </div>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link
                    eventKey="fourth"
                    onClick={() => handleClick(Achivement)}
                    style={{
                      backgroundColor:
                        selectedImage === Achivement ? "#FFFFFF" : "",
                      borderRadius: "15px",
                    }}
                  >
                    <div>
                      <img
                        src={
                          selectedImage === Achivement
                            ? SelectedAcivement
                            : Achivement
                        }
                        style={{ width: "220px" }}
                        alt=""
                      />
                    </div>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </EditTabDiv>

        <EditProfileCard>
          <CardHeader>
            <Atag href="/dashboard">
              <BackIcon />
            </Atag>
            <Heading>My Profile</Heading>
          </CardHeader>
          <Card.Body>
            <Tab.Content>
              {/* PERSONAL INFOMARTION */}
              <Tab.Pane eventKey="first">
                <Row>
                  <EditProfileHeading>Personal Imformations</EditProfileHeading>
                  <Col>
                    <StyledCol>
                      <StyledInput
                        type="text"
                        placeholder="Full Name"
                        id="Name"
                        name="Name"
                        value={formData ? formData.Name : ""}
                        onChange={handleChange}
                      />

                      <Icons />
                    </StyledCol>
                  </Col>
                  <Col>
                    <StyledCol>
                      <StyledInput type="text" placeholder="Date of Birth" />
                      <DateIcon />
                    </StyledCol>
                  </Col>
                </Row>
                <Row style={{ paddingTop: "20px" }}>
                  <Col>
                    <StyledCol>
                      <StyledInput type="text" placeholder="Role" />
                      <RoleIcon />
                    </StyledCol>
                  </Col>
                  <Col>
                    <StyledCol>
                      <StyledInput type="text" placeholder="Subject" />
                      <SubjectIcon />
                    </StyledCol>
                  </Col>
                </Row>

                <Row style={{ paddingTop: "40px" }}>
                  <EditProfileHeading>Contact Info</EditProfileHeading>
                  <Col>
                    <StyledCol>
                      <StyledInput type="text" placeholder="Eamil Address" />
                      <EmailIcon />
                    </StyledCol>
                  </Col>
                  <Col>
                    <StyledCol>
                      <StyledInput type="text" placeholder="Whatsapp Number" />
                      <WhatsappIcon />
                    </StyledCol>
                  </Col>
                </Row>
                <Row style={{ paddingTop: "20px" }}>
                  <Col>
                    <StyledCol>
                      <StyledInput type="text" placeholder="Address " />
                      <MapIcon />
                    </StyledCol>
                  </Col>
                  <Col>
                    <StyledCol>
                      <StyledInput
                        type="text"
                        placeholder="Phone Number"
                        style={{ paddingLeft: "75px" }}
                      />
                      <SelectNumber id="number" name="number">
                        <option value="number">+91</option>
                      </SelectNumber>
                    </StyledCol>
                  </Col>
                </Row>
              </Tab.Pane>

              {/* PROFESSIONAL INFORMATION */}
              <Tab.Pane eventKey="second">
                <Row>
                  <EditProfileHeading>Education</EditProfileHeading>
                  <Col>
                    <StyledCol>
                      <StyledInput type="text" placeholder="Graduation" />
                      <GradutionIcon />
                    </StyledCol>
                  </Col>
                  <Col>
                    <StyledCol>
                      <StyledInput type="text" placeholder="Post Graduation" />
                      <GradutionIcon />
                    </StyledCol>
                  </Col>
                </Row>

                <Row style={{ paddingTop: "20px" }}>
                  <Col>
                    <StyledCol>
                      <StyledInput type="text" placeholder="College Name" />
                      <CollegeIcon />
                    </StyledCol>
                  </Col>
                  <Col>
                    <StyledCol>
                      <StyledInput type="text" placeholder="College Name" />
                      <CollegeIcon />
                    </StyledCol>
                  </Col>
                </Row>

                <Row style={{ paddingTop: "40px" }}>
                  <EditProfileHeading>Experience</EditProfileHeading>
                  <Col>
                    <StyledCol>
                      <StyledInput type="text" placeholder="Total Experience" />
                      <ExperienceIcon />
                    </StyledCol>
                  </Col>
                  <Col>
                    <StyledCol>
                      <StyledInput type="text" placeholder="Role" />
                      <RoleIcon />
                    </StyledCol>
                  </Col>
                </Row>

                <Row style={{ paddingTop: "20px" }}>
                  <Col>
                    <StyledCol>
                      <StyledInput type="text" placeholder="Previous School" />
                      <CollegeIcon />
                    </StyledCol>
                  </Col>
                  <Col>
                    <StyledCol>
                      <StyledInput type="text" placeholder="Subject" />
                      <SubjectIcon />
                    </StyledCol>
                  </Col>
                </Row>
              </Tab.Pane>

              {/* RESPONSIBILITY */}
              <Tab.Pane eventKey="third">
                <Row>
                  <div>
                    <EditProfileHeading>Other Duties</EditProfileHeading>
                    <AddDuties onClick={addDutiesField}>
                      {" "}
                      <IoMdAdd /> Add New Duty
                    </AddDuties>
                  </div>

                  <InputDiv>
                    {addDuties.map((input, index) => (
                      <div key={index}>
                        <div>
                          <StyledCol>
                            <StyledInput
                              type="text"
                              placeholder="NSS chief instructor"
                            />
                            <DutiesIcon src={Duties} alt="" />
                          </StyledCol>
                        </div>
                      </div>
                    ))}
                  </InputDiv>
                </Row>
                <Row style={{ paddingTop: "50px" }}>
                  <EditProfileHeading>Class Duty</EditProfileHeading>
                  <Col>
                    <StyledCol>
                      <ClassDuty type="text" placeholder="7B" />
                      <ClassIcon src={Class} alt="" />
                    </StyledCol>
                  </Col>
                  <Col>
                    <Col>
                      <StyledCol>
                        <ClassDuty type="text" placeholder="7B" />
                        <ClassIcon src={Class} alt="" />
                      </StyledCol>
                    </Col>
                  </Col>
                  <Col>
                    <StyledCol>
                      <ClassDuty type="text" placeholder="7B" />
                      <ClassIcon src={Class} alt="" />
                    </StyledCol>
                  </Col>
                  <Col>
                    <StyledCol>
                      <ClassDuty type="text" placeholder="7B" />
                      <ClassIcon src={Class} alt="" />
                    </StyledCol>
                  </Col>
                  <Col>
                    <StyledCol>
                      <ClassDuty type="text" placeholder="7B" />
                      <ClassIcon src={Class} alt="" />
                    </StyledCol>
                  </Col>
                </Row>
              </Tab.Pane>

              <Tab.Pane eventKey="fourth">
                <Row>
                  <div>
                    <EditProfileHeading>Awards</EditProfileHeading>
                    <AddDuties onClick={addAwardField}>
                      {" "}
                      <IoMdAdd /> Add new Awards
                    </AddDuties>
                  </div>

                  <InputDiv>
                    {addAwards.map((input, index) => (
                      <div key={index}>
                        <div>
                          <StyledCol>
                            <StyledInput type="text" placeholder="Awards" />
                            <AwardsIcon src={Awards} alt="" />
                          </StyledCol>
                        </div>
                      </div>
                    ))}
                  </InputDiv>
                </Row>

                <Row style={{ paddingTop: "50px" }}>
                  <div>
                    <EditProfileHeading>Documents</EditProfileHeading>
                    <AddDocuments onClick={addDocumentsField}>
                      {" "}
                      <IoMdAdd /> Add new Documents
                    </AddDocuments>
                  </div>

                  <InputDiv>
                    {addDocuments.map((input, index) => (
                      <div key={index}>
                        <div>
                          <StyledCol>
                            <StyledInput
                              type="text"
                              placeholder="Experience certificate.Pdf"
                            />
                            <DocumentsIcon src={File} alt="" />
                          </StyledCol>
                        </div>
                      </div>
                    ))}
                  </InputDiv>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </Card.Body>
          <Card.Footer>
            <ButtonsDiv>
              <CancelButton type="button" onClick={onClose}>
                Cancel
              </CancelButton>
              <SaveButton type="button" onClick={handleSubmit}>
                Save Changes
              </SaveButton>
            </ButtonsDiv>
          </Card.Footer>
        </EditProfileCard>
      </Tab.Container>
    </EditProfileDiv>
  );
}

export default EditProfile;

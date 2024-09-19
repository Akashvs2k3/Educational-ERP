import React, { useState } from "react";
import { Card, Col, ListGroup, Nav, Row } from "react-bootstrap";
import {
  ActivityTable,
  ActivityTdata,
  CardHeader,
  ChartAttendance,
  ChartCard,
  ChartFoot,
  ChartFootAttendence,
  ChartFootCol,
  ChartFootLeaves,
  ChartFootText,
  ChartHeading,
  Chartleave,
  Comment,
  CommentBtn,
  CommentBtnDiv,
  CommentCard,
  CommentedDate,
  CommenterName,
  Comments,
  CommentsHeading,
  DoughnutChart,
  FeeHeading,
  FeeTable,
  FeeTbody,
  FeeTdata,
  FeeThead,
  FeeTrow,
  HeadingRow,
  ListGrpItem,
  MainTitle,
  MsgIcon,
  MsgIconBtn,
  NavLink,
  OverViewCard,
  Pagination,
  PaginationDiv,
  ParentDiv,
  ParentMainTitle,
  ParentSubTitle,
  ParentTitle,
  PrfileHeading,
  PrinterIcon,
  PrinterIconBtn,
  PrizeImg,
  ProfileImg,
  ProfilePic,
  StudentView,
  StyledRow,
  StyledSpan,
  SubTitle,
  TextPagination,
  Title,
} from "./StudentListStyles";
import DummyImg from "../../assets/DummyImg.png";
import Cmntprofile from "../../assets/CmntProfile.png";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Profile from "../../assets/Profile.png";
import First from "../../assets/First.png";
import Second from "../../assets/Second.png";
import Third from "../../assets/Third.png";
import Participation from "../../assets/Participation.png";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Doughnut } from "react-chartjs-2";

function StudentsList(selectedRow, selectedListData) {
  ChartJS.register(ArcElement, Tooltip, Legend);


  const handleSelect = (eventKey) => {
    setActiveKey(eventKey);
  };

  const data = {
    datasets: [
      {
        labels: ["Attendance", "leave"],

        data: [88, 12],
        backgroundColor: ["#B0CBFF", "#FFB0B0"],
      },
    ],
  };

  const [feeData, setfeeData] = useState([
    {
      id: 1,
      feesName: "Tuition Fee",
      feeAmount: "$500",
      remark: "Term 2",
      dueDate: "2024-02-28",
      status: "Paid",
    },
    {
      id: 2,
      feesName: "Library Fee",
      feeAmount: "$50",
      remark: "Term 1",
      dueDate: "2024-03-15",
      status: "Pending",
    },
    {
      id: 3,
      feesName: "Tuition Fee",
      feeAmount: "$500",
      remark: "Term 2",
      dueDate: "2024-02-28",
      status: "Paid",
    },
    {
      id: 4,
      feesName: "Library Fee",
      feeAmount: "$50",
      remark: "Term 1",
      dueDate: "2024-03-15",
      status: "Pending",
    },
    {
      id: 5,
      feesName: "Tuition Fee",
      feeAmount: "$500",
      remark: "Term 2",
      dueDate: "2024-02-28",
      status: "Paid",
    },
    {
      id: 6,
      feesName: "Library Fee",
      feeAmount: "$50",
      remark: "Term 1",
      dueDate: "2024-03-15",
      status: "Pending",
    },
  ]);
  const [activityData, setActivityData] = useState([
    { activity: "Running Race", level: "School Level", position: "1st" },
    { activity: "Chess", level: "School Level", position: "2nd" },
    { activity: "Swimming", level: "School Level", position: "Participation" },
    { activity: "Running Race", level: "School Level", position: "3rd" },
    { activity: "Chess", level: "School Level", position: "2nd" },
    { activity: "Swimming", level: "School Level", position: "Participation" },
  ]);

  const [activeKey, setActiveKey] = useState("link-1");

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = feeData.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div>
      <StudentView>
        <CardHeader>
          <ProfileImg src={Profile} alt="" />
          <PrfileHeading>Blessy Paul</PrfileHeading>

          <PrinterIconBtn>
            <PrinterIcon />
          </PrinterIconBtn>
          <MsgIconBtn>
            <MsgIcon />
          </MsgIconBtn>
        </CardHeader>
        <Card.Title>
          <Nav
            variant="underline"
            activeKey={activeKey}
            onSelect={handleSelect}
          >
            <Nav.Item>
              <NavLink eventKey="link-1">Overview</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink eventKey="link-2">Parent Details</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink eventKey="link-3">Fee Details</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink eventKey="link-4">Extra-Cirricular Activities</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink eventKey="link-5">Comment</NavLink>
            </Nav.Item>
          </Nav>
        </Card.Title>
        <Card.Body>
          {activeKey === "link-1" && (
            <div>
              <Row>
                <Col>
                  <OverViewCard>
                    <Card.Body>
                      <ProfilePic src={DummyImg} alt="" />
                    </Card.Body>
                  </OverViewCard>
                </Col>
                <Col>
                  <OverViewCard>
                    <Title>Name</Title>
                    <SubTitle>Blessy Paul</SubTitle>

                    <Title>Class Division</Title>
                    <SubTitle>7B</SubTitle>

                    <Title>Roll No</Title>
                    <SubTitle>12</SubTitle>

                    <Title>Aadhaar Card</Title>
                    <SubTitle>43232543535312</SubTitle>

                    <Title>House Group</Title>
                    <SubTitle>Tagore</SubTitle>
                  </OverViewCard>
                </Col>
                <Col>
                  <OverViewCard>
                    <Title>Admission No</Title>
                    <SubTitle>198781</SubTitle>

                    <Title>Date of Birth</Title>
                    <SubTitle>19/09/2005</SubTitle>

                    <Title>Gender</Title>
                    <SubTitle>Female</SubTitle>

                    <Title>Blood Group </Title>
                    <SubTitle>B+</SubTitle>
                  </OverViewCard>
                </Col>
                <Col>
                  <ChartCard>
                    <ChartHeading>Attendance Report</ChartHeading>
                    <DoughnutChart>
                      <Chartleave>12% Leave</Chartleave>
                      <Doughnut data={data} />
                      <ChartAttendance>88% Attended</ChartAttendance>
                    </DoughnutChart>
                    <ChartFoot>
                      <ChartFootCol>
                        <ChartFootText>Attended class</ChartFootText>
                        <ChartFootAttendence>60</ChartFootAttendence>
                      </ChartFootCol>
                      <ChartFootCol>
                        <ChartFootText> Taken leaves</ChartFootText>
                        <ChartFootLeaves>7</ChartFootLeaves>
                      </ChartFootCol>
                    </ChartFoot>
                  </ChartCard>
                </Col>
              </Row>
              <Row>
                <Col>
                  <OverViewCard>
                    <MainTitle>Sibling Information </MainTitle>
                    <Title>Any sibling studying here?</Title>
                    <SubTitle>No</SubTitle>
                  </OverViewCard>
                </Col>
                <Col>
                  <OverViewCard>
                    <MainTitle> Transportation Information </MainTitle>
                    <Title>Transport type </Title>
                    <SubTitle>Private </SubTitle>
                  </OverViewCard>
                </Col>
                <Col>
                  <OverViewCard>
                    <MainTitle>Hostel Information</MainTitle>
                    <Title>Using hostel factiliy</Title>
                    <SubTitle>No</SubTitle>
                  </OverViewCard>
                </Col>
              </Row>
            </div>
          )}

          {activeKey === "link-2" && (
            <ParentDiv>
              <StyledRow>
                <HeadingRow>
                  {" "}
                  <ParentMainTitle>Father’s Details</ParentMainTitle>
                </HeadingRow>
                <Col>
                  <ParentTitle>Father’s Name</ParentTitle>
                  <ParentSubTitle>George Lucus</ParentSubTitle>
                </Col>

                <Col>
                  <ParentTitle>Designation </ParentTitle>
                  <ParentSubTitle>Software Engineer</ParentSubTitle>
                </Col>

                <Col>
                  <ParentTitle>Email Address </ParentTitle>
                  <ParentSubTitle>George@gmail.com</ParentSubTitle>
                </Col>

                <Col>
                  <ParentTitle> Phone Number</ParentTitle>
                  <ParentSubTitle>+91 92323131134</ParentSubTitle>
                </Col>
              </StyledRow>

              <StyledRow>
                <HeadingRow>
                  <ParentMainTitle>Mother’s Details</ParentMainTitle>
                </HeadingRow>
                <Col>
                  <ParentTitle>Mother’s Name</ParentTitle>
                  <ParentSubTitle>George Lucus</ParentSubTitle>
                </Col>

                <Col>
                  <ParentTitle>Designation </ParentTitle>
                  <ParentSubTitle>Software Engineer</ParentSubTitle>
                </Col>

                <Col>
                  <ParentTitle>Email Address </ParentTitle>
                  <ParentSubTitle>George@gmail.com</ParentSubTitle>
                </Col>

                <Col>
                  <ParentTitle>Phone Number</ParentTitle>
                  <ParentSubTitle>+91 92323131134</ParentSubTitle>
                </Col>
              </StyledRow>

              <StyledRow>
                <HeadingRow>
                  <ParentMainTitle>Guardian’s Details</ParentMainTitle>
                </HeadingRow>
                <Col>
                  <ParentTitle>Guardian’s Name</ParentTitle>
                  <ParentSubTitle>George Lucus</ParentSubTitle>
                </Col>

                <Col>
                  <ParentTitle>Designation </ParentTitle>
                  <ParentSubTitle>Software Engineer</ParentSubTitle>
                </Col>

                <Col>
                  <ParentTitle>Email Address </ParentTitle>
                  <ParentSubTitle>George@gmail.com</ParentSubTitle>
                </Col>

                <Col>
                  <ParentTitle>Phone Number </ParentTitle>
                  <ParentSubTitle>+9192323131134</ParentSubTitle>
                </Col>
              </StyledRow>
            </ParentDiv>
          )}

          {activeKey === "link-3" && (
            <div>
              <FeeTable>
                <FeeHeading>
                  <FeeThead>Fees Name</FeeThead>
                  <FeeThead>Fee Amount</FeeThead>
                  <FeeThead>Remark</FeeThead>
                  <FeeThead>Due Date</FeeThead>
                  <FeeThead>Status </FeeThead>
                </FeeHeading>
                <FeeTbody>
                  {currentRows.map((data) => (
                    <FeeTrow key={data.id}>
                      <FeeTdata>{data.feesName}</FeeTdata>
                      <FeeTdata>{data.feeAmount}</FeeTdata>
                      <FeeTdata>{data.remark}</FeeTdata>
                      <FeeTdata>{data.dueDate}</FeeTdata>
                      <FeeTdata>
                        <StyledSpan
                          style={{
                            color:
                              data.status === "Paid"
                                ? "#0057FF"
                                : data.status === "Pending"
                                ? "#FF0000"
                                : "black",
                            backgroundColor:
                              data.status === "Paid"
                                ? "#C6DDFF"
                                : data.status === "Pending"
                                ? "#FFF2F2"
                                : "black",
                          }}
                        >
                          {data.status}
                        </StyledSpan>
                      </FeeTdata>
                    </FeeTrow>
              ))}
                </FeeTbody>
                <tfoot>
                  <tr>
                    <td colSpan="5">
                      <PaginationDiv>
                        <div>
                          <label htmlFor="pageSize">Page Size</label>
                          <select
                            value={rowsPerPage}
                            onChange={(e) => setRowsPerPage(e.target.value)}
                          >
                            <option value={5}>5</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                          </select>
                        </div>
                        <Pagination>
                          <FaAngleLeft
                            onClick={() => paginate(currentPage - 1)}
                            disabled={currentPage === 1}
                          />
                          <TextPagination>
                            Page{currentPage} of{" "}
                            {Math.ceil(feeData.length / rowsPerPage)}
                          </TextPagination>
                          <FaAngleRight
                            onClick={() => paginate(currentPage + 1)}
                            disabled={indexOfLastRow >= feeData.length}
                          />
                        </Pagination>
                      </PaginationDiv>
                    </td>
                  </tr>
                </tfoot>
             
              </FeeTable>
             

            </div>
          )}

          {activeKey === "link-4" && (
            <div>
              <ActivityTable>
                <FeeHeading>
                  <FeeThead>Activity</FeeThead>
                  <FeeThead>Level </FeeThead>
                  <FeeThead>Position</FeeThead>
                </FeeHeading>
                <FeeTbody>
                  {activityData.map((data) => {
                    let imageSrc;

                    switch (data.position) {
                      case "1st":
                        imageSrc = First;
                        break;
                      case "2nd":
                        imageSrc = Second;
                        break;
                      case "3rd":
                        imageSrc = Third;
                        break;
                      case "Participation":
                        imageSrc = Participation;
                        break;
                      default:
                        imageSrc = "";
                    }

                    return (
                      <FeeTrow key={data.id}>
                        <ActivityTdata>{data.activity}</ActivityTdata>
                        <ActivityTdata>{data.level}</ActivityTdata>
                        <ActivityTdata>
                          <PrizeImg src={imageSrc} alt="" />
                          {data.position}
                        </ActivityTdata>
                      </FeeTrow>
                    );
                  })}
                </FeeTbody>
              </ActivityTable>
            </div>
          )}

          {activeKey === "link-5" && (
            <div>
              <CommentCard>
                <CardHeader>
                  <CommentsHeading>Comments</CommentsHeading>
                  <CommentBtnDiv>
                    <CommentBtn>New</CommentBtn>
                    <CommentBtn>Old</CommentBtn>
                    <CommentBtn>Date</CommentBtn>
                  </CommentBtnDiv>
                </CardHeader>

                <ListGroup variant="flush">
                  <ListGrpItem>
                    <img src={Cmntprofile} alt="" />
                    <Comments>
                      <CommenterName> Jithin kumar</CommenterName>
                      <CommentedDate>12 Jan 2024</CommentedDate>
                    </Comments>
                    <Comment>
                      This student score above 95 percentage mark in annual exam
                    </Comment>
                  </ListGrpItem>

                  <ListGrpItem>
                    <img src={Cmntprofile} alt="" />
                    <Comments>
                      <CommenterName> Jithin kumar</CommenterName>
                      <CommentedDate>12 Jan 2024</CommentedDate>
                    </Comments>
                    <Comment>
                      This student score above 95 percentage mark in annual exam
                    </Comment>
                  </ListGrpItem>

                  <ListGrpItem>
                    <img src={Cmntprofile} alt="" />
                    <Comments>
                      <CommenterName> Jithin kumar</CommenterName>
                      <CommentedDate>12 Jan 2024</CommentedDate>
                    </Comments>
                    <Comment>
                      This student score above 95 percentage mark in annual exam
                    </Comment>
                  </ListGrpItem>
                </ListGroup>
              </CommentCard>
            </div>
          )}
        </Card.Body>
      </StudentView>
    </div>
  );
}

export default StudentsList;

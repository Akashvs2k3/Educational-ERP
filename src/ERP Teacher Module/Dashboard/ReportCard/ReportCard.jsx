import React from "react";
import {
  Content,
  ListCards,
  ListHeading,
  ListView,
  ListViewImg,
  ListViewItem,
  MainBackground,
  ProgresReport,
  ProgresReportHead,
  ReportHeading,
  SelectExam,
  TermButton,
  TermButtonsDiv,
} from "./ReportCardStyles";
import Profile from "../../assets/Profile.png";
import { Card } from "react-bootstrap";

function ReportCard() {
  const StudentList = [
    {
      StudentName: "John Doe",
    },
    {
      StudentName: "Jane Smith",
    },
    {
      StudentName: "Alice Johnson",
    },
    {
      StudentName: "Bob Brown",
    },
    {
      StudentName: "Emily Davis",
    },
    {
      StudentName: "Michael Wilson",
    },
    {
      StudentName: "Sophia Lee",
    },
    {
      StudentName: "David Martinez",
    },
  ];
  return (
    <MainBackground>
      <Content>
        <ListCards>
          <ListHeading>Student Name</ListHeading>
          <Card.Body>
            <ListView>
              {StudentList.map((data) => (
                <ListViewItem key={data.StudentName}>
                  <ListViewImg src={Profile} alt="" />
                  {data.StudentName}
                </ListViewItem>
              ))}
            </ListView>
          </Card.Body>
        </ListCards>
        <ProgresReport>
          <ProgresReportHead>
            <ReportHeading>Progress Report</ReportHeading>
            <TermButtonsDiv>
              <TermButton>Term 1</TermButton>
              <TermButton> Term 2</TermButton>
            </TermButtonsDiv>
            <SelectExam id="Exams" name="Exams">
              <option value="SA-1">Select Exam </option>
              <option value="SA-1">P 1 </option>
            </SelectExam>
          </ProgresReportHead>
        </ProgresReport>
      </Content>
    </MainBackground>
  );
}

export default ReportCard;

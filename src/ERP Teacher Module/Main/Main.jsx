import React from "react";

import ClassTeacher from "../Dashboard/StudentLists/ClassTeacher";

import Attendance from "../Dashboard/Attendance/Attendance";
import Marks from "../Dashboard/Marks/Marks";
import Transportation from "../Dashboard/Transportation/Transportation";
import LessonPlanner from "../Dashboard/LessonPlanner/LessonPlanner";
import ReportCard from "../Dashboard/ReportCard/ReportCard";
import Messages from "../Dashboard/Messages/Messages";
import Dashboard from "../Dashboard/Dashboard";
import HomeWork from "../Dashboard/HomeWork/HomeWork";
import Promotion from "../Dashboard/Promotion/Promotion";
import ExamTimetable from "../Dashboard/ExamTimetable/ExamTimetable";
import ClassTable from "../Dashboard/ClassTimetable/ClassTable";
import Profile from "../Profile/Profile";
import Leaves from "../Leaves/Leaves";
import HolisticReport from "../Dashboard/HolisticReport/HolisticReport";


function Main(activeComponent, Back) {
  return (
    <div>
      {activeComponent?.activeComponent === "attendance" && (
        <Attendance Back={Back} />
      )}
      {activeComponent?.activeComponent === "Mark" && <Marks />}
      {activeComponent?.activeComponent === "Transportation" && (
        <Transportation />
      )}
      {activeComponent?.activeComponent === "LessonPlanner" && (
        <LessonPlanner />
      )}
      {activeComponent?.activeComponent === "StudentList" && <ClassTeacher />}
      {activeComponent?.activeComponent === "ReportCard" && <ReportCard />}
      {activeComponent?.activeComponent === "Message" && <Messages />}
      {activeComponent?.activeComponent === "Homework" && <HomeWork />}
      {activeComponent?.activeComponent === "Promotion" && <Promotion />}
      {activeComponent?.activeComponent === "ExamTimetable" && (
        <ExamTimetable />
      )}
     {activeComponent?.activeComponent === "ClassTimetable" && (
        <ClassTable />
      )}
       {activeComponent?.activeComponent === "HolisticReport" && (
        <HolisticReport />
      )}
         {activeComponent?.activeComponent === "Profile" && <Profile/>}
         {activeComponent?.activeComponent === "Leave" && <Leaves/>}
      {activeComponent?.activeComponent === null && <Dashboard />}
    
    </div>
  );
}

export default Main;

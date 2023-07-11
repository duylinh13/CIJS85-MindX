import React, { useState } from "react";
import StudentTable from "./StudentTable";
import AddNewStudent from "./AddNewStudent";

import "./StudentManagement.css";

const studentMockData = [
  {
    studentName: "Paine",
    classCode: "12A9",
    math: 10,
    liter: 9,
    eng: 8,
    phy: 9,
    chem: 9.5,
    bio: 9.8,
  },
  {
    studentName: "Alice",
    classCode: "12A9",
    math: 9.5,
    liter: 9,
    eng: 8,
    phy: 9.8,
    chem: 7,
    bio: 10,
  },
  {
    studentName: "Brian",
    classCode: "12A9",
    math: 7,
    liter: 6.5,
    eng: 8,
    phy: 10,
    chem: 10,
    bio: 10,
  },
  {
    studentName: "Anna",
    classCode: "12A9",
    math: 9,
    liter: 9,
    eng: 8,
    phy: 9,
    chem: 9,
    bio: 10,
  },
  {
    studentName: "Lina",
    classCode: "12A9",
    math: 9,
    liter: 9,
    eng: 8,
    phy: 9,
    chem: 9,
    bio: 10,
  },
];

const StudentManagement = () => {
  const [studentList, setStudentList] = useState(studentMockData);

  const onAddStudentHandler = (newStudent) => {
    setStudentList([...studentList, newStudent]);
  };

  return (
    <div className="container">
      <h1 style={{ textAlign: "center" }}>Student Management</h1>
      <div className="student-controller">
        <AddNewStudent onAddStudent={onAddStudentHandler} />
      </div>
      <StudentTable studentList={studentList} />
    </div>
  );
};

export default StudentManagement;

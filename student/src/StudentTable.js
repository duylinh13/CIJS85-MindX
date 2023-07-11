import React from "react";
import Student from "./Student";

const StudentTable = (props) => {
  const { studentList, onEdit, onDelete } = props;

  const sortedList = [...studentList].sort((a, b) =>
    a.studentName.localeCompare(b.studentName)
  );

  const tableBody = sortedList.map((studentData, index) => {
    const studentIndex = index + 1; // Số thứ tự
    return (
      <Student
        key={index}
        studentData={studentData}
        studentIndex={studentIndex} // Truyền số thứ tự vào Student component
        onEdit={onEdit}
        onDelete={onDelete}
      />
    );
  });

  return (
    <div className="student-list">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Class</th>
            <th scope="col">Maths</th>
            <th scope="col">Literature</th>
            <th scope="col">English</th>
            <th scope="col">Physical</th>
            <th scope="col">Chemistry</th>
            <th scope="col">Biology</th>
            <th scope="col">GPA</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
};

export default StudentTable;

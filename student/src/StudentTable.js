import React from "react";
import Student from "./Student";

const StudentTable = (props) => {
  const { studentList } = props;

  const tableBody = studentList.map((studentData, index) => {
    return <Student key={index} studentData={studentData} />;
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
            <th scope="col">Physical</th>
            <th scope="col">Chemistry</th>
            <th scope="col">Biology</th>
          </tr>
        </thead>
        <tbody>{tableBody}</tbody>
      </table>
    </div>
  );
};

export default StudentTable;

import React from "react";

const Student = (props) => {
  const { studentData } = props;
  const { studentName, classCode, math, liter, phy, chem, bio } =
    studentData || {};
  return (
    <tr>
      <th scope="row">1</th>
      <td>{studentName}</td>
      <td>{classCode}</td>
      <td>{math}</td>
      <td>{liter}</td>
      <td>{phy}</td>
      <td>{chem}</td>
      <td>{bio}</td>
    </tr>
  );
};

export default Student;

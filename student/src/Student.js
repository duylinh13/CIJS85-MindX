// import React from "react";

// const Student = (props) => {
//   const { studentData } = props;
//   const { studentName, classCode, math, liter, phy, chem, bio } =
//     studentData || {};
//   return (
//     <tr>
//       <th scope="row">1</th>
//       <td>{studentName}</td>
//       <td>{classCode}</td>
//       <td>{math}</td>
//       <td>{liter}</td>
//       <td>{phy}</td>
//       <td>{chem}</td>
//       <td>{bio}</td>
//     </tr>
//   );
// };

// export default Student;

import React from "react";

const Student = (props) => {
  const { studentData, studentIndex, onEdit, onDelete } = props;
  const { studentName, classCode, math, liter, eng, phy, chem, bio } =
    studentData || {};
  return (
    <tr>
      <th scope="row">{studentIndex}</th> {/* Số thứ tự */}
      <td>{studentName}</td>
      <td>{classCode}</td>
      <td>{math}</td>
      <td>{liter}</td>
      <td>{eng}</td>
      <td>{phy}</td>
      <td>{chem}</td>
      <td>{bio}</td>
      <td>GPA</td> {/* Thêm phần tính GPA */}
      <td>
        <button onClick={() => onEdit(studentData)}>Edit</button>{" "}
        {/* Sửa học sinh */}
        <button onClick={() => onDelete(studentData)}>Delete</button>{" "}
        {/* Xóa học sinh */}
      </td>
    </tr>
  );
};

export default Student;

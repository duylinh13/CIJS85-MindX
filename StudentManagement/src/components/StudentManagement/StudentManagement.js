import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./StudentManagement.css";
import StudentTable from "../StudentTable/StudentTable";
import StudentForm from "../StudentForm/StudentForm";

import "./StudentManagement.css";
import { studentMockData } from "../../utils/mockData";
import { FILTER_OPTIONS } from "../../utils/constants";

const StudentManagement = () => {
  const [studentList, setStudentList] = useState(studentMockData);
  const [editingStudent, setEditingStudent] = useState({});

  const [sortOption, setSortOption] = useState(FILTER_OPTIONS.DEFAULT);

  const onAddStudentHandler = (student) => {
    const newStudent = {
      ...student,
      id: uuidv4(),
    };
    setStudentList([...studentList, newStudent]);
  };

  const onDeleteStudentHandler = (id) => {
    const filteredStudentList = studentList.filter(
      (student) => student.id !== id
    );
    setStudentList(filteredStudentList);
  };

  const onSelectEditingStudent = (id) => {
    const student = studentList.find((student) => student.id === id);
    setEditingStudent(student);
  };

  const onUpdateStudent = (updatingStudent) => {
    const updatingStudentIndex = studentList.findIndex(
      (student) => student.id === updatingStudent.id
    );
    const clonedStudentList = [...studentList];
    clonedStudentList[updatingStudentIndex] = updatingStudent;
    setStudentList(clonedStudentList);
  };

  const onSortOptionsChange = (e) => {
    setSortOption(e.target.value);
  };

  const calculateStudentGPA = (student) =>
    (
      (Number(student.math) + Number(student.chem) + Number(student.phy)) /
      3
    ).toFixed(1);

  // state: sortOption
  // state: studentList
  // => Mảng student đã được sắp xếp dựa vào sortOption
  const sortStudentList = (studentList, sortOption) => {
    let sortedStudentList = [...studentList];
    switch (+sortOption) {
      case FILTER_OPTIONS.GPA_ASCENDING: {
        sortedStudentList = studentList.sort(
          (studentA, studentB) =>
            calculateStudentGPA(studentA) - calculateStudentGPA(studentB)
        );
        break;
      }
      case FILTER_OPTIONS.GPA_DESCENDING: {
        sortedStudentList = studentList.sort(
          (studentA, studentB) =>
            calculateStudentGPA(studentB) - calculateStudentGPA(studentA)
        );
        break;
      }
      case FILTER_OPTIONS.A_TO_Z:
        sortedStudentList = studentList.sort((studentA, studentB) =>
          studentA.studentName
            .toLowerCase()
            .localeCompare(studentB.studentName.toLowerCase())
        );
        break;
      case FILTER_OPTIONS.Z_TO_A:
        sortedStudentList = studentList.sort((studentA, studentB) =>
          studentB.studentName
            .toLowerCase()
            .localeCompare(studentA.studentName.toLowerCase())
        );
        break;

      case FILTER_OPTIONS.DEFAULT:
      default:
        return studentList;
    }

    return sortedStudentList;
  };

  const sortedStudentValues = sortStudentList(studentList, sortOption);

  return (
    <div className="container">
      <h1 className="text-center">Dự án quản lý học sinh</h1>
      <StudentForm
        addNewStudent={onAddStudentHandler}
        updateStudent={onUpdateStudent}
        initialValues={editingStudent}
      />
      <div className="d-flex align-items-center justify-content-end gap-2 my-3">
        <select
          className="form-select filter-options"
          onChange={onSortOptionsChange}
          value={sortOption}
        >
          <option value={FILTER_OPTIONS.DEFAULT}>Sắp xếp</option>
          <option value={FILTER_OPTIONS.GPA_ASCENDING}>GPA tăng dần</option>
          <option value={FILTER_OPTIONS.GPA_DESCENDING}>GPA giảm dần</option>
          <option value={FILTER_OPTIONS.A_TO_Z}>Theo: A {"->"} Z</option>
          <option value={FILTER_OPTIONS.Z_TO_A}>Theo: Z -{">"} A</option>
        </select>
      </div>
      <StudentTable
        studentList={sortedStudentValues}
        deleteStudent={onDeleteStudentHandler}
        selectEditingStudent={onSelectEditingStudent}
      />
    </div>
  );
};

export default StudentManagement;

/*
  Props:
    - Được truyền từ component cha -> component con
    - Tham số mặc định của bất kì 1 component
    - READ ONLY (không thể thay đổi)
    - ReactJS => One way data binding 
    (dữ liệu truyền thông prosp => cha -> con)
*/

// Cách 2
// Rendering list react element
// let studentListElements = [];
// for (let i = 0; i < studentList.length; i++) {
//   const { studentName, classCode, math, phy, chem } = studentList[i];
//   studentListElements.push(
//     <Student
//       studentName={studentName}
//       classCode={classCode}
//       math={math}
//       phy={phy}
//       chem={chem}
//     />
//   );
// }

/*
  - Câu hỏi 1: Tại sao khi render 1 list react element cần có unique key
  - Câu hỏi 2: Shallow comparison của React khi cập nhật state  
  - Tìm hiểu trước:
    + Form trong ReactJS
    + Render tất cả những học sinh (DONE)
    + Thêm học sinh (với form) (DONE)
    + Chức năng Delete học sinh (DONE)
    + Sắp xếp học sinh theo GPA Tăng dần (DONE)
    + Sắp xếp học sinh theo GPA Giảm dần(DONE)
    + Sắp xếp học sinh theo A -> Z (DONE)
    + Sắp xếp học sinh theo Z -> A (DONE)
    + Cập nhật học sinh (làm sau khi học bài useEffect)

    Single source of truth


    A (state products [ ])
      B
        C
          D
            E
*/

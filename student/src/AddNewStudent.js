import React, { useState } from "react";

const initialState = {
  studentName: "",
  classCode: "",
  math: "",
  phy: "",
  chem: "",
  liter: "",
  bio: "",
};

const AddNewStudent = (props) => {
  const { onAddStudent } = props;
  const [student, setStudent] = useState(initialState);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    onAddStudent(student);
    setStudent(initialState);
  };

  return (
    <div className="my-3">
      <form onSubmit={onSubmitHandler}>
        <div className="row">
          <div className="col-6 mb-2">
            <div>
              <label htmlFor="studentName" className="form-label">
                Name
              </label>
              <input
                className="form-control"
                id="studentName"
                name="studentName"
                value={student.studentName}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="col-6 mb-2">
            <label htmlFor="classCode" className="form-label">
              Class
            </label>
            <input
              className="form-control"
              id="classCode"
              name="classCode"
              value={student.classCode}
              onChange={onChangeHandler}
            />
          </div>
          <div className="col-6 mb-2">
            <label htmlFor="math" className="form-label">
              Maths
            </label>
            <input
              className="form-control"
              id="math"
              type="number"
              name="math"
              value={student.math}
              onChange={onChangeHandler}
            />
          </div>
          <div className="col-6 mb-2">
            <label htmlFor="liter" className="form-label">
              Literature
            </label>
            <input
              className="form-control"
              id="liter"
              type="number"
              name="liter"
              value={student.liter}
              onChange={onChangeHandler}
            />
          </div>
          <div className="col-6 mb-2">
            <label htmlFor="phy" className="form-label">
              Physical
            </label>
            <input
              className="form-control"
              id="phy"
              type="number"
              name="phy"
              value={student.phy}
              onChange={onChangeHandler}
            />
          </div>
          <div className="col-6 mb-2">
            <label htmlFor="chem" className="form-label">
              Chemistry
            </label>
            <input
              className="form-control"
              id="chem"
              type="number"
              name="chem"
              value={student.chem}
              onChange={onChangeHandler}
            />
          </div>
          <div className="col-6 mb-2">
            <label htmlFor="bio" className="form-label">
              Biology
            </label>
            <input
              className="form-control"
              id="bio"
              type="number"
              name="bio"
              value={student.bio}
              onChange={onChangeHandler}
            />
          </div>
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Add New Student
        </button>
      </form>
    </div>
  );
};

export default AddNewStudent;

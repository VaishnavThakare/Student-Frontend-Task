import React, { useState } from "react";
import "./StudentList.css";

const StudentList = () => {
  const studentsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const students = [
    {
      Sr_No: "01",
      name: "Vaishnav",
      enrollmentNumber: "B20V0021020",
      userName: "abc@123",
      emailID: "vaishnav@mitaoe.ac.in",
    },
    {
      Sr_No: "02",
      name: "Om",
      enrollmentNumber: "B20V0241020",
      userName: "abc@123",
      emailID: "om@mitaoe.ac.in",
    },

    {
      Sr_No: "03",
      name: "Akshay",
      enrollmentNumber: "B20V5507720",
      userName: "abc@123",
      emailID: "akshay@mitaoe.ac.in",
    },
    {
      Sr_No: "04",
      name: "Vipul",
      enrollmentNumber: "B20V022920",
      userName: "abc@123",
      emailID: "vipul.@mitaoe.ac.in",
    },
    {
      Sr_No: "05",
      name: "Pratham",
      enrollmentNumber: "B20V0447020",
      userName: "abc@123",
      emailID: "pratham@mitaoe.ac.in",
    },
    {
      Sr_No: "06",
      name: "Akash",
      enrollmentNumber: "B24v0447990",
      userName: "abc@123",
      emailID: "akash@mitaoe.ac.in",
    },
    {
      Sr_No: "07",
      name: "Sumit",
      enrollmentNumber: "B20V1176420",
      userName: "abc@123",
      emailID: "sumit@mitaoe.ac.in",
    },
    {
      Sr_No: "08",
      name: "Vishal",
      enrollmentNumber: "B20V0433420",
      userName: "xyz",
      emailID: "vishal@mitaoe.ac.in",
    },
    {
      Sr_No: "09",
      name: "Praik",
      enrollmentNumber: "B20V0417320",
      userName: "abc@123",
      emailID: "pratik@mitaoe.ac.in",
    },
  ];

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const totalPages = Math.ceil(students.length / studentsPerPage);

  const renderTableRows = () => {
    return currentStudents.map((student, index) => (
      <tr key={index}>
        <td>{student.Sr_No}</td>
        <td>{student.name}</td>
        <td>{student.enrollmentNumber}</td>
        <td>{student.userName}</td>
        <td>{student.emailID}</td>
      </tr>
    ));
  };

  const renderPagination = () => {
    return (
      <div className="pagination">
        <button
          className="btnStudent"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <span>{currentPage}</span>
        <button
          className="btnStudent"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="parr">
      <h2 className="head">Students Data</h2>

      <div className="parentStudent parent">
        <table className="child">
          <tbody>
            <tr>
              <th>Sr.No</th>
              <th>Name</th>
              <th>Enrollment Number</th>
              <th>User Name</th>
              <th>Mail-ID</th>
            </tr>
            {renderTableRows()}
          </tbody>
        </table>
        {renderPagination()}
      </div>
      <div></div>

      <div></div>
    </div>
  );
};

export default StudentList;

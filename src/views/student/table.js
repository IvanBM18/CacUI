import React, { useEffect, useState } from 'react'
import StudentService from 'src/services/student/StudentService';
import { columns} from './data'
import { DataGrid } from '@mui/x-data-grid'
import { Container } from '@mui/material'
import {
  CButton,
} from '@coreui/react'
import StudentModal from './StudentModal'

const initStudent = {
  firstName: "",
  lastName: "",
  code: "",
  registerDate: "",
  email: "",
  group: "",
  codeProfiles: {
    codeForces: "",
    vjudge: "",
  }
}

const TablaAlumnos = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedMode, setSelectedMode] = useState(null);
  const [studentsForTable, setStudents] = useState([]);

  const handleCellClick = (params) => {
    setSelectedStudent(params.row);
    setSelectedMode("Update");
    setIsOpen(!isOpen)
  };

  const closeStudentModal = (student) => {
    setIsOpen(false);
    console.log(student);
    if(student){
      if(selectedMode === "Create"){
        student.studentId = -1;
        setStudents([...studentsForTable, student]);
        StudentService.add(student);
      }
      if(selectedMode === "Update"){
        setStudents(studentsForTable.map(s => s.studentId === student.studentId ? student : s));
        StudentService.edit(student);
      }
      console.log(student);
    }
    setSelectedStudent(initStudent);
  }


  const handleAddButton = () => {
    setSelectedStudent(initStudent);
    setSelectedMode("Create");
    setIsOpen(!isOpen)
  };

  //CRUD Clase
  let props={
    student: selectedStudent,
    onClose: closeStudentModal,
    mode: selectedMode,
    footer: null
  }

  async function getAllStudents(){
    console.log("Getting all students")
    const studentResults = await StudentService.getAll();
    setStudents(studentResults);
    console.log("Students: ", studentResults);
  }

  useEffect(() => {
    getAllStudents()
  }, [])


  return (
    <Container style={{ width: '100%' }} className='justify-content-end'>
      <div className="d-flex justify-content-end mb-3">
        <CButton color="primary" onClick={handleAddButton}> + Agregar Alumno</CButton> 
      </div>
      <DataGrid
        rows={studentsForTable}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        autoHeight
        onCellClick={handleCellClick}
        getRowId={(row) => row.studentId}
      />
      

      {isOpen && <StudentModal mode={selectedMode} onClose={props.onClose} student={props.student} />}
    
    </Container>
  );
};

export default TablaAlumnos;



import React from 'react'

import { students, columns} from './data'
import { useState } from 'react'
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
  refister_date: "",
}

const TablaAlumnos = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedMode, setSelectedMode] = useState(null);
  const [tableStudents, setStudents] = useState(students);

  const handleCellClick = (params) => {
    setSelectedStudent(params.row);
    setSelectedMode("Update");
    setIsOpen(!isOpen)
  };

  const closeStudentModal = (student) => {
    setIsOpen(false);
    if(student){
      if(selectedMode === "Create"){
        setStudents([...tableStudents, student]);
      }
      if(selectedMode === "Update"){
        setStudents(tableStudents.map(s => s.id === student.id ? student : s));
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

  return (
    <Container style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={tableStudents}
        columns={columns}
        pageSize={5}
        onCellClick={handleCellClick}
        rowsPerPageOptions={[5]}
        //checkboxSelection
        //disableSelectionOnClick
      />
      <div className="d-flex justify-content-end mt-3">
       <CButton color="primary" onClick={handleAddButton}> + Agregar Alumno</CButton> 
      </div>

      {isOpen && <StudentModal onClose={props.onClose} student={props.student} />}
    
    </Container>
  );
};

export default TablaAlumnos;



import React from 'react'

import { students, columns} from './data'
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Container } from '@mui/material'
import {
  CButton,
} from '@coreui/react'
import StudentModal from './StudentModal1'

const TablaAlumnos = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [slectedMode, setSelectedMode] = useState(null);

  //CRUD Clase
  let props={
    student: selectedStudent,
    onClose: () => setIsOpen(!isOpen),
    mode: slectedMode,
    footer: null
  }

  const handleCellClick = (params) => {
    setSelectedStudent(params.row);
    setSelectedMode("Update");
    setIsOpen(!isOpen)
  };


  const handleAddButton = () => {
    setSelectedStudent({
      firstName: "",
      lastName: "",
      code: "",
      refister_date: "",
    });
    setSelectedMode("Create");
    setIsOpen(!isOpen)
  };

  

  return (
    <Container style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={students}
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



import React from 'react'

import { columns} from './data'
import { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Container } from '@mui/material'
import {
  CButton,
} from '@coreui/react'
import StudentService from 'src/services/student/StudentService';
import AttendanceService from 'src/services/attendance/AttendanceService';



const TablaAsistencia = () => {

  const [studentsForTable, setStudents] = useState([]);
  const [selectedClassId, setSelectedClassId] = useState('');
  const [selectedClassName, setSelectedClassName] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);

  
  const handleSubmit = (newSelection) => {
    console.log("ID:", selectedClassId);
    console.log("Clase:", selectedClassName);
    const selectedIds = newSelection.selectionModel; // Array de ids seleccionados
    setSelectedRows(selectedIds);
    console.log('IDs seleccionados:', selectedIds); // Imprimir los IDs seleccionados
    //AttendanceService.add(student);
  }

  const ReadClass = () => {
      // Obtén la URL actual
    const currentUrl = window.location.href;
    console.log("url:", currentUrl);

    const match = currentUrl.match(/\/lista\/([^/]+)\/([^/]+)/);
    const id = match[1];
    const name = decodeURIComponent(match[2]);

    setSelectedClassId(id);
    setSelectedClassName(name);

    console.log("ID:", id);
    console.log("Clase:", name);
  }

  async function getAllStudents(){
    console.log("Getting all students")
    const studentResults = await StudentService.getAll();
    setStudents(studentResults);
    console.log("Students: ", studentResults);
  }
  
  useEffect(() => {
    getAllStudents()
    ReadClass()
    
  }, [])


  return (
    <Container style={{ width: '100%' }}>
      <h2 style={{ textAlign: 'left', marginBottom: '20px' }}>
        {selectedClassName || 'Sin clase seleccionada'}
      </h2>
      <DataGrid
        rows={studentsForTable}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        autoHeight
        getRowId={(row) => row.studentId}
      />

      <div className="d-flex justify-content-end mt-3">
       <CButton color="primary" href="#/asistencia" onClick={handleSubmit}> Finalizar </CButton> 
      </div>
      
    </Container>
  );
};

export default TablaAsistencia;



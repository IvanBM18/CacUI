import React from 'react'

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
  const [selectedIds, setSelectedIds] = useState([]);

  
  const handleSubmit = (student) => {
    console.log("ID:", selectedClassId);
    console.log("Clase:", selectedClassName);

    try {
      selectedIds.forEach((studentId) => {
        AttendanceService.registerAttendance(null,studentId,selectedClassId);
        console.log("datos: ", null, studentId, selectedClassId);
        console.log(`Attendance recorded for student with ID: ${studentId}`);
      });

      console.log('Attendance submission complete.');
    } catch (error) {
      console.error('Error during attendance submission:', error);
    }
  }

  const ReadClass = () => {
      // Obtén la URL actual
    const currentUrl = window.location.href;
    console.log("url:", currentUrl);

    const match = currentUrl.match(/\/lista\/([^/]+)\/([^/]+)/);
    const id = parseInt(match[1]);
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
  

  const columns = [
    { 
      field: 'checkbox', 
      headerName: '', 
      width: 100, 
      renderCell: (params) => (
        <input
          type="checkbox"
          checked={selectedIds.includes(params.row.studentId)}
          onChange={(e) => handleCheckboxChange(e, params.row.studentId)}
          style={{ transform: 'scale(1.5)', marginTop: '20' , marginLeft: '20' }}
        />
      ),
    },
    { field: 'siiauCode', headerName: 'Codigo', flex: 1 },
    { field: 'firstName', headerName: 'Nombre', flex: 1  },
    { field: 'lastName', headerName: 'Apellido', flex: 1 },
    { field: 'email', headerName: 'Correo', flex: 2 },
  
    
  ]

  const handleCheckboxChange = (e, studentId) => {
    if (e.target.checked) {
      setSelectedIds((prevIds) => [...prevIds, studentId]);
      console.log(`Selected ID: ${studentId}`);
    } else {
      setSelectedIds((prevIds) => prevIds.filter((selectedId) => selectedId !== studentId));
      console.log(`Deselected ID: ${studentId}`);
    }
  };

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
       // checkboxSelection
        autoHeight
        getRowId={(row) => row.studentId}
       // onSelectionModelChange={handleSelectionChange}
      />

      <div className="d-flex justify-content-end mt-3">
       <CButton color="primary" href="#/asistencia" onClick={handleSubmit}> Finalizar </CButton> 
      </div>
      
    </Container>
  );
};

export default TablaAsistencia;



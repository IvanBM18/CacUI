import React from 'react'
import CheckIcon from '@mui/icons-material/Check'; // Importa el icono de palomita
//import { rows, columns} from './data'
import { clases } from '../courses/data'
import { students } from '../student/data'
import { attendances} from './data'
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Container } from '@mui/material'

import {
  CButton,
} from '@coreui/react'

import StudentModal from './AsistenciasModal'

// Función para obtener el nombre de la clase desde su ID
const getClassName = (classId) => {
  const foundClass = clases.find((cls) => cls.class_id === classId);
  return foundClass ? foundClass.name : 'Unknown Class';
};

// Función para comprobar si el estudiante asistió a una clase
const checkAttendance = (studentId, classId) => {
  return attendances.some((attendance) => attendance.studentId === studentId && attendance.classId === classId);
};

// Crear las columnas dinámicamente basado en las clases
const columns = [
  { field: 'studentName' , headerName: 'Nombre del Estudiante', width: 200 },
  ...clases.map((cls) => ({
    field: `class_${cls.class_id}`,
    headerName: cls.name,
    width: 150,
    renderCell: (params) => {
      return params.value ? (
        <div
          style={{
            color: 'white',
            backgroundColor: 'rgba(144, 238, 144, 0.4)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <CheckIcon /> 
        </div>
      ) : ('');
    },
  })),
];

// Crear las filas combinando datos de estudiantes y asistencias
const rows = students.map((student) => {
  const row = { id: student.id,
    studentName: `${student.firstName}  ${student.lastName}`};

  // Para cada clase, comprobamos si el estudiante asistió
  clases.forEach((cls) => {
    row[`class_${cls.class_id}`] = checkAttendance(student.id, cls.class_id);
  });

  return row;
});



const TablaAsistencias = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [slectedMode, setSelectedMode] = useState(null);
  
  let props={
    student: selectedStudent,
    onClose: () => setIsOpen(!isOpen),
    mode: slectedMode,
    footer: null
  }

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

  const [isOpenStudent, setIsOpenStudent] = useState(false)

  return (
    <Container style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      <div className="d-flex justify-content-end mt-3">
      <CButton color="primary" onClick={handleAddButton}> + Agregar Alumno</CButton>
      </div>    

      {isOpen && <StudentModal onClose={props.onClose} student={props.student} />}
    </Container>
  );
};

export default TablaAsistencias;



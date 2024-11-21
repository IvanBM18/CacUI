import React from 'react'
import CheckIcon from '@mui/icons-material/Check'; // Importa el icono de palomita
//import { rows, columns} from './data'
//import { students } from '../student/data'
import { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Container } from '@mui/material'
import StudentService from 'src/services/student/StudentService';
import SubjectService from 'src/services/subject/SubjectService';
import AttendanceService from 'src/services/attendance/AttendanceService';
import AsistenciasModal from './AsistenciasModal';

import {
  CButton,
} from '@coreui/react'
import ImportModal from './ImportModal';


// Función para obtener el nombre de la clase desde su ID
const getClassName = (classId) => {
  const foundClass = subjectsForTable.find((cls) => cls.classId === classId);
  return foundClass ? foundClass.name : 'Unknown Class';
};





const TablaAsistencias = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [openImport, setOpenImport] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [slectedMode, setSelectedMode] = useState(null);
  const [attendancesForTable, setAttendances] = useState([]);
  const [subjectsForTable, setSubjects] = useState([]);
  const [studentsForTable, setStudents] = useState([]);

  async function getAllAttendances(){
    console.log("Getting all Attendances")
    const attendanceResults = await AttendanceService.getAbsAll();
    setAttendances(attendanceResults);
    console.log("Attendances: ", attendanceResults);
  }
  async function getAllStudents(){
    console.log("Getting all students")
    const studentResults = await StudentService.getAbsAll();
    setStudents(studentResults);
    console.log("Students: ", studentResults);
  }
  async function getAllSubjects(){
    console.log("Getting all subjects")
    const subjectResults = await SubjectService.getAbsAll();
    setSubjects(subjectResults);
    console.log("Subjects: ", subjectResults);
  }

  useEffect(() => {
    getAllAttendances()
    getAllStudents()
    getAllSubjects()
  }, [])

  // Función para comprobar si el estudiante asistió a una clase
  const checkAttendance = (studentId, classId) => {
    return attendancesForTable.some((attendance) => attendance.studentId === studentId && attendance.classId === classId);
  };


  // Crear las columnas dinámicamente basado en las clases
  const columns = [
    { field: 'studentName' , headerName: 'Nombre del Estudiante', width: 200 },
    ...subjectsForTable.map((cls) => ({
      field: `class_${cls.classId}`,
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
  const rows = studentsForTable.map((student) => {
    const row = { id: student.studentId,
      studentName: `${student.firstName}  ${student.lastName}`};

    // Para cada clase, comprobamos si el estudiante asistió
    subjectsForTable.forEach((cls) => {
      row[`class_${cls.classId}`] = checkAttendance(student.studentId, cls.classId);
    });

    return row;
  });
  
  let props={
    student: selectedStudent,
    onClose: () => setIsOpen(!isOpen),
    mode: slectedMode,
    footer: null
  }

  const handleAddButton = () => {
    console.log(subjectsForTable);
    setIsOpen(!isOpen)
  };


  const handleImportButton = () => {
    setOpenImport(!openImport)
  }


  return (
    <Container style={{ width: '100%' }} className='justify-content-end'>
      <h1>Asistencias</h1>
      <div className="d-flex justify-content-end mb-3 gap-4">
        <CButton color="warning" onClick={handleImportButton}> Importar Asistencia</CButton>
        <CButton color="primary" onClick={handleAddButton}> + Tomar Asistencia</CButton>
      </div>  
      <DataGrid
        autoHeight
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        density='compact'
      />
      {openImport && <Import onClose={() => setOpenImport(!openImport) } />}
      {isOpen && <AsistenciasModal onClose={props.onClose} student={props.student} />}
    </Container>
  );
};

export default TablaAsistencias;



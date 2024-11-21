import {DefaultModal} from 'src/components/DefaultModal.js'
import { CForm,
  CFormLabel,
  CFormInput,
  CFormText,
  CRow,
  CCol,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CButton,
  CCardText,
 } from '@coreui/react';
//import { clases } from '../courses/data';
import { useEffect, useState } from 'react';
import StudentService from 'src/services/student/StudentService';
import SubjectService from 'src/services/subject/SubjectService';
import QRCode from 'qrcode';

const AsistenciasModal = (props) => {

  const [selectedClassId, setSelectedClassId] = useState('');
  const [selectedSchedule, setSelectedSchedule] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMode, setSelectedMode] = useState('');
  const [subjectsForTable, setSubjects] = useState([]);
  const [studentsForTable, setStudents] = useState([]);



  const handleChange = (event) => {
    const classId = event.target.value;
    setSelectedClassId(classId);
    const selectedClass = subjectsForTable.find(clase => clase.classId === parseInt(classId));
    setSelectedSchedule(selectedClass ? selectedClass.getGroupId === 0 ? 'Basicos' : 'Intermedios' : '');
    setSelectedDay(selectedClass ? selectedClass.classDate : '');
  };

  const handleMode = (event) => {
    const Mode = event.target.value;
    setSelectedMode(Mode);
  };

  async function getAllStudents(){
    console.log("Getting all students")
    const studentResults = await StudentService.getAll();
    setStudents(studentResults);
    console.log("Students: ", studentResults);
  }

  async function getAllSubjects(){
    console.log("Getting all subjects")
    try{
      const subjectResults = await SubjectService.getSubjectsWithoutClass();
      console.log("Subjects: ", subjectResults);
      setSubjects(subjectResults);
    }catch(e){
      console.log("Error getting subjects: ", e);
      setSubjects([]);
    }
  }

  useEffect(() => {
    getAllStudents()
    getAllSubjects()
  }, [])

  const handleButton = (event) => {
    if(subjectsForTable.length === 0){
      alert('No hay clases disponibles');
      return;
    }
    console.log(selectedClassId);
    console.log(selectedSchedule);
    console.log(selectedDay);
    console.log(selectedMode);
    const selectedClass = subjectsForTable.find(clase => clase.classId === parseInt(selectedClassId));
    if(selectedMode === 'lista'){
      window.location.href = `#/lista/${selectedClass.classId}/${selectedClass.name}`;
    }
     
    else{
      const newWindow = window.open("", "_blank");
      const qrData = `${window.location.origin}/#/qr/${selectedClass.classId}`;
    
      QRCode.toDataURL(qrData, { width: 300 }, (err, url) => {
        if (err) {
          console.error(err);
          return;
        }

      // Escribir el contenido HTML en la nueva ventana incluyendo el código QR
      newWindow.document.write(`
        <html>
          <head>
            <title>${selectedClass.name}</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background-color: #f0f0f0;
              }
              h1 {
                color: #333;
                font-size: 3rem;
                text-align: center;
              }
              img {
                margin-top: 20px;
              }
            </style>
          </head>
          <body>
            <h1>${selectedClass.name}</h1>
            <p1>${selectedSchedule}</p1>
            <p1>${selectedDay}</p1>
            <img src="${url}" alt="Código QR" />
          </body>
        </html>
      `);
    });
  }
    

  };

  return (
    <DefaultModal
    title={'Modalidad asistencia'}
      onClose={props.onClose}> 
        <CCol> 
          <CRow>
          <CFormSelect
            label="Clase"
            value={selectedClassId}
            onChange={handleChange}
          >
            <option value="" disabled>
              Selecciona una clase
            </option>
            {subjectsForTable && subjectsForTable.map(clase => (
              <option key={clase.classId} value={clase.classId}>
                {clase.name}
                
              </option>
            ))}
          </CFormSelect>
          {selectedSchedule  && (
            <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
              <strong> Grupo:</strong> {selectedSchedule}
              <strong> Dia:</strong> {selectedDay}
            </div>
          )}
            <CFormSelect
              label="Modo"
              value={selectedMode}
              onChange={handleMode}
              disabled={!selectedClassId}
            >
              <option value="" disabled>
              Selecciona un modo
            </option>
              <option value='qr'>QR</option>
              <option value='lista'>Lista Manual</option>
            </CFormSelect>
          </CRow>
          <CRow >
            <CButton
              color="primary" 
              disabled={!selectedMode}
              style={{ marginTop: '20px' }}
              onClick={handleButton}
              >
            Tomar Asistencia
          </CButton>
          </CRow>
          
          
        </CCol>
    </DefaultModal>
  )
}

export default AsistenciasModal;
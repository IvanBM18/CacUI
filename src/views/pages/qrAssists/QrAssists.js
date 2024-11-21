import React, { useEffect } from 'react'
import {
  CAlert,
  CButton,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCheckCircle } from '@coreui/icons'
import { useParams } from 'react-router-dom'
import SubjectService from '../../../services/subject/SubjectService'
import StudentModal from '../../student/StudentModal'
import Student from '../../../services/student/models/Student'
import {formatDateForReact} from 'src/utils/date/DateUtils'
import StudentService from '../../../services/student/StudentService'
import AttendanceService from '../../../services/attendance/AttendanceService'
import { formatDate } from '../../../utils/date/DateUtils'

const QrAssists = () => {

  const {id} = useParams();
  const [subject, setSubject] = React.useState('');
  const [siiauCode, setSiiauCode] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [showAlert, setShowAlert] = React.useState(false);
  const [alertType, setAlertType] = React.useState('');
  const [alertMessage, setAlertMessage] = React.useState('');

  async function getSubject(id){
    setLoading(true);
    const targetSubject = await SubjectService.getSubject(id);
    if(!targetSubject){
      console.log("Error getting subject");
      setLoading(false);
      setSubject("");
      return;
    }
    console.log(targetSubject);
    setSubject(targetSubject.name);
    setLoading(false);
  }

  const registerAssist = async (studentId) => {
    AttendanceService.registerAttendance({studentId: studentId, classId: id}).then(() => {
      setAlertMessage("Asistencia Registrada")
      setAlertType('success')
    }).catch((e) => { 
      console.log("Error registering attendance: ", e);
      setAlertType('danger');
      setAlertMessage('Error al registrar asistencia, el codigo ingresado ya se registro');
    }).finally(() => setShowAlert(true));
}

  const handleSubmit = async (event) => {
    event.preventDefault();
    const student = await StudentService.getByCode(siiauCode);
    if(student.studentId !== null) registerAssist(student.studentId);
    else setShowModal(true);
  }

  const onCloseModal = async (student) => {
    let dbStudent = null;
    if(student.firstName !== "" && student.lastName !== ""){
      student.registerDate = formatDate(student.registerDate ? student.registerDate : new Date().toUTCString());
      dbStudent = await StudentService.uploadNewStudent(student)
      console.log('Student to register: ', dbStudent);
      if(dbStudent.studentId != null){
        registerAssist(dbStudent.studentId);
      } 
    }
    setShowModal(false);
  }



  useEffect(() => {
    getSubject(id);
  }, []);

  return (
    <>
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      {showModal && <StudentModal
        mode = "Create"
        student ={new Student(-1,"","",siiauCode,formatDateForReact(new Date().toUTCString()),"") }
        onClose = {onCloseModal}
      />}
      <CContainer>
        <CRow className="justify-content-center">
        <CCol md={6}>
          {isLoading 
            ? <h1>Cargando...</h1> 
            : subject 
              ? <>
                <div className="clearfix">
                    <h1 className="float-start display-3 me-4">{subject}</h1>
                </div>
                <p className="text-body-secondary float-start">
                  Ingresa tu codigo para marcar tu asistencia
                </p>
                <CForm onSubmit={handleSubmit}>
                <CInputGroup className="input-prepend">
                  <CInputGroupText>
                    <CIcon icon={cilCheckCircle} />
                  </CInputGroupText>
                  <CFormInput type="text" placeholder="XXXXXXXXX" onChange={(e) => setSiiauCode(e.target.value)}/>
                  <CButton color="primary" type='submit'>Registrar</CButton>
                </CInputGroup>
                <CAlert dismissible color={alertType} visible={showAlert} onClose={() => setShowAlert(false)} >
                  {alertMessage} 
                </CAlert>
                </CForm>
              </>
              :<h1>QR Invalido</h1>
          }
          </CCol>
        </CRow>
      </CContainer>
    </div>
    </>
  )
}

export default QrAssists
import React, { useEffect } from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCheckCircle } from '@coreui/icons'
import { useParams } from 'react-router-dom'
import SubjectService from '../../../services/subject/SubjectService'

const QrAssists = () => {

  const {id} = useParams();
  const [subject, setSubject] = React.useState('');
  const [siiauCode, setSiiauCode] = React.useState('');
  const [isLoading, setLoading] = React.useState(false);

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

  const registerAssist = () => {
    console.log(siiauCode);
  }

  useEffect(() => {
    getSubject(id);
  }, []);

  return (
    <>
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
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
                <CInputGroup className="input-prepend">
                  <CInputGroupText>
                    <CIcon icon={cilCheckCircle} />
                  </CInputGroupText>
                  <CFormInput type="text" placeholder="XXXXXXXXX" onChange={(e) => setSiiauCode(e.target.value)}/>
                  <CButton color="primary" onClick={registerAssist}>Registrar</CButton>
                </CInputGroup>
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
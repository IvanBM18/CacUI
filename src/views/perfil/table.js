import React from 'react'
import { useState } from 'react'

import {
  CAvatar,
  CBadge,
  CCard,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardHeader,
  CCardBody,
  CButton,
} from '@coreui/react';
import CIcon from '@coreui/icons-react'
import {
  cilPeople,
} from '@coreui/icons'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import DataPerfil from './data';
import PerfilModal from './PerfilModal';
import { students } from '../student/data';

const TablaPerfil = () => {
  const [isOpenStudent, setIsOpenStudent] = useState(false)

  let props={
    student: {
      photo: avatar3,
      user: "Luis Martinez",
      code: "219747661",
      refister_date: "Jan 1, 2023",
      email: "luis.martinez@alumnos.udg.mx",
      password: "pass456",
    },
    onClose: () => setIsOpenStudent(!isOpenStudent),
    mode: "Update",
    footer: null
  }
  
  return (
    <>
      <CCard>
        <CCardBody>
            <CAvatar size="xl" src={props.student.photo} />
        </CCardBody>
      </CCard>

      <CCard>
        <CCardBody>
          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableBody>
              <CTableRow>
                <CTableDataCell><strong>Usuario:  </strong> {props.student.user}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell><strong>Correo:  </strong>{props.student.email}</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableDataCell><strong>Contrasena:  </strong>******</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>          
        </CCardBody>
      </CCard>

      <CCard>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <CButton color="primary" onClick={() => setIsOpenStudent(!isOpenStudent)}>Modificar Perfil</CButton>
        </div>

        {isOpenStudent && <PerfilModal onClose={props.onClose} student={props.student} />}

      </CCard>
    </>
  )
}

export default TablaPerfil;
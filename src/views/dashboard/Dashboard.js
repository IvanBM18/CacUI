import { useEffect, useState } from 'react'
import React from 'react'

import {
  CAvatar,
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibTwitter,
  cilCloudDownload,
} from '@coreui/icons'


import MainChart from './MainChart'
import TablaAlumnos from '../student/table'

const Dashboard = () => {

  const [testStudent, setTestStudent] = useState()
  const [isOpenStudent, setIsOpenStudent] = useState(false)


  //TODO: Eliminar esto
  let props={
    onClose: () => setIsOpenStudent(!isOpenStudent),
    mode: "Update",
    footer: null
  }

  return (
    <>
    {/* <CButton color="primary" onClick={() => setIsOpenStudent(!isOpenStudent)}>Launch demo STUDENT</CButton>
    {isOpenStudent && <StudentModal onClose={props.onClose} student={testStudent} mode={props.mode}/>} */}
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Asistencias
              </h4>
              <div className="small text-body-secondary">Calendario 2024a</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Mensual'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Mensual'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChart />
        </CCardBody>
      </CCard>
      <TablaAlumnos />
    </>
  )
}

export default Dashboard

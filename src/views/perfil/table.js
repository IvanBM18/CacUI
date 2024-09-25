import React from 'react'
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
import DataPerfil from './data';

const TablaPerfil = () => {
 
  return (
    <>
      <CCard>
        <CCardBody>
          {DataPerfil.map((item) => (
            <CAvatar size="xl" src={item.avatar.src} status={item.avatar.status} />
          ))}
        </CCardBody>
      </CCard>

      <CCard>
        <CCardBody>
          {DataPerfil.map((item) => (
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell><strong>Usuario:  </strong> {item.user.name}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell><strong>Correo:  </strong>{item.user.name}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell><strong>Contrasena:  </strong>{item.user.name}</CTableDataCell>
                </CTableRow>
              </CTableBody>
            </CTable>
          ))}
          
        </CCardBody>
      </CCard>

      <CCard>
        <CCardBody>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CButton color="primary" href="#"> Go somewhere </CButton>
        </div>
        </CCardBody>
      </CCard>
    </>
  )
}

export default TablaPerfil;
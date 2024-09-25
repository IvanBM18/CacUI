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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilPeople,
} from '@coreui/icons'

import DataSettings from './data'

const ShowData = () => {

  return (
    <>
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Alumno</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Grupo
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Asistencias</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Codigo
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Carrera</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {DataSettings.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-body-secondary text-nowrap">
                          <span>{item.user.new ? 'Nuevo' : 'Recurrente'}</span> | Registrado en:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        {item.group && (
                          <CBadge color={item.group.color} className="ms-auto">
                            {item.group.name}
                          </CBadge>
                        )}
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="d-flex justify-content-between text-nowrap">
                          <div className="fw-semibold">{item.usage.value}%</div>
                          <div className="ms-3">
                            <small className="text-body-secondary">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        {item.code}
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="fw-semibold text-nowrap">{item.activity}</div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default ShowData;
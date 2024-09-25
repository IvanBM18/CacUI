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


import DataAlumnos from './data'

//import { DataGrid } from '@mui/x-data-grid';
//import { Container } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Nombre', width: 150 },
  { field: 'age', headerName: 'Edad', type: 'number', width: 110 },
  { field: 'email', headerName: 'Correo', width: 200 },
];

const rows = [
  { id: 1, name: 'Juan Pérez', age: 28, email: 'juan@example.com' },
  { id: 2, name: 'María López', age: 34, email: 'maria@example.com' },
  { id: 3, name: 'Carlos Sánchez', age: 45, email: 'carlos@example.com' },
  { id: 4, name: 'Ana Gómez', age: 22, email: 'ana@example.com' },
];

// const TablaAlumnos = () => {
//   return (
//     <Container style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//         disableSelectionOnClick
//       />
//     </Container>
//   );
// };

// export default TablaAlumnos;

const TablaAlumnos = () => {

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
                  {DataAlumnos.map((item, index) => (
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

export default TablaAlumnos;


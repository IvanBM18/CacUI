import React from 'react'

import { students, columns} from './data'
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Container } from '@mui/material'
import {
  CButton,
} from '@coreui/react'

const TablaAlumnos = () => {


  return (
    <Container style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={students}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <div className="d-flex justify-content-end mt-3">
       <CButton color="primary" href="#/asistencia"> Finalizar </CButton> 
      </div>
    
    </Container>
  );
};

export default TablaAlumnos;



import React from 'react'

import { students, columns} from './data'
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Container } from '@mui/material'
import {
  CButton,
} from '@coreui/react'

const TablaAsistencia = () => {


  return (
    <Container style={{ width: '100%' }}>
      <div className="d-flex justify-content-end mb-3">
       <CButton color="primary" href="#/asistencia"> Finalizar </CButton> 
      </div>
      <DataGrid
        rows={students}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        autoHeight
      />
      
    
    </Container>
  );
};

export default TablaAsistencia;



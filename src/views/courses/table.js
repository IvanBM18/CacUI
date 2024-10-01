import React from 'react'

import { clases, columns} from './data'
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Container } from '@mui/material'
import {
  CButton,
} from '@coreui/react'
import ClaseModal from './ClaseModal'


const TablaClases = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedRow, setSelectedRow] = useState(null);
  const [slectedMode, setSelectedMode] = useState(null);

  //CRUD Clase
  let props={
    row: selectedRow,
    onClose: () => setIsOpen(!isOpen),
    mode: slectedMode,
    footer: null
  }

  const handleCellClick = (params) => {
    setSelectedRow(params.row);
    setSelectedMode("Update");
    setIsOpen(!isOpen)
  };

  const handleAddButton = () => {
    setSelectedRow({
      name: '',
      admin: '', id: null ,
      dia: '', hora: '',
      subtemas: []
    });
    setSelectedMode("Create");
    setIsOpen(!isOpen)
  };
  


  return (
    <Container style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={clases}
        columns={columns}
        pageSize={5}
        onCellClick={handleCellClick}
      />
      <div className="d-flex justify-content-end mt-3">
       <CButton color="primary" onClick={handleAddButton}> + Agregar Clase</CButton> 
      </div>
      
      {isOpen && <ClaseModal onClose={props.onClose} row={props.row} />}

    </Container>
    
  );
};

export default TablaClases;



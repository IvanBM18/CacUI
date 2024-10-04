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
  const [selectMode, setSelectedMode] = useState('Create');
  const [tableClases, setClases] = useState(clases);

  const [selectedRowId, setSelectedRowId] = React.useState(null);

  const onClose = (subject) =>{
    if(subject){
      if(selectMode === "Create"){
        subject.id = tableClases.length + 1;
        subject.class_id = tableClases.length + 1;
        setClases([...tableClases, subject]);
      }
    }
    setIsOpen(false);
  }

  //CRUD Clase
  let props={
    row: selectedRow,
    onClose: onClose,
    mode: selectMode,
    footer: null
  }

  const handleCellClick = (params) => {
    setSelectedRow(params.row);
    setSelectedMode("Update");
    setIsOpen(!isOpen)
  };

  const handleAddButton = () => {
    setSelectedRow({
      class_id: null,
      name: '',
      admin: '',
      dia: '', hora: '',
      subtemas: []
    });
    setSelectedMode("Create");
    setIsOpen(!isOpen)
  };


  return (
    <Container style={{ width: '100%' }}>
      <div className="d-flex justify-content-end mb-3">
       <CButton color="primary" onClick={handleAddButton}> + Agregar Clase</CButton> 
      </div>
      <DataGrid
        autoHeight
        rows={tableClases}
        columns={columns}
        pageSize={5}
        onCellClick={handleCellClick}
        getRowId={(row) => row.class_id} // Especifica que el identificador es class_id
      />
      
      
      {isOpen && <ClaseModal onClose={props.onClose} row={props.row} mode={selectMode}/>}

    </Container>
    
  );
};

export default TablaClases;



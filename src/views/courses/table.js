import React from 'react'

import { rows, columns} from './data'
import { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Container } from '@mui/material'
import { Modal, Box, Typography, Button } from '@mui/material';
import {
  CButton,
} from '@coreui/react'
import ClaseModal from './ClaseModal'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const TablaClases = () => {
  const [isOpen, setIsOpen] = useState(false)
  //const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  //CRUD Clase
  let props={
    row: selectedRow,
    onClose: () => setIsOpen(!isOpen),
    mode: "Update",
    footer: null
  }

  const handleCellClick = (params) => {
    setSelectedRow(params.row);
    setIsOpen(!isOpen)
  };


  return (
    <Container style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        onCellClick={handleCellClick}
      />
      {isOpen && <ClaseModal onClose={props.onClose} row={props.row} />}

    </Container>
    
  );
};

export default TablaClases;



import React from 'react'

import { rows, columns} from './data'

import { DataGrid } from '@mui/x-data-grid'
import { Container } from '@mui/material'


const TablaClases = () => {
  return (
    <Container style={{ height: 600, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </Container>
  );
};

export default TablaClases;



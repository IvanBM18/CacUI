
import React from 'react'
import {columns} from './constants'
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';

const CodeProfileTable = (props) => {
  return (
    <>
      <Container style={{width: '100%' }}>
        <DataGrid
          loading={props.isLoading}
          autoHeight
          rows={props.rows} 
          columns={columns}
          disableSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: {
                page: 0,
                pageSize: 20,
              },
            },
          }}
          paginationMode={props.pagination ?? "client"}
          rowCount={props.rowCount}
          pageSizeOptions={[20]}
          autosizeOnMount
          getRowId={(row) => row.codeProfileId}
          onPaginationModelChange={(params) => {
            if(props.onPageChange){
              props.onPageChange(params);
            }else {
              console.log("no page change function");
            }
          }}
        />
      </Container>
    </>
  )
}

export default CodeProfileTable
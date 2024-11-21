import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/material";
import { columns } from "./constants";

const SubmissionsTable = (props) => {
  
  return (
    <>
      <Container style={{width: '100%' }}>
        <DataGrid
          loading={props.isLoading}
          autoHeight
          rows={props.submissions} 
          columns={columns}
          density="compact"
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
          rowCount={props.size}
          pageSizeOptions={[20]}
          autosizeOnMount
          getRowId={(row) => row.submissionId}
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
  );
};

export default SubmissionsTable;
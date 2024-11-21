import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/material";
import { columns } from "./constants";

const SubmissionsTable = (props) => {
  
  return (
    <>
      <Container style={{width: '100%' }}>
        <DataGrid
          loading={props.isLoading ?? false}
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
          paginationMode="server"
          rowCount={props.size}
          pageSizeOptions={[20]}
          autosizeOnMount
          getRowId={(row) => row.submissionId}
          onPaginationModelChange={(params) => {
            if(props.onPageChange){
              props.onPageChange(params);
            }
            console.log("No onPageChange function provided: ",params);
          }}
        />
      </Container>
    </>
  );
};

export default SubmissionsTable;
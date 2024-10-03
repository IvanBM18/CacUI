import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/material";
import { columns } from "./constants";

const SubmissionsTable = (props) => {
  return (
    <>
      <Container style={{ height: 600, width: '100%' }}>
        <DataGrid
          rows={props.submissions}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Container>
    </>
  );
};

export default SubmissionsTable;
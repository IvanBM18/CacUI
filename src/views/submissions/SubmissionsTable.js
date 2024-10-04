import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Container } from "@mui/material";
import { columns } from "./constants";

const SubmissionsTable = (props) => {
  let studentId = props.student_id;
  console.log("Submissions: ", props.submissions);
  return (
    <>
      <Container style={{width: '100%' }}>
        <DataGrid
          autoHeight
          rows={props.submissions}
          columns={columns}
          density="compact"
          hideFooter
          disableSelectionOnClick
        />
      </Container>
    </>
  );
};

export default SubmissionsTable;
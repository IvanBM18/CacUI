
import React, {useState} from 'react'
import {columns} from './constants'
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import StudentService from '../../services/student/StudentService';
import StudentModal from '../student/StudentModal';

const initStudent = {
    studentId: -1,
    firstName: "",
    lastName: "",
    siiauCode: "",
    email: "",
    registerDate: "",
}

const initCodeProfile = {
  student: initStudent,
  codeProfileId: 0,
  platform:"CodeForces",
  identifier: "",
}

const CodeProfileTable = (props) => {

  const [selectedProfile, setSelectedProfile] = useState(initCodeProfile);
  const [selectedMode, setSelectedMode] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleCellClick = (params) => {
    console.log(params.row);

    setSelectedProfile(params.row);
    if(params.row.student && params.row.student.studentId != -1){ 
      params.row.student.identifier = params.row.identifier;
      setSelectedMode("Update");
    }else {
      params.row.student = initStudent;
      params.row.student.identifier = params.row.identifier;
      setSelectedProfile(params.row);
      setSelectedMode("Create");
    }
    setIsOpen(!isOpen)
  };

  const closeStudentModal = async (student) => {
    setIsOpen(false);
    if(student){
      selectedProfile.student = student;
      if(selectedMode === "Create"){
        setSelectedProfile(selectedProfile);
        let result = await StudentService.add(student);
        student.studentId = result.studentId;
        selectedProfile.student = student;
      }
      if(selectedMode === "Update"){
        setSelectedProfile(selectedProfile);
      }
      console.log(student);
    }
    setSelectedProfile(initCodeProfile);
  }

  return (
    <>
      <Container style={{width: '100%' }}>
        {isOpen && <StudentModal student={selectedProfile.student} mode={selectedMode} onClose={closeStudentModal}/>}
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
          onCellClick={handleCellClick}
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
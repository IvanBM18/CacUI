import React from 'react'
import SubjectService from 'src/services/subject/SubjectService';
import { columns} from './data'
import { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid'
import { Container } from '@mui/material'
import {CButton} from '@coreui/react'
import ClaseModal from './ClaseModal'


const initSubject = {
  classId: null,
  name:  "",
  description:  "",
  classDate:  "",
  groupId: 0,
  professorId: 0,
}

const TablaClases = () => {

  const [isOpen, setIsOpen] = useState(false)
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedMode, setSelectedMode] = useState(null);
  const [subjectsForTable, setSubjects] = useState([]);


  const handleCellClick = (params) => {
    setSelectedSubject(params.row);
    console.log(params.row.name)
    setSelectedMode("Update");
    setIsOpen(!isOpen)
  };

  const closeClaseModal = (subject) => {
    setIsOpen(false);
    if(subject){
      if(selectedMode === "Create"){
        subject.classId = subjectsForTable.length + 1;
        setSubjects([...subjectsForTable, subject]);
        SubjectService.add(subject);
      }
      if(selectedMode === "Update"){
        setSubjects(subjectsForTable.map(s => s.id === subject.id ? subject : s));
        SubjectService.edit(subject);
      }
      console.log(subject);
    }
    setSelectedSubject(initSubject);
  }

  const handleAddButton = () => {
    setSelectedSubject(initSubject);
    setSelectedMode("Create");
    setIsOpen(!isOpen)
  };

  //CRUD Clase
  let props={
    subject: selectedSubject,
    onClose: closeClaseModal,
    mode: selectedMode,
    footer: null
  }

  async function getAllSubjects(){
    console.log("Getting all subjects")
    const subjectResults = await SubjectService.getAll();
    setSubjects(subjectResults);
    console.log("Subjects: ", subjectResults);
  }

  useEffect(() => {
    getAllSubjects()
  }, [])


  return (
    <Container style={{ width: '100%' }}>
      <div className="d-flex justify-content-end mb-3">
       <CButton color="primary" onClick={handleAddButton}> + Agregar Clase</CButton> 
      </div>
      <DataGrid
        autoHeight
        rows={subjectsForTable}
        columns={columns}
        pageSize={5}
        onCellClick={handleCellClick}
        getRowId={(row) => row.classId} // Especifica que el identificador es classId 
      />
      
      
      {isOpen && <ClaseModal mode={selectedMode} onClose={props.onClose} subject={props.subject} />}

    </Container>
    
  );
};

export default TablaClases;



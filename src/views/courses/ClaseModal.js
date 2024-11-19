import {DefaultModal} from 'src/components/DefaultModal.js'
import { CForm,
  CFormLabel,
  CFormInput,
  CFormText,
  CRow,
  CCol,
  CInputGroup,
  CInputGroupText,
  CFormSelect,
  CButton,
  CFormTextarea,
 } from '@coreui/react';

import { useState } from 'react';

const ClaseModal = (props) => {
  const [isFormInvalid, setInvalidated] = useState(false);
  const [subject, setSubject] = useState(props.subject);
  const [textoLista, setTextoLista] = useState(props.subtemas);

  let mode = props.mode;
  let title = mode === "Create" ? "Agregar Clase" : subject.name ;

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(subject);
    if(!event.currentTarget.checkValidity()){
      console.log("Form not valid");
      setInvalidated(true);
      return;
    }
    console.log("Form submitted");
    setInvalidated(false);
    props.onClose(subject);
  }
  
  return (
    <DefaultModal
      title={title}
      onClose={props.onClose}>
        <CForm
          className="row g-3 needs-validation"
          noValidate
          validated={isFormInvalid}
          onSubmit={handleSubmit}
        >
        {mode === "Create" && 
          <CRow className='mt-2 mb-2'>
            <CCol>
              <CFormInput 
                label="Nombre de la Clase"
                id='SubjectName'
                placeholder="Nombre de la Clase"
                onChange={(e) => setSubject({...subject, name: e.target.value})}
                required
              />
            </CCol>
          </CRow>
        }  
        <CRow className="mt-2 mb-2">
          <CFormLabel htmlFor='SubjectTeacher'>Instructor</CFormLabel>
          <CInputGroup className="" >
            <CFormInput 
              id='SubjectTeacher'
              defaultValue={subject.professorId ?? ""}
              placeholder="Instructor" 
              onChange={(e) => setSubject({...subject, professorId: e.target.value})}
              />
          </CInputGroup>
        </CRow>
        <CRow className="mt-2 mb-2">
          <CCol >
            <CFormInput
              type="date"
              defaultValue={subject.classDate ?? ""}
              id="StudentInputRegisterDate"
              label="Fecha de Clase"
              required
              onChange={(e) => setSubject({...subject, classDate: e.target.value})}
            />
          </CCol>
        </CRow>
        <CRow className="mt-2 mb-2">
          <CCol>
            <CFormTextarea
              type="text"
              defaultValue={subject.description ?? ""}
              id="StudentInputLastName"
              label="Subtemas"
              rows={5}
              onChange={(e) => setSubject({...subject, description: [...subject.description, e.target.value]})}
            />
          </CCol>
        </CRow>
        <CRow className="justify-content-end">
            <CButton color={mode === "Create" ? "success" : "primary"} type="submit">
              {mode === "Create" ? "Agregar" : "Modificar"}
            </CButton>
        </CRow>
        </CForm>
    </DefaultModal>
  )
}

export default ClaseModal;
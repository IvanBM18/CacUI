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
        <CRow className='mt-2 mb-2'>
          <CCol>
            <CFormInput 
              label="Nombre de la Clase"
              id='SubjectName'
              defaultValue={subject.name ?? ""}
              placeholder="Nombre de la Clase"
              onChange={(e) => setSubject({...subject, name: e.target.value})}
              required
            />
          </CCol>
        </CRow>
        <CRow className="mt-2 mb-2">
          <CCol xs={5}> 
              <CFormSelect
                id="SubjectInputGroup"
                label="Grupo"
                placeholder="Selecciona..." 
                required
                value={subject.groupId ? subject.groupId: "Seleciona..."}
                onChange={(e) => setSubject({...subject, groupId: parseInt(e.target.value)})}
              >
                <option value= {0} >Basicos</option>
                <option value={1}>Intermedios</option>
              </CFormSelect>
          </CCol>
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
              defaultValue={subject.description ?? ""}
              id="StudentInputLastName"
              label="Descripcion"
              onChange={(e) => setSubject({...subject, description: e.target.value})}
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
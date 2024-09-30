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
 } from '@coreui/react';

import { useState } from 'react';

const ClaseModal = (props) => {
  const [isFormInvalid, setInvalidated] = useState(false);
  const [row, setRow] = useState(props.row);

  let mode = props.mode;
  let title = mode === "Create" ? "Agregar Estudiante" : row.firstName + " " + row.lastName;

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(row);
    if(!event.currentTarget.checkValidity()){
      console.log("Form not valid");
      setInvalidated(true);
      return;
    }
    console.log("Form submitted");
    setInvalidated(false);
  }
  
  return (
    <DefaultModal
      title={row.name}
      onClose={props.onClose}>
        <CForm
          className="row g-3 needs-validation"
          noValidate
          validated={isFormInvalid}
          onSubmit={handleSubmit}
        >
        <CRow className="mt-2 mb-2">
          <CFormLabel htmlFor='StudentInputEmail'>Instructor</CFormLabel>
          <CInputGroup className="" >
            <CFormInput 
              id='StudentInputEmail'
              defaultValue={row.admin ?? ""}
              placeholder="Instructor" 
              onChange={(e) => setStudent({...row, admin: e.target.value})}
              />
          </CInputGroup>
        </CRow>
        <CRow className="mt-2 mb-2">
          <CCol >
            <CFormInput
              type="date"
              defaultValue={row.dia ?? ""}
              id="StudentInputRegisterDate"
              label="Fecha de Clase"
              required
              onChange={(e) => setStudent({...row, dia: e.target.value})}
            />
          </CCol>
          <CCol>
              <CFormInput
                type="time"
                defaultValue={row.hora ?? ""}
                id="StudentInputLastName"
                label="Hora"
                onChange={(e) => setStudent({...row, hora: e.target.value})}
                required
              />
          </CCol>
        </CRow>
        <CRow className="mt-2 mb-2">
          <CFormLabel htmlFor='StudentInputEmail'>Subtemas</CFormLabel>
          <div>
              <ul>
                {row.subtemas.map((subtemas, index) => (
                  <li key={index}>{subtemas}</li>
                ))}
              </ul>
            </div>
        </CRow>
        <CRow className="justify-content-end">
          <CCol md={{span: 3,offset: 8 }} >
            <CButton color={mode === "Create" ? "success" : "primary"} type="submit">
              {mode === "Create" ? "Agregar" : "Modificar"}
            </CButton>
          </CCol>
        </CRow>
        </CForm>
    </DefaultModal>
  )
}

export default ClaseModal;
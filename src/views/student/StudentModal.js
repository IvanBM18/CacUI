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

const StudentModal = (props) => {
  const [isFormInvalid, setInvalidated] = useState(false);
  const [student, setStudent] = useState(props.student);

  let mode = props.mode;
  let title = mode === "Create" ? "Agregar Estudiante" : student.firstName + " " + student.lastName;

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(student);
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
      title={student.firstName + " " + student.lastName}
      onClose={props.onClose}>
        <CForm
          className="row g-3 needs-validation"
          noValidate
          validated={isFormInvalid}
          onSubmit={handleSubmit}
        >
          <CRow className='justify-content-around mt-2 mb-2'>
            <CCol>
              <CFormInput
                type="text"
                defaultValue={student.firstName ?? ""}
                id="StudentInputFirstName"
                label="Nombre"
                required
                onChange={(e) => setStudent({...student, firstName: e.target.value})}
              />
            </CCol>
            <CCol>
              <CFormInput
                type="text"
                defaultValue={student.lastName ?? ""}
                id="StudentInputLastName"
                label="Apellido(s)"
                onChange={(e) => setStudent({...student, lastName: e.target.value})}
                required
              />
            </CCol>
          </CRow>
        <CRow className="mt-2 mb-2">
          <CFormLabel htmlFor='StudentInputEmail'>Correo</CFormLabel>
          <CInputGroup className="" >
            <CFormInput 
              id='StudentInputEmail'
              defaultValue={student.email ?? ""}
              placeholder="Correo Institucional" 
              onChange={(e) => setStudent({...student, email: e.target.value + "@alumnos.udg.mx"})}
              />
            <CInputGroupText>@alumnos.udg.mx</CInputGroupText>
          </CInputGroup>
        </CRow>
        <CRow className="mt-2 mb-2">
          <CCol xs={7}> 
            <CFormInput
              type="text"
              defaultValue={student.code ?? ""}
              id="StudentInputCode"
              label="Codigo"
              placeholder="XXXXXXXXX" 
              required
              onChange={(e) => setStudent({...student, code: e.target.value})}
            />
          </CCol>
          <CCol xs={5}> 
            <CFormSelect
              defaultValue={student.code ?? ""}
              id="StudentInputCode"
              label="Codigo"
              placeholder="XXXXXXXXX" 
              required
              value={student.group?? "Seleciona..."}
              onChange={(e) => setStudent({...student, group: e.target.value})}
              
            >
              <option value="">Selecciona...</option>
              <option value="Basicos">Basicos</option>
              <option value="Intermedios">Intermedios</option>
            </CFormSelect>
          </CCol>
        </CRow>
        <CRow className="mt-2 mb-2">
          <CCol >
            <CFormInput
              type="date"
              defaultValue={student.register_date ?? ""}
              id="StudentInputRegisterDate"
              label="Fecha de Registro"
              required
              onChange={(e) => setStudent({...student, register_date: e.target.value})}
            />
          </CCol>
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

export default StudentModal;
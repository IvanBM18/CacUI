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


const PerfilModal = (props) => {
  const [isFormInvalid, setInvalidated] = useState(false);
  const [student, setStudent] = useState(props.student);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordChanged, setIsPasswordChanged] = useState(false);

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

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordChanged(true); // Cambia el estado si se cambia la contraseña
  };
  


  return (
    <DefaultModal
      title={student.user}
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
                defaultValue={student.user ?? ""}
                id="StudentInputFirstName"
                label="Usuario"
                required
                onChange={(e) => setStudent({...student, firstName: e.target.value})}
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
              onChange={(e) => setStudent({...student, correo: e.target.value + "@alumnos.udg.mx"})}
              />
            <CInputGroupText>@alumnos.udg.mx</CInputGroupText>
          </CInputGroup>
        </CRow>
      
        <CRow className="mt-2 mb-2">
          <CCol >
            <CFormInput
              type="text"
              defaultvalue={student.password ?? ""}
              id="Password"
              label="Password"
              required
              onChange={handlePasswordChange}
            />
            {isPasswordChanged && (
          <CFormInput
            type="password"
            label="Confirmar Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
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

export default PerfilModal;
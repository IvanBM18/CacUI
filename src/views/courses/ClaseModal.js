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

const initSubject = { 
  class_id: -1,
  name: '', admin: '',
  dia: '', hora: '',
  subtemas: [
  ]
}

const ClaseModal = (props) => {
  const [isFormInvalid, setInvalidated] = useState(false);
  const [row, setRow] = useState(props.row);
  const [textoLista, setTextoLista] = useState(props.subtemas);

  let mode = props.mode;
  let title = mode === "Create" ? "Agregar Clase" : row.name ;

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
    props.onClose(row);
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
                onChange={(e) => setRow({...row, name: e.target.value})}
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
              defaultValue={row.admin ?? ""}
              placeholder="Instructor" 
              onChange={(e) => setRow({...row, admin: e.target.value})}
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
              onChange={(e) => setRow({...row, dia: e.target.value})}
            />
          </CCol>
          <CCol>
              <CFormInput
                type="time"
                defaultValue={row.hora ?? ""}
                id="StudentInputLastName"
                label="Hora"
                onChange={(e) => setRow({...row, hora: e.target.value})}
                required
              />
          </CCol>
        </CRow>
        <CRow className="mt-2 mb-2">
          <CCol>
            <CFormTextarea
              type="text"
              defaultValue={row.subtemas.join(',\n') ?? ""}
              id="StudentInputLastName"
              label="Subtemas"
              rows={5}
              onChange={(e) => setRow({...row, subtemas: [...row.subtemas, e.target.value]})}
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
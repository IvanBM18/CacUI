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
  CCardText,
 } from '@coreui/react';
import { clases } from '../courses/data';
import { useState } from 'react';

const AsistenciasModal = (props) => {

  const [selectedValue, setSelectedValue] = useState('');
  const [selectedClassId, setSelectedClassId] = useState('');
  const [selectedSchedule, setSelectedSchedule] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedMode, setSelectedMode] = useState('');


  // Manejar el cambio en el select
  const handleChange = (event) => {
    const classId = event.target.value;
    setSelectedClassId(classId);
    // Buscar la clase seleccionada y actualizar el horario
    const selectedClass = clases.find(clase => clase.class_id === parseInt(classId));
    setSelectedSchedule(selectedClass ? selectedClass.hora : '');
    setSelectedDay(selectedClass ? selectedClass.dia : '');
  };

  const handleMode = (event) => {
    const Mode = event.target.value;
    setSelectedMode(Mode);
  };

  const handleButton = (event) => {
    console.log(selectedClassId);
    console.log(selectedSchedule);
    console.log(selectedDay);
    console.log(selectedMode);

  };

  return (
    <DefaultModal
    title={'Modalidad asistencia'}
      onClose={props.onClose}> 
        <CCol xs={10}> 
          <CRow>
          <CFormSelect
            label="Clase"
            value={selectedClassId}
            onChange={handleChange}
          >
            <option value="" disabled>
              Selecciona una clase
            </option>
            {clases.map(clase => (
              <option key={clase.class_id} value={clase.class_id}>
                {clase.name}
              </option>
            ))}
          </CFormSelect>
          {selectedSchedule  && (
            <div style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }}>
              <strong> Horario:</strong> {selectedSchedule}
              <strong> Dia:</strong> {selectedDay}
            </div>
          )}
            <CFormSelect
              label="Modo"
              value={selectedMode}
              onChange={handleMode}
              disabled={!selectedClassId}
            >
              <option value="" disabled>
              Selecciona un modo
            </option>
              <option value='qr'>QR</option>
              <option value='lista'>Lista Manual</option>
              <option value='faceid'>Face ID</option>
            </CFormSelect>
          </CRow>
          <CRow >
            <CButton
              color="primary" 
              disabled={!selectedMode}
              style={{ marginTop: '20px' }}
              onClick={handleButton}
              >
            Tomar Asistencia
          </CButton>
          </CRow>
          
          
        </CCol>
    </DefaultModal>
  )
}

export default AsistenciasModal;
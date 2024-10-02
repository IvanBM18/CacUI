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
import QRCode from 'qrcode';

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
    const selectedClass = clases.find(clase => clase.class_id === parseInt(selectedClassId));
    const newWindow = window.open("", "_blank");
    if(selectedMode === 'lista'){
      newWindow.document.write(`
        <html>
          <head>
            <title>${selectedClass.name}</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background-color: #f0f0f0;
              }
              h1 {
                color: #333;
                font-size: 3rem;
                text-align: center;
              }
              input {
                padding: 10px;
                font-size: 1rem;
                margin-top: 20px;
                width: 250px;
                text-align: center;
              }
              button {
                margin-top: 20px;
                padding: 10px 20px;
                font-size: 1rem;
                background-color: #4CAF50;
                color: white;
                border: none;
                cursor: pointer;
              }
              button:hover {
                background-color: #45a049;
              }
            </style>
          </head>
          <body>
            <h1>${selectedClass.name}</h1>
            <p1>${selectedClass.hora}</p1>
            <p1>${selectedClass.dia}</p1>
            <input type="text" id="codigo" placeholder="Ingrese código" />
            <button onclick="submitCode()">Enviar código</button>
  
            <script>
              function submitCode() {
                const code = document.getElementById('codigo').value;
                if (code) {
                  alert('Código ingresado: ' + code);
                } else {
                  alert('Por favor, ingrese un código');
                }
              }
            </script>
          </body>
        </html>
      `);
    } else{
      const qrData = `Clase: ${selectedClass.name}, ID: ${selectedClass.class_id}`;
    
      QRCode.toDataURL(qrData, { width: 300 }, (err, url) => {
        if (err) {
          console.error(err);
          return;
        }

      // Escribir el contenido HTML en la nueva ventana incluyendo el código QR
      newWindow.document.write(`
        <html>
          <head>
            <title>${selectedClass.name}</title>
            <style>
              body {
                font-family: Arial, sans-serif;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
                background-color: #f0f0f0;
              }
              h1 {
                color: #333;
                font-size: 3rem;
                text-align: center;
              }
              img {
                margin-top: 20px;
              }
            </style>
          </head>
          <body>
            <h1>${selectedClass.name}</h1>
            <img src="${url}" alt="Código QR" />
          </body>
        </html>
      `);
    });
  }
    

  };

  return (
    <DefaultModal
    title={'Modalidad asistencia'}
      onClose={props.onClose}> 
        <CCol> 
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
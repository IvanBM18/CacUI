import {DefaultModal} from 'src/components/DefaultModal.js'
import { 
  CButton,
  CCol,
  CForm,
  CRow,
  CSpinner,
 } from '@coreui/react';
import React, { useState } from 'react'
import ExcelService from '../../services/file/ExcelService';

const ImportModal = (props) => {

  const [file, setFile] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) {
      alert("Por favor selecciona un archivo");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    let result = await ExcelService.uploadFile(formData);
    setLoading(false);
  };

  return (
    <>
      <DefaultModal
      title={'Importar asistencia'}
      onClose={props.onClose}> 
        <CCol> 
          <CForm onSubmit={handleSubmit} className="row g-3 needs-validation mt-4" noValidate>
          {isLoading ? <CSpinner color="info" className='align-self-center' /> 
            : <CRow className='justify-content-around mb-2'> <input type="file" onChange={handleFileChange} /> </CRow> }
          <CRow> <CButton type="submit" color='warning' >Subir archivo</CButton> </CRow> 
          </CForm>
        </CCol>
      </DefaultModal>
    </>
  )
}

export default ImportModal
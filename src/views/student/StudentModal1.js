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
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
  CSpinner,
  CAccordionButton
} from '@coreui/react';

import { testData } from '../../services/ai/constants';
import RegressionService from '../../services/ai/regressionService';
import Regression3DPlot from '../../components/graphics/Regression3DPlot';
import { useState } from 'react';
import RegressionUtils from '../../services/ai/RegressionUtils';
import RegressionData from '../../services/ai/models/regressionData';

const StudentModal = (props) => {
  const [isFormInvalid, setInvalidated] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [student, setStudent] = useState(props.student);
  const [regressionData, setRegressionData] = useState(new RegressionData());

  let mode = props.mode;
  let title = mode === "Create" ? "Agregar Estudiante" : student.firstName + " " + student.lastName;

  async function getPrediction(data) {
    const result = await RegressionService.getPrediction(data);
    return result;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(student);
    if(!event.currentTarget.checkValidity()){
      console.log("Form not valid");
      setInvalidated(true);
      return;
    }
    setInvalidated(false);
  }

  const performPrediction = async () => {
    setLoading(true);
    const reggresionData = RegressionUtils.mapContestsToRegressionData(testData);
    reggresionData.setResult(await getPrediction(testData));
    setRegressionData(reggresionData);
    setLoading(false);
  }
  


  return (
    <DefaultModal
      size = "lg"
      title={title}
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
              defaultValue={student.correo ?? ""}
              placeholder="Correo Institucional" 
              onChange={(e) => setStudent({...student, correo: e.target.value + "@alumnos.udg.mx"})}
              />
            <CInputGroupText>@alumnos.udg.mx</CInputGroupText>
          </CInputGroup>
        </CRow>
        <CRow className="mt-2 mb-2">
          <CCol xs={7}> 
            <CFormInput
              type="text"
              defaultValue={student.id ?? ""}
              id="StudentInputCode"
              label="Codigo"
              placeholder="XXXXXXXXX" 
              required
              onChange={(e) => setStudent({...student, id: e.target.value})}
            />
          </CCol>
          <CCol xs={5}> 
            <CFormSelect
              defaultValue={student.id ?? ""}
              id="StudentInputCode"
              label="Grupo"
              placeholder="XXXXXXXXX" 
              required
              value={student.group?? ""}
              onChange={(e) => setStudent({...student, group: e.target.value})}
            >
              <option value="">Selecciona...</option>
              <option value='Basico'>Basicos</option>
              <option value='Intermedio'>Intermedios</option>
              <option value='Avanzado'>Avanzados</option>
            </CFormSelect>
          </CCol>
        </CRow>
        <CRow className="mt-2 mb-2">
          <CCol >
            <CFormInput
              type="date"
              defaultValue={student.registerDate ?? ""}
              id="StudentInputRegisterDate"
              label="Fecha de Registro"
              required
              onChange={(e) => setStudent({...student, registerDate: e.target.value})}
            />
          </CCol>
        </CRow>
        <CAccordion className='mt-2 mb-2'>
          <CAccordionItem>
            <CAccordionHeader onClick={() => performPrediction(testData) }>Regresion Personalizada</CAccordionHeader>
            <CAccordionBody className=''>  
              <CRow className='justify-content-center'> 
                {isLoading 
                ? <CSpinner color="info" className='align-self-center' />
                : <Regression3DPlot title="Problemas Resueltos para el proximo Contest" data={regressionData} />
                }
              </CRow>
            </CAccordionBody>
          </CAccordionItem>
        </CAccordion>
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
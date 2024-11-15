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
  CAccordionButton,
  CCallout
} from '@coreui/react';

import { testData } from '../../services/ai/constants';
import RegressionService from '../../services/ai/regressionService';
import Regression3DPlot from '../../components/graphics/Regression3DPlot';
import { useState } from 'react';
import RegressionUtils from '../../services/ai/RegressionUtils';
import RegressionData from '../../services/ai/models/regressionData';
import ContestService from '../../services/contest/ContestService';
import SubmissionsTable from '../submissions/SubmissionsTable';
import { mockData } from '../submissions/constants';

const StudentModal = (props) => {
  
  const [isFormInvalid, setInvalidated] = useState(false);
  const [student, setStudent] = useState(props.student);
  const [submissions, setSubmissions] = useState([]);

  const [isLoading, setLoading] = useState(true);
  const [regressionData, setRegressionData] = useState(new RegressionData());
  
  let reggresionEnabled = RegressionUtils.isStudentReadyForRegression(regressionData);
  let mode = props.mode;
  let isPredicitionEnabled = mode !== "Create";
  let title = mode === "Create" ? "Agregar Estudiante" : student.firstName + " " + student.lastName;

  async function getPrediction(data) {
    const result = await RegressionService.getPrediction(data);
    return result;
  }

  async function getSubmissions(){
    if(student.siiauCode === "219747662"){
      setSubmissions(mockData);
    }
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
    props.onClose(student);
    setInvalidated(false);
  }

  const performPrediction = async () => {
    setLoading(true);
    let resultForEachContest = await ContestService.getStudentSubmissions(student);
    if(!resultForEachContest || resultForEachContest.length <= 5 ){
      console.warn("Something happened retrieving students results")
      setLoading(false);
      return;  
    }
    try{
      let summarizedContests = [...resultForEachContest.values()];

      let plotInput = RegressionUtils.getAvgsFromContests(summarizedContests);
      let prediction = await getPrediction(plotInput);
      
      plotInput.setResult(prediction);
      setRegressionData(plotInput);
      setLoading(false);

    }catch(e){
      console.error("Error In Prediction: ", e);
      isLoading(false);
    }

  }

  const cleanEmail = (email) => {
    if(!email){
      return "";
    }
    if(email.includes("@alumnos.udg.mx")){
      return email.replace("@alumnos.udg.mx", "");
    }
    return email;
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
              defaultValue={cleanEmail(student.email)}
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
              defaultValue={student.siiauCode ?? ""}
              id="StudentInputSiiauCode"
              label="Codigo"
              placeholder="XXXXXXXXX" 
              required
              onChange={(e) => setStudent({...student, siiauCode: e.target.value})}
            />
          </CCol>
          <CCol xs={5}> 
            <CFormSelect
              id="StudentInputGroup"
              label="Grupo"
              placeholder="Selecciona..." 
              required
              value={student.group ? student.group: "Seleciona..."}
              onChange={(e) => setStudent({...student, group: e.target.value})}
            >
              <option value="Basicos">Basicos</option>
              <option value="Intermedios">Intermedios</option>
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
        {student.codeProfiles && 
        <CRow className="mt-2 mb-2">
          {(student.codeProfiles.codeForces || mode === 'Create')&& 
            <CCol>
              <CFormInput
              type="text"
              defaultValue={student.codeProfiles.codeForces ?? ""}
              id="StudentInputCodeForces"
              label="CodeForces"
              placeholder="" 
              required={false}
              onChange={(e) => setStudent({...student, codeProfiles: {...student.codeProfiles, codeForces: e.target.value}} )}
            />
            </CCol>}
        </CRow>}
        <CAccordion className='mt-2 mb-2'>
        {mode !== "Create" && 
          <CAccordionItem>
            <CAccordionHeader onClick={() => getSubmissions()}>Historial de concursos</CAccordionHeader>
            <CAccordionBody className='p-0'>
              {submissions.length > 0 
                ? <SubmissionsTable submissions={submissions} student={student} />
                : <CCallout color='info'>El estudiante no ha participado en ningun concurso</CCallout>}
            </CAccordionBody>
          </CAccordionItem>
        }
        {isPredicitionEnabled &&
          <CAccordionItem>
            <CAccordionHeader onClick={() => performPrediction(testData) }>Predecir desempeño</CAccordionHeader>
            <CAccordionBody className=''>  
              <CRow className='justify-content-center'> 
                {isLoading 
                ? <CSpinner color="info" className='align-self-center' />
                : reggresionEnabled ? <Regression3DPlot title="Prediccion de problemas resueltos en el proximo contest" data={regressionData} />
                  : <CCallout color='info'>El estudiante debe haber participado en almenos 10 concursos para poder predecir su desempeño</CCallout>
                }
              </CRow>
            </CAccordionBody>
          </CAccordionItem>
        }
        </CAccordion>

        
        <CRow className="justify-content-end">
          <CButton color={mode === "Create" ? "success" : "primary"} type="submit">
            {mode === "Create" ? "Agregar" : "Actualizar"}
          </CButton>
        </CRow>
        </CForm>
    </DefaultModal>
  )
}

export default StudentModal;
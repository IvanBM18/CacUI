import { useEffect, useState } from 'react'
import React from 'react'

import {
  CAvatar,
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCol,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CModalFooter,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCarousel,
  CCarouselItem,
  CImage,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'
import { DataGrid } from '@mui/x-data-grid';

import avatar1 from 'src/assets/images/avatars/1.png'
import avatar2 from 'src/assets/images/avatars/2.png'
import avatar3 from 'src/assets/images/avatars/3.png'
import avatar4 from 'src/assets/images/avatars/4.png'
import avatar5 from 'src/assets/images/avatars/2.png'
import avatar6 from 'src/assets/images/avatars/3.png'

import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'
import StudentModal from '../student/StudentModal'
import StudentService from '../../services/student/StudentService'

const Dashboard = () => {

  const [testStudent, setTestStudent] = useState()
  const [isOpenStudent, setIsOpenStudent] = useState(false)

  const tableExample = [
    {
      avatar: { src: avatar1},
      user: {
        name: 'Josefina Rubio',
        new: true,
        registered: 'Jan 1, 2023',
      },
      group: {name: 'Basicos', color: 'success'},
      usage: {
        value: 50,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      code: '219747661',
      activity: 'INCO',
    },
    {
      avatar: { src: avatar2 },
      user: {
        name: 'Moises Martinez',
        new: false,
        registered: 'Jan 1, 2023',
      },
      group: {name: 'Basicos', color: 'success'},
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'info',
      },
      code: '216735661',
      activity: 'INFO',
    },
    {
      avatar: { src: avatar3},
      user: { name: 'Argenis Lopez', new: true, registered: 'Jan 1, 2023' },
      group: {name: 'Basicos', color: 'success'},
      usage: {
        value: 74,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'warning',
      },
      code: '219747162',
      activity: 'INCO',
    },
    {
      avatar: { src: avatar4 },
      user: { name: 'Dafne Crespo', new: true, registered: 'Jan 1, 2023' },
      group: {name: 'Basicos', color: 'success'},
      usage: {
        value: 98,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'danger',
      },
      code: '219586925',
      activity: 'INCO',
    },
    {
      avatar: { src: avatar5},
      user: {
        name: 'Alexa Salcedo',
        new: true,
        registered: 'Jan 1, 2023',
      },
      group: {name: 'Intermedios', color: 'danger'},
      usage: {
        value: 22,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'primary',
      },
      code: '219747658',
      activity: 'INCO',
    },
    {
      avatar: { src: avatar6},
      user: {
        name: 'Ivan Barba',
        new: true,
        registered: 'Jan 1, 2023',
      },
      group: {name: 'Intermedios', color: 'danger'},
      usage: {
        value: 43,
        period: 'Jun 11, 2023 - Jul 10, 2023',
        color: 'success',
      },
      code: '219747662',
      activity: 'INCO',
    },
  ]


  //TODO: Eliminar esto
  let props={
    onClose: () => setIsOpenStudent(!isOpenStudent),
    mode: "Update",
    footer: null
  }

  async function getTestStudent(){
    setTestStudent(await StudentService.getByCode("219747662"))
  }

  useEffect(() => {
    getTestStudent()
  }, [])

  return (
    <>
    <CButton color="primary" onClick={() => setIsOpenStudent(!isOpenStudent)}>Launch demo STUDENT</CButton>
    {isOpenStudent && <StudentModal onClose={props.onClose} student={testStudent} mode={props.mode}/>}
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Asistencias
              </h4>
              <div className="small text-body-secondary">Calendario 2024a</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Semanal', 'Mensual', 'Semestral'].map((value) => (
                  <CButton
                  onClick={() => setIsOpenStudent(true)}
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Mensual'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <MainChart />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Dashboard

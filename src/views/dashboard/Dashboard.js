import { useState } from 'react'
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

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsDropdown from '../widgets/WidgetsDropdown'
import MainChart from './MainChart'
import { DefaultModal } from '../../components/DefaultModal'
import StudentModal from '../student/StudentModal'
import { layouts } from 'chart.js'

const Dashboard = () => {

  const [isOpenStudent, setIsOpenStudent] = useState(false)
  const progressExample = [
    { title: 'Visits', value: '29.703 Users', percent: 40, color: 'success' },
    { title: 'Unique', value: '24.093 Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '78.706 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '22.123 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 40.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  const progressGroupExample2 = [
    { title: 'Male', icon: cilUser, value: 53 },
    { title: 'Female', icon: cilUserFemale, value: 43 },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 56, value: '191,235' },
    { title: 'Facebook', icon: cibFacebook, percent: 15, value: '51,223' },
    { title: 'Twitter', icon: cibTwitter, percent: 11, value: '37,564' },
    { title: 'LinkedIn', icon: cibLinkedin, percent: 8, value: '27,319' },
  ]

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
    student: {
      firstName: "Josefina",
      lastName: "Rubio",
      code: "219747661",
      refister_date: "Jan 1, 2023",
    },
    onClose: () => setIsOpenStudent(!isOpenStudent),
    mode: "Update",
    footer: null
  }

  return (
    <>
    <CButton color="primary" onClick={() => setIsOpenStudent(!isOpenStudent)}>Launch demo STUDENT</CButton>
    {isOpenStudent && <StudentModal onClose={props.onClose} student={props.student} />}
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
      
      <CRow>
        <CCol xs>
          <CCard className="mb-4">
              
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead className="text-nowrap">
                  <CTableRow>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      <CIcon icon={cilPeople} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Alumno</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Grupo
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Asistencias</CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary text-center">
                      Codigo
                    </CTableHeaderCell>
                    <CTableHeaderCell className="bg-body-tertiary">Carrera</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell className="text-center">
                        <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-body-secondary text-nowrap">
                          <span>{item.user.new ? 'Nuevo' : 'Recurrente'}</span> | Registrado en:{' '}
                          {item.user.registered}
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        {item.group && (
                          <CBadge color={item.group.color} className="ms-auto">
                            {item.group.name}
                          </CBadge>
                        )}
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="d-flex justify-content-between text-nowrap">
                          <div className="fw-semibold">{item.usage.value}%</div>
                          <div className="ms-3">
                            <small className="text-body-secondary">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        {item.code}
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="fw-semibold text-nowrap">{item.activity}</div>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard

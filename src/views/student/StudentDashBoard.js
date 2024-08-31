import React from 'react'
import classNames from 'classnames'

import {
  CAvatar,
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

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


const StudentDashBoard = () => {

    return (
        <>
        <div>
            <h1>Student Dashboard</h1>
        </div>
        <CRow>
        <CCarousel controls indicators>
        <CCarouselItem>
          <CImage className="d-block w-100" src={ReactImg} alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={VueImg} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src={AngularImg} alt="slide 3" />
        </CCarouselItem>
      </CCarousel>
        </CRow>
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

export default StudentDashBoard;
import React from 'react'
import { Link, useNavigate,  } from 'react-router-dom'
import {
  CButton,
  CCallout,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'


const Login = () => {
  const navigate = useNavigate()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')

  const handleLogin = () => {
    if(username === 'admin' && password === 'password'){
      console.log('Login')
      navigate('/#')
    }
    if(username === 'ivan.barba7476@alumnos.udg.mx' && password === 'password'){
      console.log('Login')
      navigate('/#')
    }
    setError('Usuario o Contraseña Incorrectos')
  }

  return (
    <div className="bg-body-tertiary min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Inicia Sesion</h1>
                    <p className="text-body-secondary">Solo para Administradores</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput required type="text" placeholder="Nombre de Usuario" autoComplete="username email" onChange={(e) => setUsername(e.target.value.trim())}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Contraseña"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value.trim())}
                      />
                    </CInputGroup>
                    {error && <CCallout color="danger">{error}</CCallout>}
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" onClick={() => handleLogin()}>
                          Inicia Sesion
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Olvidate tu Contraseña?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Registrate</h2>
                    <p>Contacta a un Administrador para obtener acceso a la plataforma.</p>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login

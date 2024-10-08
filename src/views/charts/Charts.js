import React, { useEffect } from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'
import StatsService from '../../services/stats/StatsService'
import { getStyle } from '@coreui/utils'

const Charts = () => {
  const random = () => Math.round(Math.random() * 100)
  const [stats, setStats] = React.useState({})

  let totalAvanzados = 0;

  async function fetchStats(){
    let totalAlumnos = await StatsService.getGeneralStats("totalAlumnos");
    let totalBasicos = await StatsService.getGeneralStats("totalBasicos");
    let totalIntermedios = await StatsService.getGeneralStats("totalIntermedios");
    setStats({totalAlumnos, totalBasicos, totalIntermedios})
  }


  useEffect(() => {
    fetchStats()
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <DocsCallout
          name="Estadisticas"
          href="components/chart"
          content="Estadisticas de los concursos y problemas resueltos. Datos no oficiales para el calendario actual"
        />
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Contests</CCardHeader>
          <CCardBody>
            <CChartBar
              data={{
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio ', 'Julio'],
                datasets: [
                  {
                    label: 'Problemas resueltos',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Asistencias</CCardHeader>
          <CCardBody>
            <CChartLine
              data={{
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio ', 'Julio'],
                datasets: [
                  {
                    label: 'Intermedios',
                    backgroundColor: 'rgba(220, 220, 220, 0.2)',
                    borderColor: 'rgba(220, 0, 0, 1)',
                    pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                  {
                    label: 'Basicos',
                    backgroundColor: 'rgba(151, 187, 205, 0.2)',
                    borderColor: 'rgba(0, 128, 0, 1)',
                    pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                    pointBorderColor: '#fff',
                    data: [random(), random(), random(), random(), random(), random(), random()],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Dificultad de los Problemas</CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['800-1200', '1200-1800', '1800+'],
                datasets: [
                  {
                    data: [300, 50, 100],
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={6}>
        <CCard className="mb-4">
          <CCardHeader>Porcentaje de Alumnos Por Grupo</CCardHeader>
          <CCardBody>
            <CChartPie
              data={{
                labels: ['Basicos', 'Intermedios', 'Avanzados'],
                datasets: [
                  {
                    data: [stats.totalBasicos, stats.totalIntermedios, totalAvanzados],
                    backgroundColor: [getStyle('--cui-success'), '#36A2EB', getStyle('--cui-danger')],
                    hoverBackgroundColor: [getStyle('--cui-success'), '#36A2EB', getStyle('--cui-danger')],
                  },
                ],
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
      
    </CRow>
  )
}

export default Charts

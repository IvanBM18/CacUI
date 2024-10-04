import React, { useEffect, useRef } from 'react'

import { CChartLine } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'

const MainChart = () => {
  const chartRef = useRef(null)

  useEffect(() => {
  document.documentElement.addEventListener('ColorSchemeChange', () => {
  if (chartRef.current) {
  setTimeout(() => {
  chartRef.current.options.scales.x.grid.borderColor = getStyle(
  '--cui-border-color-translucent',
  )
chartRef.current.options.scales.x.grid.color = getStyle('--cui-border-color-translucent')
  chartRef.current.options.scales.x.ticks.color = getStyle('--cui-body-color')
  chartRef.current.options.scales.y.grid.borderColor = getStyle(
  '--cui-border-color-translucent',
  )
chartRef.current.options.scales.y.grid.color = getStyle('--cui-border-color-translucent')
  chartRef.current.options.scales.y.ticks.color = getStyle('--cui-body-color')
  chartRef.current.update()
  })
  }
})
  }, [chartRef])

  const random = () => Math.round(Math.random() * 100)

  return (
    <>
      <CChartLine
        ref={chartRef}
        style={{ height: '300px', marginTop: '40px' }}
        data={{
          labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
          datasets: [
            {
              label: 'Basicos',
              backgroundColor: `rgba(${getStyle('--cui-info-rgb')}, .1)`,
              borderColor: getStyle('--cui-success'),
              borderWidth: 2,
              data: [
                80,
                70,
                40,
                42,
                20,
                0,
                0,
              ],
              fill: true,
            },
            {
              label: 'Intermedios',
              backgroundColor: 'transparent',
              borderColor: getStyle('--cui-info'),
              borderWidth: 2,
              data: [
                30,
                25,
                27,
                25,
                12,
                0,
                0,
              ],
            },
            {
              label: 'Avanzados',
              backgroundColor: 'transparent',
              borderColor: getStyle('--cui-danger'),
              borderWidth: 1,
              borderDash: [8, 5],
              data: [0,0,0,0,1,0,0],
            },
          ],
        }}
        options={{
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                color: getStyle('--cui-border-color-translucent'),
              },
              ticks: {
                color: getStyle('--cui-body-color'),
              },
            },
            y: {
              beginAtZero: true,
              border: {
                color: getStyle('--cui-border-color-translucent'),
              },
              grid: {
                color: getStyle('--cui-border-color-translucent'),
              },
              max: 100,
              ticks: {
                color: getStyle('--cui-body-color'),
                maxTicksLimit: 5,
                stepSize: Math.ceil(250 / 5),
              },
            },
          },
          elements: {
            line: {
              tension: 0.4,
            },
            point: {
              radius: 0,
              hitRadius: 10,
              hoverRadius: 4,
              hoverBorderWidth: 3,
            },
          },
        }}
      />
    </>
  )
}

export default MainChart

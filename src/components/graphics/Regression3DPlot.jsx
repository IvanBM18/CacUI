import React from 'react';
import Plot from 'react-plotly.js';

const Regression3DPlot = (props) => {

  const data = props.data;
  const prediccion = { x: data.result.input[0], y: data.result.input[1], z: data.result.output }; // Punto de predicción
  console.log("Plot data: ", data);
  const plotData = [
    {
      x: data.avgDifficulty,
      y: data.avgCorrect,
      z: data.correctSubmissions,
      mode: 'markers',
      type: 'scatter3d',
      marker: { color: 'blue', size: 6 },
      name: 'Datos Reales',
    },
    {
      x: [prediccion.x],
      y: [prediccion.y],
      z: [prediccion.z],
      mode: 'markers',
      type: 'scatter3d',
      marker: { color: 'red', size: 10 },
      name: 'Predicción',
    },
    {
      x: data.result.malla.x,
      y: data.result.malla.y,
      z: data.result.malla.z,  
      type: 'surface',
      opacity: 0.6,
      colorscale: 'Viridis',
      name: 'Superficie de Regresión',
      showscale: false,
    },
  ];

  const layout = {
    title: props.title ?? "Regresion Lineal Mutivariable",
    scene: {
      xaxis: { title: 'Dificultad' },
      yaxis: { title: 'Historial Resueltos' },
      zaxis: { title: 'Problemas Resueltos' },
    },
  }

  function isObjectFieldsFilled(obj) {
    return Object.values(obj).every(value => value !== undefined && value !== null);
}

  const areAllDataValid = isObjectFieldsFilled && data.avgDifficulty.length > 0 && data.avgCorrect.length > 0 && data.correctSubmissions.length > 0;

  return (
    <div >
      {areAllDataValid 
      ? <Plot
        style={{ width: '100%', height: '500px' }}
        data={plotData}
        layout={layout}
        config={{ responsive: true }}
        />
      : <h3>Datos Invalidos</h3>}
    </div>
  );
};

export default Regression3DPlot;

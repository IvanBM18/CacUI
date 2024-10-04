import React from 'react'
import { useParams } from 'react-router-dom';

import TablaAlumnos from './table'
const ListaManual = () => {
  const { name } = useParams();
  console.log('Nombre recibido:', name);

  return (
    <>
      <div>
        <h1>{name}</h1>
      </div>
      <TablaAlumnos/>
    </>
  )
}
export default ListaManual;
import React from 'react'
import { useParams } from 'react-router-dom';

import TablaAsistencia from './table'
const ListaManual = () => {
  const { name } = useParams();
  console.log('Nombre recibido:', name);

  return (
    <>
      <div>
        <h1>{name}</h1>
      </div>
      <TablaAsistencia/>
    </>
  )
}
export default ListaManual;
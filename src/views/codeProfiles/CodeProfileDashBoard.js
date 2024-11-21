import React, { useEffect, useState } from 'react'
import CodeProfileService from '../../services/codeProfile/CodeProfileService';
import CodeProfileTable from './CodeProfileTable';

function CodeProfileDashBoard() {

  const [codeProfiles, setCodeProfiles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [rowCount, setRowCount] = useState(0)


  async function fetchCodeProfiles(params){ 
    const page = params?.page ?? 0;
    const size = params?.pageSize ?? 20;

    setIsLoading(true);

    try{
      let result = await CodeProfileService.getAll(page, size);
      console.log("Code Profiles: ", result);
      setCodeProfiles(result);
      let length = result.length;
      setRowCount( length < rowCount ? length : rowCount + result.length);
    }catch(e){
      console.log("Hubo un error al obtener los perfiles de CodeForces", e)
      setCodeProfiles([])
      setRowCount(0);
    }

    setIsLoading(false);
  }

  useEffect(() => {
    setIsLoading(true);
    fetchCodeProfiles();
  },[])
  
  return (
    <>
    <div>
        <h1>Code Forces</h1>
        <p>Todos los perfiles de CodeForces que han participado en concursos del CAC</p>
      </div>
      <CodeProfileTable rows={codeProfiles} pagination="server" isLoading={isLoading} rowCount={rowCount}/>
    </>
  )
}

export default CodeProfileDashBoard
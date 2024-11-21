
import React from 'react'
import SubmissionsTable from './SubmissionsTable'
import { useState, useEffect } from 'react'
import SubmissionsService from '../../services/submissions/SubmissionsService'




const SubmissionsDashboard = () => {

  const [submissions, setSubmissions] = useState([])
  
  async function fetchSubmissions() {
    try {
      const submissions = await SubmissionsService.getAll();
      setSubmissions(submissions);
    }catch(e){
      console.log("Hubo un error al obtener los submissions", e)
    }
  }

  useEffect(() => {
    fetchSubmissions();
  }, [])

  return (
    <>
      <div>
        <h1>Submissions</h1>
        <p>Envios a los contests organizados por el CAC</p>
      </div>
      <SubmissionsTable submissions={submissions}/>
    </>
  )
}

export default SubmissionsDashboard
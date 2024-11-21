
import React from 'react'
import SubmissionsTable from './SubmissionsTable'
import { useState, useEffect } from 'react'
import SubmissionsService from '../../services/submissions/SubmissionsService'



const SubmissionsDashboard = () => {
  const [submissions, setSubmissions] = useState([])
  const [loading, setLoading] = useState(false)
  const [rowSize, setSize] = useState(40)

  const onPageChange = async (params) => {
    const page = params.page ?? 0;
    const size = params.pageSize ?? 20;

    setLoading(true);
  
    var result = await SubmissionsService.getAll(page, size);
    setSubmissions(result);
    setSize(rowSize + result.length);
    setLoading(false);
  };

  
  async function fetchSubmissions() {
    try {
      const submissions = await SubmissionsService.getAll();
      console.log("Submissions: ", submissions);
      setSubmissions(submissions);
    }catch(e){
      console.log("Hubo un error al obtener los submissions", e)
    }
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    fetchSubmissions();
  }, [])

  return (
    <>
      <div>
        <h1>Submissions</h1>
        <p>Envios a los contests organizados por el CAC</p>
      </div>
      <SubmissionsTable isLoading={loading} submissions={submissions} onPageChange={onPageChange} size={rowSize}/>
    </>
  )
}

export default SubmissionsDashboard
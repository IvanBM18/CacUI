

const SubmissionsTable = ({ submissions }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Submission ID</th>
          <th>Submission Date</th>
          <th>Submission Status</th>
        </tr>
      </thead>
      <tbody>
        {submissions.map((submission) => (
          <tr key={submission.id}>
            <td>{submission.id}</td>
            <td>{submission.date}</td>
            <td>{submission.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default SubmissionsTable;
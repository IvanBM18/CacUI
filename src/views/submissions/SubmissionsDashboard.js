import SubmissionsTable from "./SubmissionsTable";
import { mockData } from "./constants";

const SubmissionsDashBoard = () => {
  return (
    <>
      <div>
        <h1>Submissions</h1>
      </div>
      <SubmissionsTable submissions={mockData} />
    </>
  );
}

export default SubmissionsDashBoard;


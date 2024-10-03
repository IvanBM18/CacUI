import SubmissionsTable from "./SubmissionsTable";

const SubmissionsView = () => {
  return (
    <>
      <div>
        <h1>Submissions</h1>
      </div>
      <SubmissionsTable submissions={[]} />
    </>
  );
}

export default SubmissionsView;


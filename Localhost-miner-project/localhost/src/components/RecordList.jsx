import RecordRow from "./RecordRow";

function RecordList({ records, deleteRecord, startEdit, clearAllRecords }) {

  return (
    <div>

      <h2>Record List</h2>

      {records.length === 0 ? (
        <p>No Records Found</p>
      ) : (
        <>
          <table>

            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {records.map((rec) => (
                <RecordRow
                  key={rec.id}
                  record={rec}
                  deleteRecord={deleteRecord}
                  startEdit={startEdit}
                />
              ))}
            </tbody>

          </table>

          <button onClick={clearAllRecords}>
            Clear All
          </button>
        </>
      )}

    </div>
  );
}

export default RecordList;
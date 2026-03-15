function RecordRow({ record, deleteRecord, startEdit }) {

  return (
    <tr>

      <td>{record.name}</td>
      <td>{record.email}</td>

      <td>

        <button onClick={() => startEdit(record.id)}>
          Edit
        </button>

        <button onClick={() => deleteRecord(record.id)}>
          Delete
        </button>

      </td>

    </tr>
  );
}

export default RecordRow;
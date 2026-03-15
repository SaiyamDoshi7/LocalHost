import { useState, useEffect } from "react";
import RecordForm from "./components/RecordForm";
import RecordList from "./components/RecordList";

function App() {

  const [records, setRecords] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("records")) || [];
    setRecords(data);
  }, []);

  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(records));
  }, [records]);

  const addRecord = (record) => {
    setRecords([...records, { id: Date.now(), ...record }]);
  };

  const deleteRecord = (id) => {
    const updated = records.filter((rec) => rec.id !== id);
    setRecords(updated);
  };

  const startEdit = (id) => {
    setEditId(id);
  };

  const updateRecord = (newData) => {
    const updated = records.map((rec) =>
      rec.id === editId ? { ...rec, ...newData } : rec
    );
    setRecords(updated);
    setEditId(null);
  };

  const clearAllRecords = () => {
    if (confirm("Delete all records?")) {
      setRecords([]);
    }
  };

  const editRecord = records.find((rec) => rec.id === editId);

  return (
    <div className="container">

      <h1>LocalBox Miner</h1>

      <RecordForm
        addRecord={addRecord}
        updateRecord={updateRecord}
        editRecord={editRecord}
      />

      <RecordList
        records={records}
        deleteRecord={deleteRecord}
        startEdit={startEdit}
        clearAllRecords={clearAllRecords}
      />

    </div>
  );
}

export default App;
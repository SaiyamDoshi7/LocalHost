import { useState, useEffect } from "react";

function RecordForm({ addRecord, updateRecord, editRecord }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (editRecord) {
      setName(editRecord.name);
      setEmail(editRecord.email);
    }
  }, [editRecord]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("All fields required");
      return;
    }

    const record = { name, email };

    if (editRecord) {
      updateRecord(record);
    } else {
      addRecord(record);
    }

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>

      <h2>{editRecord ? "Edit Record" : "Add Record"}</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">
        {editRecord ? "Update" : "Add"}
      </button>

    </form>
  );
}

export default RecordForm;
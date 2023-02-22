import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Form from "./components/Form";
import EditModal from "./components/UI/EditModal";

const getNotesFromStorage = () => {
  let notes = JSON.parse(localStorage.getItem("notes"));
  if (notes) {
    return notes;
  } else return [];
};

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [updateNoteId, setUpdateNoteId] = useState("");

  const [notes, setNotes] = useState(getNotesFromStorage);

  localStorage.setItem("notes", JSON.stringify(notes));

  return (
    <div className="App">
      <Header />
      <EditModal
        updateNoteId={updateNoteId}
        setUpdateNoteId={setUpdateNoteId}
        notes={notes}
        setNotes={setNotes}
      />
      <Form
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        setNotes={setNotes}
      />
      <Notes notes={notes} setNotes={setNotes} setUpdateNoteId={setUpdateNoteId} />
      <Footer />
    </div>
  );
}

export default App;

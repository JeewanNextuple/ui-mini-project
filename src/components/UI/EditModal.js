import Modal from "./Modal";

const EditModal = (props) => {

  const updateHandler = () => {
    const updatedNotes = props.notes.map((note) => {
      if (props.updateNoteId === note.id) {
        return {
          ...note,
          title: document.getElementById("title").value,
          content: document.getElementById("content").value,
        };
      } else return note;
    });

    props.setNotes(updatedNotes);
  };

  return (
    <Modal updateHandler={updateHandler} />
  );
};

export default EditModal;

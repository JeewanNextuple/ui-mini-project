import Note from "./Note";
import emoji from "../assets/emoji.svg";

const imgStyle = {
  height: "50px",
  width: "50px",
};

const Notes = (props) => {
  // const onDeleteHandler = (id) => {
  //     props.onNoteDelete(id)
  // }
  const onDeleteHandler = (id) => {
    const filtered = props.notes.filter((note) => note.id !== id);
    props.setNotes(filtered);
  };
  const onUpdateHandler = (id) => {
    props.setUpdateNoteId(id);
  };

  return (
    <ul>
      {props.notes.length !== 0 ? (
        props.notes.map((note) => (
          <Note
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
            onDelete={onDeleteHandler}
            onUpdate={onUpdateHandler}
          />
        ))
      ) : (
        <div>
          <div className="mt-5 text-danger">
            <h3 >No New Note or task for you</h3>
            <h4>Enjoy!!</h4>
          </div>

          <span>
            <img style={imgStyle} src={emoji} alt="Chill yourself" />
          </span>
        </div>
      )}
    </ul>
  );
};
export default Notes;

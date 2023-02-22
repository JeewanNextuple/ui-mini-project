import styles from "../assets/Note.module.css"
import trashcan from "../assets/icons8-trash-can.svg"
import update from "../assets/icons8-restart.svg"
const Note = (props) => {

    const deleteOnClickHandler = () => {
        props.onDelete(props.id)
    }
    const updateOnClickHandler = () => {
      props.onUpdate(props.id)
    }

  return (
    <div className={styles.note}>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button onClick={deleteOnClickHandler}><img src= {trashcan} alt="Delete button"/></button>
      <button data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={updateOnClickHandler}><img src={update} alt="Update Button"/></button>
    </div>
  );
};

export default Note;

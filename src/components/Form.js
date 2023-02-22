import { useState} from "react";
import styles from "../assets/Form.module.css";
import ErrorModel from "./UI/ErrorModel";

const Form = (props) => {

  const [errorOccured, setErrorOccured] = useState(false);

  const titleOnChangeHandler = (event) => {
    props.setTitle(event.target.value);
  };

  const contentOnChangeHandler = (event) => {
    props.setContent(event.target.value);
  };

  const formOnSubmitHandler = (event) => {
    event.preventDefault();

    if (props.title.trim().length === 0 || props.content.trim().length === 0) {
      setErrorOccured(true);
    } else {
      setErrorOccured(false);
      const note = {
        id: Math.random().toString(),
        title: props.title,
        content: props.content,
      };

      props.setNotes((prevNote) => [note, ...prevNote])

  
      props.setTitle("");
      props.setContent("");
    }
  };

  const closeModelHandler = () => {
    setErrorOccured(false);
  };


  return (
    <div>
      {errorOccured && (
        <ErrorModel
          onCloseButtonClick={closeModelHandler}
          message="Add title or description"
        />
      )}
      <form style={styles.form} onSubmit={formOnSubmitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={props.title}
          onChange={titleOnChangeHandler}
        />
        <textarea
          placeholder="Description"
          rows="3"
          value={props.content}
          onChange={contentOnChangeHandler}
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default Form;

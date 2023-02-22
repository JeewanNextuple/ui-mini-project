const errorStyle = {
  padding: "1px",
  backgroundColor: "red",
  color: "white",
  width: "480px",
  marginTop: "30px",
  marginRight: "auto",
  marginBottom: "20px",
  marginLeft: "auto",
  borderRadius: "7px"
};
const closeBtnStyle ={
    backgroundColor:"red",
    border:"none",
    outline: "none",
    marginLeft: "200px",
    color: "white",
    fontSize: "1.5rem"

}
const ErrorModel = (props) => {

  return (
    <div style={errorStyle}>
      <p>{props.message} <button style={closeBtnStyle} onClick={props.onCloseButtonClick}>&times;</button></p>
    </div>
  );
};
export default ErrorModel;

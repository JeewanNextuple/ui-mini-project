const footerStyle = {
    background: "grey",
    textAlign: "center",
    padding: "15px",
    fontSize: "20px",
    position: "fixed",
    bottom: 0,
    width: "100%",

}

const Footer = () => {

    const year = new Date().getFullYear()

  return (
    <div style={footerStyle}>
      <footer>
      <p>&copy; nextuple by Jeewan Khatiwara, {year}</p>
    </footer>
    </div>
    
  );
};
export default Footer
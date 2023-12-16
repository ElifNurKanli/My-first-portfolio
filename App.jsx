import "./App.css";
import Icons from "./Pages/Home/Icons";

function App() {
  const userName = "I'm Elif Nur Kanli";

  return (
    <>
      <h1
        className="custom-font"
        style={{
          marginLeft: "850px",
          color: "white",
          fontSize: "50px",
          marginTop: "230px",
        }}
      >
        Hi, <br></br> {userName}
      </h1>

      <hr
        style={{
          color: "white",
          marginLeft: "850px",
          width: "400px",
          margin: "0",
        }}
      ></hr>
      <p
        className="custom-font"
        style={{
          color: "white",
          marginLeft: "850px",
          fontSize: "18px",
          marginRight: "55px",
        }}
      >
        I'm an electrical and electronic engineer. I'm interested in the field
        of software. I consider myself proficient in the Python language. I work
        on Image Processing and Artificial Intelligence. I have also been
        working on projects in the frontend area for some time.
      </p>
      <Icons />
    </>
  );
}
export default App;

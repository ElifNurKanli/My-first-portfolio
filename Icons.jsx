import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const redirectToGithub = () => {
  window.open("https://github.com/ElifNurKanli", "_blank");
};
const redirectToLinkedin = () => {
  window.open("https://www.linkedin.com/in/elifnurkanli", "_blank");
};
const redirectToContact = () => {
  window.location.href = "elifnurrkanli@gmail.com";
};

function Icon() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "100px",
        }}
      >
        <div style={{ marginBottom: "10px" }}>
          <button
            onClick={redirectToGithub}
            style={{
              fontSize: "24px",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </div>
        <div style={{ marginBottom: "10px" }}>
          <button
            onClick={redirectToLinkedin}
            style={{
              fontSize: "24px",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
        </div>
        <div>
          <button
            onClick={redirectToContact}
            style={{
              fontSize: "24px",
              border: "none",
              backgroundColor: "transparent",
              cursor: "pointer",
            }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
        </div>
      </div>
    </>
  );
}
export default Icon;

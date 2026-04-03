import yellowArrow from "../../../assets/images/yellow-arrow.png";
import dark_bg from "./dark-bg.png";

function Contact() {
  return (
    <section
      id="contact"
      className="scroll-snap"
      style={{ backgroundImage: `url(${dark_bg})` }}
    >
      <div className="container">
        <div className="header">
          <div className="contact-me-arrow">
            <h2 className="accent underline">Contact Me</h2>
            <img src={yellowArrow} alt="Yellow Arrow Icon" />
          </div>
          <h3>Let's set up an interview !</h3>
        </div>
      </div>
    </section>
  );
}

export default Contact;

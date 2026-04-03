import yellowArrow from "../../../assets/images/yellow-arrow.png";
import dark_bg from "./dark-bg.png";
import styles from "./Contact.module.scss";

function Contact() {
  return (
    <section
      id="contact"
      className={`scroll-snap ${styles.contact}`}
      style={{ backgroundImage: `url(${dark_bg})` }}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.contactMeArrow}>
            <h2 className="accent underline">Contact Me</h2>
            <img
              src={yellowArrow}
              alt="Yellow Arrow Icon"
              className={styles.yellowArrow}
            />
          </div>
          <h3>Let's set up an interview !</h3>
        </div>
      </div>
    </section>
  );
}

export default Contact;

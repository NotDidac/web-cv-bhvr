import yellowArrow from "../../../assets/images/shared/yellow-arrow.png";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <section id="contact" className={`scroll-snap ${styles.contact}`}>
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

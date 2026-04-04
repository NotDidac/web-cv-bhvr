import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainArea}>
        <p>logo</p>
        <p>links</p>
        <p>etc</p>
        <p>etc</p>
        <p>etc</p>
      </div>
      <div className={styles.bottomArea}>
        <p>&copy; Copyright 2026 | Dídac Guillem Mimó | All Rights Reserved</p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
}

export default Footer;

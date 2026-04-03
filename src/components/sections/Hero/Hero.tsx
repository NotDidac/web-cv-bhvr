import profilePhoto from "./profile-photo.png";
import SectionHeader from "../../ui/SectionHeader/SectionHeader";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <SectionHeader title="Hero" />
      <div className={styles.even_columns}>
        <div>
          <h2>
            <span className={styles.greeting}>Hi, I'm </span>
            <span className="accent">Dídac</span>
          </h2>
          <h3>
            Junior <span className="accent">Software Developer</span>
          </h3>
          <p>C • Python • HTML • CSS • JavaScript • React</p>
          <button>View Projects</button>
        </div>
        <img
          src={profilePhoto}
          alt="Dídac Guillem Mimó"
          className="profile-pic"
        />
      </div>
    </section>
  );
}

export default Hero;

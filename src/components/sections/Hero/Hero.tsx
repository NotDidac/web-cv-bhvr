import profilePhoto from "../../../assets/images/components/sections/hero/profile-photo.png";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section
      id="home"
      className={styles.hero}
    >
      <div className="even-columns">
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
        <img src={profilePhoto} alt="Dídac Guillem Mimó" />
      </div>
    </section>
  );
}

export default Hero;

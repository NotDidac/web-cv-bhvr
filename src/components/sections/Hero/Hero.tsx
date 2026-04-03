import profilePhoto from "./profile-photo.png";
import SectionHeaderImg from "../../../assets/images/section-header.png";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section
      id="home"
      className={styles.hero}
      style={{
        backgroundImage: `url(${SectionHeaderImg})`,
      }}
    >
      <div className="even_columns">
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

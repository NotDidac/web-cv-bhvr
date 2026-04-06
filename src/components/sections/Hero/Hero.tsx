import profilePhoto from "../../../assets/images/components/sections/hero/profile-photo.png";

function Hero() {
  return (
    <section id="home" className="">
      <div className="even-columns">
        <div>
          <h2>
            <span className="">Hi, I'm </span>
            <span className="">Dídac</span>
          </h2>
          <h3>
            Junior <span className="">Software Developer</span>
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

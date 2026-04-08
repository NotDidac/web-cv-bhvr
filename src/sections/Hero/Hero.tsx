import profilePhoto from "@/assets/images/sections/hero/profile-photo.png";
import sectionHeaderBg from "@/assets/images/shared/section-header.png";
import Button from "@/components/Button/Button";

function Hero() {
  function handleClick() {
    alert("View Projects clicked!");
  }
  return (
    <section
      id="home"
      className="px-page text-light bg-cover bg-center pt-10 pb-25"
      style={{ backgroundImage: `url(${sectionHeaderBg})` }}
    >
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div>
          <h2 className="text-6xl/relaxed">
            Hi, I'm <span className="text-primary">Dídac</span>
          </h2>
          <h3 className="text-4xl">
            Junior <span className="text-primary">Software Developer</span>
          </h3>
          <p className="my-6 py-4 text-lg/loose">
            C • Python • HTML • CSS • JavaScript • React
          </p>
          <Button size="large" onClick={handleClick}>
            View Projects
          </Button>
        </div>
        <img
          src={profilePhoto}
          alt="Dídac Guillem Mimó"
          className="mt-10 max-w-[clamp(150px,30vw,700px)] drop-shadow-2xl"
        />
      </div>
    </section>
  );
}

export default Hero;

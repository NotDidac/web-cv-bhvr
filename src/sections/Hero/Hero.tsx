import profilePhoto from "@/assets/images/sections/hero/profile-photo.png";
import sectionHeaderBg from "@/assets/images/shared/section-header.png";
import Button from "@/components/Button/Button";

function Hero() {
  return (
    <section
      id="home"
      className="px-page text-light bg-cover bg-center py-20"
      style={{ backgroundImage: `url(${sectionHeaderBg})` }}
    >
      <div className="flex flex-col justify-between lg:flex-row">
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
          <Button
            title="View Projects"
            onClick={() => alert("View Projects clicked!")}
            className="px-6 text-lg/loose"
          />
        </div>
        <img
          src={profilePhoto}
          alt="Dídac Guillem Mimó"
          className="max-w-[clamp(150px,30vw,700px)]"
        />
      </div>
    </section>
  );
}

export default Hero;

import SectionHeader from "../ui/SectionHeader";

function Projects() {
  return (
    <section id="projects" className="scroll-snap">
      <SectionHeader title="Projects" />
      <div className="content-block">
        <h2>Skycreeper Puzzle Solver</h2>
        <h3>C - Backtracking Algorithm</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe
          suscipit omnis quod cum sapiente.
        </p>
      </div>
      <div className="content-block background-alt">
        <h2>Another project...</h2>
        <h3>Python - Data Analysis</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum saepe
          suscipit omnis quod cum sapiente.
        </p>
      </div>
    </section>
  );
}

export default Projects;

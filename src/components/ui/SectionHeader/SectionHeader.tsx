import sytles from "./SectionHeader.module.scss";
import sectionHeaderImg from "./section-header.png";

function SectionHeader({ title }: { title: string }) {
  return (
    <div
      className={sytles.sectionHeader}
      style={{ backgroundImage: `url(${sectionHeaderImg})` }}
    >
      <h2>{title}</h2>
    </div>
  );
}

export default SectionHeader;

import styles from "./SectionHeader.module.css";

function SectionHeader({ title }: { title: string }) {
  return (
    <div className={styles.sectionHeader}>
      <h2>{title}</h2>
    </div>
  );
}

export default SectionHeader;

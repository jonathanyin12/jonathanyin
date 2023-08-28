import styles from "../page.module.css";

export default function Social() {
  return (
    <div className={styles.social}>
      <a
        href="https://www.linkedin.com/in/jonathan-yin/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-linkedin" />
      </a>
      <a
        href="https://github.com/jonathanyin12"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-github" />
      </a>
      <a
        href="mailto:jonathan.yin@yale.edu"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-envelope" />
      </a>
    </div>
  );
}

import styles from "../page.module.css";
import Social from "./Social";

export default function About() {
  return (
    <div className={styles.about}>
      <img src="headshot.jpeg" alt="me" className={styles.headshot} />
      <h1 className={styles.author}> Jonathan Yin </h1>
      <div className={styles.desc}>
        {`I'm a senior at Yale studying Computer Science and Statistics. My
        interests broadly lie at the intersection of machine learning, data
        science, and software development.`}
      </div>
      <div style={{ marginTop: "15px" }}>
        <a
          id="cv"
          className={styles.btn}
          href="Jonathan_Yin_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Résumé
        </a>
      </div>
      <Social />
    </div>
  );
}

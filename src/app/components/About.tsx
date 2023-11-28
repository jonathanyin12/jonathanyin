import styles from "../page.module.css";
import Social from "./Social";

export default function About() {
  return (
    <div className={styles.about}>
      <img src="headshot.jpeg" alt="me" className={styles.headshot} />
      <h1 className={styles.author}> Jonathan Yin </h1>
      <div className={styles.desc}>
        {`My interests lie at the intersection of AI, data
        science, and software development. Previously, I studied computer science and statistics at Yale. 
        Currently building something new.`}
      </div>
      {/* <div style={{ marginTop: "15px" }}>
        <a
          id="cv"
          className={styles.btn}
          href="Jonathan_Yin_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Résumé
        </a>
      </div> */}
      <Social />
    </div>
  );
}

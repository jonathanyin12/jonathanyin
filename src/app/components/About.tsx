import Link from "next/link";
import styles from "../page.module.css";
import Social from "./Social";

export default function About() {
  return (
    <div className={styles.about}>
      <img src="headshot.jpg" alt="me" className={styles.headshot} />
      <h1 className={styles.author}> Jonathan Yin </h1>
      {/* <div
        className={styles.desc}
      >{`Passionate about AI and software | Prev. CS + Stats @ Yale`}</div> */}
      <div style={{ marginTop: "15px" }}>
        <Link
          id="cv"
          className={styles.btn}
          href="Jonathan_Yin_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Résumé
        </Link>
      </div>
      <Social />
    </div>
  );
}

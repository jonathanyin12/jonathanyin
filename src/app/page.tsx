"use client";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import About from "./components/About";
import styles from "./page.module.css";
import particlesOptions from "./particles.json";
function App() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className={styles.container}>
      <About />

      <Particles init={particlesInit} options={particlesOptions} />
    </div>
  );
}

export default App;

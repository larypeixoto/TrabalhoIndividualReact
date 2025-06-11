import styles from "./profile.module.css";

import { Navbar } from "../../Components/Navbar/navbar";
import { Footer } from "../../Components/Footer/footer";
import { About } from "../../Components/About/about";
import { SidePlank } from "../../Components/SidePlank/sideplank";

export function Profile() {
  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.bodyProfile}>
        <div className={styles.columnLeft}>
          <About />
        </div>

        <div className={styles.columnRight}>
          <SidePlank />
        </div>
      </div>

      <Footer />
    </div>
  );
}

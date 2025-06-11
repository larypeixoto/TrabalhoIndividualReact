import { Navbar } from "../../Components/Navbar/navbar";
import { Footer } from "../../Components/Footer/footer";
import { ChineseKingdom } from "../../Components/ChineseKingdom/chinesekingdom";

import styles from "./home.module.css";

export function HomePage() {
  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.bodyHome}>
        <div className={styles.itensbg}>
          <ChineseKingdom />
        </div>
      </div>

      <Footer />
    </div>
  );
}

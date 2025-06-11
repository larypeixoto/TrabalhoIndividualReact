import styles from "./viewed.module.css";

import posterTU from "../../../assets/posterTU.jpg";
import posterWOH from "../../../assets/posterWOH.jpg";
import posterTTEM from "../../../assets/posterTTEM.jpg";
import posterLBFD from "../../../assets/posterLBFD.jpg";
import posterFIYS from "../../../assets/posterFIYS.jpg";
import posterTJOCZ from "../../../assets/posterTJOCZ.jpg";
import posterTW from "../../../assets/posterTW.jpg";
import posterMCIL from "../../../assets/posterMCIL.jpg";

import { Card } from "../../Card/Posters/card";

export function Viewed() {
  const dramas = [
    { nome: "The Untamed", imagem: posterTU },
    { nome: "Word Of Honor", imagem: posterWOH },
    { nome: "Till the End Of The Moon", imagem: posterTTEM },
    { nome: "Love Between a Fairy and Devil", imagem: posterLBFD },
    { nome: "Falling In Your Smile", imagem: posterFIYS },
    { nome: "The Journey of Chong Zi", imagem: posterTJOCZ },
    { nome: "The Wolf", imagem: posterTW },
    { nome: "Ms Cupid In Love", imagem: posterMCIL },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>Viewed & Reviews</div>
      <div className={styles.containerCards}>
        <Card personagens={dramas} />
      </div>
    </div>
  );
}

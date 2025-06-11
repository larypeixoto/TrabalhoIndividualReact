import styles from './sideplank.module.css'

import { Welcome } from "../../Components/SidePlankItens/Welcome/welcome"
import { Viewed } from "../SidePlankItens/Viewed/viewed"
import { PlanToWatch } from "../SidePlankItens/PlanToWatch/planToWatch";

export function SidePlank() {
    return(
       <div className={styles.container}>
        <div className={styles.containerTop}>
        <Welcome/>
       </div>

       <div className={styles.containerBottom}>
        <div className={styles.containerBLeft}>
            <Viewed/>
        </div>
        <div className={styles.containerBRight}>
            <PlanToWatch/>
        </div>
       </div>
        </div>

    )
}
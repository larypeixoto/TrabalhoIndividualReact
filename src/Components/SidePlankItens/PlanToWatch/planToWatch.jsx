import styles from "./planToWatch.module.css";
import { Tasks } from "../../Tasks/tasks";

export function PlanToWatch() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Plan to Watch</div>
      <Tasks />
    </div>
  );
}

import styles from "./about.module.css";
import iconAvatar from "../../assets/iconProfile.jpg";

export function About() {
  return (
    <div className={styles.container}>
      <img className={styles.picProfile} src={iconAvatar} />
      <div className={styles.name}>Wen Kexing</div>
      <div className={styles.username}>@imghostvalleymaster</div>
      <div className={styles.socialMedia}>
        <div className={styles.social}>
          <div className={styles.number}>0</div>
          <div className={styles.socialType}>Following</div>
        </div>
        <div className={styles.social}>
          <div className={styles.number}>0</div>
          <div className={styles.socialType}>Followers</div>
        </div>
        <div className={styles.social}>
          <div className={styles.number}>0</div>
          <div className={styles.socialType}>Points</div>
        </div>
      </div>
      <div className={styles.containerInfo}>
        <div className={styles.details}>Details</div>
        <div className={styles.info}>
          <span className={styles.infoTopic}>Last Online: </span> 50 minutes ago
        </div>
        <div className={styles.info}>
          <span className={styles.infoTopic}>Gender: </span> Female
        </div>
        <div className={styles.info}>
          <span className={styles.infoTopic}>Location: </span> Brazil
        </div>
        <div className={styles.info}>
          <span className={styles.infoTopic}>Roles: </span> Member
        </div>
        <div className={styles.info}>
          <span className={styles.infoTopic}>Join: </span> November 24, 2022
        </div>
      </div>
    </div>
  );
}

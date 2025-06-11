import styles from "./menuusuario.module.css";
import iconPerfil from "../../assets/iconProfile.jpg";

import { useState } from "react";

export function MenuUsuario() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrapper}>
      <img src={iconPerfil} alt="PP" className={styles.avatar} />
      <div className={styles.dropdown}>
        <ul>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="">Plan To Watch</a>
          </li>
          <li>
            <a href="">Watchlist</a>
          </li>
          <li>
            <a href="">Messages</a>
          </li>
          <li>
            <a href="">Schedule</a>
          </li>
          <li>
            <a href="">Sign out</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

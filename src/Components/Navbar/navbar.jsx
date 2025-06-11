import styles from "./navbar.module.css";
import iconLogo from "../../assets/0_logoPrata.png";

import { Input } from "../Input/Search/input";
import { Button } from "../Button/Square/button";
import { MenuUsuario } from "../MenuUsuario/menuusuario";

import { useState } from "react";

export function Navbar() {
  const [search, setSearch] = useState("");

  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={iconLogo} alt="LogoLótus" />
      <div className={styles.title}>ChineseKingdom</div>
      <div className={styles.menu}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="">Schedule</a>
          </li>
          <li>
            <a href="">C-Dramas ▾</a>
            <ul>
              <li>
                <a href="">Modern</a>
              </li>
              <li>
                <a href="">Period</a>
              </li>
              <li>
                <a href="">Ancient</a>
              </li>
              <li>
                <a href="">Wuxia/Xianxia</a>
              </li>
              <li>
                <a href="">Romance</a>
              </li>
              <li>
                <a href="">Thriller & Suspense</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Animation ▾</a>
            <ul>
              <li>
                <a href="">Donghua</a>
              </li>
              <li>
                <a href="">Manhua</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="">Music ▾</a>
            <ul>
              <li>
                <a href="">Idols</a>
              </li>
              <li>
                <a href="">BoyGroups</a>
              </li>
              <li>
                <a href="">GirlGroups</a>
              </li>
              <li>
                <a href="">Soloist</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <div className={styles.search}>
        <Input
          className={styles.searchInput}
          type="text"
          placeholder="What are you looking for?"
        />
        <Button
          className={styles.moreCharacters}
          onClick={() => (window.location.href = "/search")}
          title={"▶"}
        />
      </div>

      <div className={styles.profile}>
        <MenuUsuario />
      </div>
    </nav>
  );
}

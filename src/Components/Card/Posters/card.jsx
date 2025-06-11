import styles from "./card.module.css";

export function Card({ personagens }) {
  return (
    <div className={styles.card}>
      {personagens.map((drama, index) => (
        <div
          key={index}
          className={styles.eachCard}
          style={{ backgroundImage: `url(${drama.imagem})` }}
        >
          <p className={styles.dramaName}>{drama.nome}</p>
        </div>
      ))}
    </div>
  );
}

import styles from "./welcome.module.css";
import { useNavigate } from "react-router-dom";
import { Button } from "../../Button/Commons/button";

export function Welcome() {
  const navigate = useNavigate();

  const handleButton1Click = () => {
    navigate("/pagina1");
  };

  const handleButton2Click = () => {
    navigate("/pagina2");
  };

  const handleButton3Click = () => {
    navigate("/pagina3");
  };

  const handleButton4Click = () => {
    navigate("/pagina4");
  };

  const handleButton5Click = () => {
    navigate("/pagina5");
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Welcome, Kexing!</div>
      <div className={styles.text}>What would you love to explore today?</div>
      <div className={styles.buttons}>
        <Button type="button" onClick={handleButton1Click} title={"C-Movies"} />
        <Button type="button" onClick={handleButton2Click} title={"C-Dramas"} />
        <Button type="button" onClick={handleButton3Click} title={"News"} />
        <Button type="button" onClick={handleButton4Click} title={"Trending"} />
        <Button type="button" onClick={handleButton5Click} title={"Browse "} />
      </div>
    </div>
  );
}

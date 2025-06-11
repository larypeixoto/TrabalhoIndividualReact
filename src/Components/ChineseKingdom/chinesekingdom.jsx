import styles from "./chinesekingdom.module.css";

import { useState } from "react";
import { Button } from "../Button/Commons/button";

export function ChineseKingdom() {
  const [showFullContent, setShowFullContent] = useState(false);

  const handleEnterClick = () => {
    setShowFullContent(true);
  };

  const handleBackClick = () => {
    setShowFullContent(false);
  };

  return (
    <div className={styles.titleBox}>
      {!showFullContent ? (
        <div className={styles.introContent}>
          <p className={styles.portal}>Hello,</p>
          <p className={styles.title}>are you lost?</p>
          <p className={styles.text}>
            We're all about Chinese dramas and productions – from binge-worthy
            series to hidden gems. Share your faves, rate what you've watched,
            and chat with folks who get the hype. Not a streaming site, just a
            proper space for fans to hang out. So pull up a chair and get stuck
            in!
          </p>
          <div className={styles.buttonContainer}>
            <Button type="button" onClick={handleEnterClick} title={"Enter"} />
          </div>
        </div>
      ) : (
        <>
          <p className={styles.title}>Welcome to ChineseKingdom</p>
          <p className={styles.portal}>
            Ready to dive into this world?
          </p>
          <p className={styles.text}>
            This is your cosy corner for fangirling (or fanboying) over your
            fave shows, swapping recs, dropping ratings, and chatting with
            people who actually get the obsession. No streaming here – just good
            vibes, hot takes, and drama talk. Grab a cuppa, settle in, and let’s
            talk c-dramas!
          </p>
          <div className={styles.buttonContainer}>
            <Button type="button" onClick={handleBackClick} title={"Back"} />
          </div>
        </>
      )}
    </div>
  );
}

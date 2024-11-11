import React from "react";
import styles from "./ParallaxComponent.module.css";

import FirstScreen from "./Section/FirstScreen";

const ParallaxComponent = () => {
  return (
    <div className={styles.content}>
      <div className={styles.parallax}>
        <div className={`${styles.layer} ${styles.rocks2}`}></div>
        <div className={`${styles.layer} ${styles.rocks1}`}></div>
        <div className={`${styles.layer} ${styles.hills}`}></div>
        <div className={`${styles.layer} ${styles.foreground}`}></div>
      </div>
      <div id="link">
        <FirstScreen />
      </div>
    </div>
  );
};

export default ParallaxComponent;

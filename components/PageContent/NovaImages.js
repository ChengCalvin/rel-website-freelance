import React from "react";
import styles from "../../styles/componentstyles/NovaImages.module.css";

const NovaImages = () => (
  <div className={styles.novaimagecontainer}>
    <div className={styles.imagesection1}>
      <img
        className={styles.projectplan}
        src="images/NOVAProjectPlan.png"
        alt="nova-projectplan"
      />
    </div>
    <div className={styles.imagesection2container}>
      <div className={styles.sneakpeakcontentcontainer}>
        <img
          className={styles.novasneakpeek1}
          src="images/novaoutsideA.jpeg"
          alt="novabuilding"
        />
        <img
          className={styles.novasneakpeek2}
          src="images/novaoutsideB.jpeg"
          alt="novabuilding"
        />
      </div>
      <div className={styles.sneakpeakcontentcontainer}>
        <img
          className={styles.novasneakpeek3}
          src="images/novaroomandbathroom.jpg"
          alt="novaroom"
        />
        <img
          className={styles.novasneakpeek4}
          src="images/novalivingroom.jpeg"
          alt="novalivingroom"
        />
      </div>
    </div>
  </div>
);

export default NovaImages;

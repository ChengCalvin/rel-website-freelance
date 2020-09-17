import styles from "../../styles/FounderAchievement.module.css";
import { i18n } from "../../i18n";

const FounderAchievement = (props) => {
  return (
    <div className={styles.founderinfowhitecontainer}>
      <div className={styles.foundercontentcontainer}>
        <div className={styles.profilepicandtitle}>
          <img
            className={styles.imagesize}
            src={props.partner.profileImage}
            alt={props.partner.alt}
          />
          <div className={styles.nametitlemobile}>
            <div className={styles.name}>{props.partner.name}</div>
            <div>{props.partner.title1}</div>
            <div>{props.partner.title2}</div>
            <div>{props.partner.title3}</div>
          </div>
        </div>
        <div className={styles.verticalline}></div>
        <div className={styles.description}>
          {props.partner.description.map((description, i) => (
            <div className={styles.descriptionparagraph} key={i}>
              {description}
            </div>
          ))}
          <div className={styles.achievemnttitle}>
            {props.partner.achievementSubtitle}
          </div>
          <div>
            <ul>
              {i18n.language === "en" ? props.partner.allAchievements?.map((achievement, i) => (
                <li className={styles.achievementlistitem} key={i}>
                  {achievement}
                </li>
              )) : props.partner.allAchievementsFR?.map((achievementFR, i) => (
                <li className={styles.achievementlistitem} key={i}>
                  {achievementFR}
                </li>
              ) )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderAchievement;

import styles from "../../styles/FounderDisplay.module.css";

const ACCUMULATOR = null;

const FounderDisplay = (props) => {
  return (
    <div className={styles.allfounder}>
      {props.founders
        .map((founders) => (
          <div className={styles.foundercontainer}>
            <h1 className={styles.foundername}>{founders.name}</h1>
            <div className={styles.foundertitlecontainer}>
              <p>{founders.title1}</p>
              <p>{founders.title2}</p>
              <p>{founders.title3}</p>
              <p>{founders.email}</p>
              <p>{founders.phone}</p>
              <p>{founders.cellphone}</p>
              <p>{founders.tollfree}</p>
            </div>
          </div>
        ))
        .reduce(
          (prevVal, nextVal) =>
            prevVal === null ? (
              nextVal
            ) : (
              <>
                {prevVal}{" "}
                <div
                  className={styles.verticalline}
                  style={{ borderColor: `${props.verticalLineColor}` }}
                ></div>{" "}
                {nextVal}
              </>
            ),
          ACCUMULATOR
        )}
    </div>
  );
};

export default FounderDisplay;

import styles from "../../styles/FounderDisplay.module.css";

let ACCUMULATOR = null;

const FounderDisplay = (props) => {
  return (
    <div className={styles.allfounder}>
      {props.founders
        .map((founders) => (
          <div className={styles.foundercontainer}>
            <div className={styles.foundername}>{founders.name}</div>
            <div className={styles.foundertitlecontainer}>
              <div>{founders.title1}</div>
              <div>{founders.title2}</div>
              <div>{founders.title3}</div>
              <div>{founders.email}</div>
              <div>{founders.phone}</div>
              <div>{founders.cellphone}</div>
              <div>{founders.tollfree}</div>
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

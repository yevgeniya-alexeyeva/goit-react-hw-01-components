import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const setColor = (value) => {
  return (
    (value <= 25 && "#7FFFD4") ||
    (value <= 50 && "#FFB6C1") ||
    (value <= 75 && "#FFA07A") ||
    "#00FF7F"
  );
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <ul className={styles.statList}>
        {stats.map((item) => {
          const style = {
            backgroundColor: setColor(item.percentage),
          };
          return (
            <li className={styles.item} key={item.id} style={style}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.percentage}>{item.percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
};

export default Statistics;

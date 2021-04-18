import styles from "./FriendsListItem.module.css";
// const setColor = (status) => {
//   return status ? "##00FF00" : "#FF0000";
// };

const FriendsListItem = ({ data }) => {
  return (
    <li className={styles.item}>
      <span
        className={styles.status}
        style={{ backgroundColor: data.isOnline ? "#00FF00" : "#FF0000" }}
      ></span>
      <img
        className={styles.avatar}
        src={data.avatar}
        alt="Avatar of {data.name}"
        width="48"
      />
      <p className={styles.name}>{data.name}</p>
    </li>
  );
};

export default FriendsListItem;

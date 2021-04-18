import FriendsListItem from "../FriendsListItem/FriendsListItem";
import styles from "./FriendsList.module.css";

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((item) => {
        return <FriendsListItem data={item} key={item.id} />;
      })}
    </ul>
  );
};

export default FriendsList;

import FriendsListItem from "../FriendsListItem/FriendsListItem";
import styles from "./FriendsList.module.css";
import PropTypes from "prop-types";

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map((item) => {
        return <FriendsListItem data={item} key={item.id} />;
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default FriendsList;

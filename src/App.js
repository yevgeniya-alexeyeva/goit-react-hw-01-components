import "./App.css";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendsList from "./components/FriendsList/FriendsList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./user.json";
import data from "./statistical-data.json";
import friends from "./friends.json";
import transactions from "./transactions.json";

const App = () => {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory data={transactions} />
    </div>
  );
};

export default App;

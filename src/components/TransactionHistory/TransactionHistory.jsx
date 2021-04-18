import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ data }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr className={styles.tableHeader}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {data.map((item) => {
          return (
            <tr key={item.id} className={styles.tableRow}>
              <td>{item.type}</td>
              <td>{Math.round(item.amount)}</td>
              <td>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;

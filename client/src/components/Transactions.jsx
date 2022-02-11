import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const Transactions = () => {
  const { transactions } = useContext(TransactionContext);

  return (
    <div>
      <h1>Transactions</h1>
    </div>
  );
};

export default Transactions;

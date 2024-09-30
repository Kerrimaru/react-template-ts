import { Expense } from "./expenseList";
import React from "react";

const ExpenseItem = ({ expense }: { expense: Expense }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <tr>
      <td>{formatDate(expense.date)}</td>
      <td>{expense.merchant}</td>
      <td>£{expense.amount}</td>
      <td>{expense.category}</td>
      <td>{expense.description}</td>
      <td>{expense.status}</td>
    </tr>
  );
};

export default ExpenseItem;

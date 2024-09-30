import { useEffect } from "react";
import React from "react";
import ExpenseItem from "./expenseItem";
import "./ExpenseList.css";

export interface Expense {
  id: number;
  merchant: string;
  amount: number;
  category: "training" | "travel" | "meal";
  description: string;
  date: string;
  status: string;
}

const ExpenseList = () => {
  const [expenses, setExpenses] = React.useState<Expense[]>([]);

  async function fetchExpenses() {
    try {
        const response = await fetch("https://expenses-backend-mu.vercel.app/expenses", {
            headers: {
              "Content-Type": "application/json",
              Username: "kerri.marusiak",
            },
          });
        const data = await response.json();
        setExpenses(data)
        } catch (e) {
          console.error(e)
        }
  }

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div className="expense-list-container">
      <h1>Expenses</h1>
      <hr />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Merchant</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length && expenses.map((expense) => (
            <ExpenseItem key={expense.id} expense={expense} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;

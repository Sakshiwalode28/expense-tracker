import React, { useState } from "react";
import "./App.css";

import ExpenseList from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [
  {
    id: "e1",
    title: "Stationary",
    price: 20,
    date: new Date(),
  },
  {
    id: "e2",
    title: "Car Insurance",
    price: 199.43,
    date: new Date(2022, 3, 30),
  },
  {
    id: "e3",
    title: "Food",
    price: 300,
    date: new Date(2022, 9, 5),
  },
  {
    id: "e4",
    title: "Paper",
    price: 90.2,
    date: new Date(2023, 2, 13),
  },
  {
    id: "e5",
    title: "Stationary",
    price: 40,
    date: new Date(2023, 8, 28),
  },
  {
    id: "e6",
    title: "Food",
    price: 150.2,
    date: new Date(2021, 2, 20),
  },
  {
    id: "e7",
    title: "Juice",
    price: 15.2,
    date: new Date(2021, 2, 20),
  },
  {
    id: "e8",
    title: "Books",
    price: 185.2,
    date: new Date(2020, 2, 20),
  },
];
function App() {
  const [expenses, setexpenses] = useState(dummy_expenses);

  const addExpenseHandler = (expense) => {
    setexpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpenseData={addExpenseHandler} />
      <ExpenseList items={expenses} />
    </div>
  );
}

export default App;

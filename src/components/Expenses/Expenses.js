import React, { useState } from "react";

import "./css/ExpenseContainer.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from './ExpensesChart';

function Expense(props) {
  const [filterYear, setFilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };

  
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  
  return (
    <div className="expenseList">
      <Card className="container">
        <ExpenseFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        />
         <ExpensesChart expenses={filteredExpenses} />
     <ExpenseList filteredExpenses={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expense;

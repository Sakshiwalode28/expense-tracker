import React, {useState} from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./css/ExpensesItem.css";

function ExpensesItems(props) {


  return (
    <Card className="expenseItem">
      <Card className="expenseItem_date">
        <ExpenseDate date={props.date} />
      </Card>
      <div className="expenseItem_discription">
        <h2 className="expenseItem_name">{props.title}</h2>
        <div className="expenseItem_price">${props.price}</div>
      </div>
    </Card>
  );
}

export default ExpensesItems;

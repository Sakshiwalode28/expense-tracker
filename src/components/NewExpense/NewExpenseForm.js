import React, { useState } from "react";
import "./css/NewExpenseForm.css";

function NewExpenseForm(props) {
  const [newTitle, setNewTitle] = useState("");
  const [newAmount, setNewAmount] = useState("");
  const [newDate, setNewDate] = useState("");

  //   const [userInput, setUserInput] =useState({
  //       newTitle='',
  //       newAmount='',
  //       newDate='',
  //   })

  const titleChangeHandler = (e) => {
    setNewTitle(e.target.value);
    // setUserInput({
    //     ...userInput,
    //     newTitle: e.target.value})

    // SAFER WAYYYYY

    // setUserInput((prevState)=>{
    //   return{
    // ...prevState,
    // newTitle: e.target.value
    //   }
    // })
  };

  const amountChangeHandler = (e) => {
    setNewAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setNewDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: newTitle,
      price: +newAmount,
      date: new Date(newDate),
    };

    props.onSaveExpenseData(expenseData);
    setNewTitle("");
    setNewAmount("");
    setNewDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-controls">
        <div className="new-expense-control">
          <label>Title</label>
          <input type="text" value={newTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense-control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={newAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense-control">
          <label>Date</label>
          <input
            type="date"
            min="2019-08-28"
            max="2022-08-28"
            value={newDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="action">
        <button className="new-expense-btn1">Cancle</button>
        <button type="submit" className="new-expense-btn2">
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default NewExpenseForm;

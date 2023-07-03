import React from "react";
import "./css/ExpenseFilter.css";

function ExpenseFilter(props) {
  const dropdownChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className="expense-filter">
      <label>Filter by year</label>
      <select
        className="expense-year"
        value={props.selected}
        onChange={dropdownChangeHandler}
      >
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  );
}

export default ExpenseFilter;

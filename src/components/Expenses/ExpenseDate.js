import React from "react";

function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div>
      <div>
        <strong  style={{fontSize:'1rem'}}>{month}</strong>
      </div>
      <div>
        <small  style={{fontSize:'0.8rem'}} >{year}</small>
      </div>
      <div>
        <strong style={{fontSize:'1.5rem'}}>{day}</strong>
      </div>
    </div>
  );
}

export default ExpenseDate;

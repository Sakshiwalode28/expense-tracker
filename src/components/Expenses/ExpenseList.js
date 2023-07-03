import React from "react";
import ExpensesItems from "./ExpensesItems";

function ExpenseList(props) {
  return (
    <div>
      {props.filteredExpenses.map((expense) => (
        <ExpensesItems
          key={expense.id}
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default ExpenseList;

//  {/* TYPE2 */}
//       {/* {filteredExpenses.length === 0 && (
//   <p>Expenses are not mentioned yet.</p>
// )}
// {filteredExpenses.length > 0 &&
//   filteredExpenses.map((expense) => (
//     <ExpensesItems
//       key={expense.id}
//       title={expense.title}
//       price={expense.price}
//       date={expense.date}
//     />
//   ))} */}

//       {/* TYPE 1 */}
//       {/* {filteredExpenses.length === 0 ? (
//   <p>No expenses yet.</p>
// ) : (
//   filteredExpenses.map((expense) => (
//     <ExpensesItems
//       key={expense.id}
//       title={expense.title}
//       price={expense.price}
//       date={expense.date}
//     />
//   ))
// )} */}

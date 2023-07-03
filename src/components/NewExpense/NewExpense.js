import React,{useState} from "react";
import NewExpenseForm from "./NewExpenseForm";
import "./css/NewExpense.css";
import Card from "../UI/Card";
function NewExpense(props) {

  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseData = (newExpenseData) => {
    const expenseData = {
      ...newExpenseData,
      id: Math.random(),
    };
    props.onAddExpenseData(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };



  return (
    <div className='add-new-epxpense'>
      <Card className="new-expense">
      {!isEditing && (
        <button className="new-expense-btn" onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <NewExpenseForm
          onSaveExpenseData={saveExpenseData}
          onCancel={stopEditingHandler}
        />
      )}
      </Card>
    </div>
  );
}

export default NewExpense;

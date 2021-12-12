import React, {useState} from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

  const [displayForm, setDisplayForm] = useState(false);

  const toggleDisplayForm = () => {
    setDisplayForm(!displayForm);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    props.onAddExpense(expenseData);
  };

  if(displayForm){
    return (
      <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} toggleDisplayForm={toggleDisplayForm}/>
      </div>
    );
  }

  return (
    <div className="new-expense">
      <button type='button' onClick={toggleDisplayForm}>Add New Expense</button>
    </div>
  );
};

export default NewExpense;

import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

	const [enteredTitle, setEnteredTitle] = React.useState('');
	const [enteredAmount, setEnteredAmount] = React.useState('');
	const [enteredDate, setEnteredDate] = React.useState('');

  const changeTitleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
	const changeAmountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
	const changeDateHandler = (event) => {
    setEnteredDate(event.target.value);
  };
	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title:enteredTitle,
			amount:+enteredAmount,
			date:new Date(enteredDate)
		}
		props.onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
    props.toggleDisplayForm();
	};
  const resetHandler = () => {
    props.toggleDisplayForm();
  }
  return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={changeTitleHandler} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
						onChange={changeDateHandler}
						value={enteredDate}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount($)</label>
          <input type="number" min="0" step="0.1" onChange={changeAmountHandler} value={enteredAmount}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="reset">Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

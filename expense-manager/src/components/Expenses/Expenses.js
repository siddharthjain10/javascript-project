import React from 'react';
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

export default function Expenses({expenses}) {

  const [filteredYear, setFilteredYear] = React.useState('2020');
  const filterChangeHandler = year => {
    setFilteredYear(year);
  };

  const filteredList = expenses.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  return (
    <Card className="expenses">
      <ExpensesFilter onFilterChange={filterChangeHandler} filteredYear={filteredYear}/>
      <ExpensesChart expenses={filteredList}/>
      <ExpensesList filteredList={filteredList} />
    </Card>
  );
}

import React from 'react';
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList({filteredList}) {


  if(filteredList.length===0){
    return <h3 className='expenses-list__fallback'>No Expenses found.</h3>
  }

  return (
    <ul className='expenses-list {'>
      {filteredList.map(expense => <ExpenseItem key={expense.id} expense={expense}/>)}
    </ul>
  );
}

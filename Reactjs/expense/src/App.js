import React, { useState } from 'react';

import ExpenseItem from "./ExpenseItem.js";
import ExpenseForm from "./ExpenseForm.js";
import "./App.css";
let expenses = [
  {
    id: 'e1',
    title: 'Birthday',
    amount: 2000,
    date: new Date(2021, 3, 14)
  },
  {
    id: 'e2',
    title: 'Dinner',
    amount: 1000,
    date: new Date(2021, 11, 31)
  }
]

function App() {
  const [expense,setExpense]=useState(expenses);
  const saveExpeseData = (newExpense) => {
    const newdata = { ...newExpense, id: Math.random().toString() }
    expenses=[newdata, ...expenses];
    setExpense(expenses);
    console.log(expense);
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center">Expnse List</h1>
          <hr />
          <ExpenseForm onSaveData={saveExpeseData} />
          {
            expense.map((item) => (
              <ExpenseItem
                key={item.id}
                date={item.date}
                title={item.title}
                amount={item.amount}>
              </ExpenseItem>
            )
            )
          }

        </div>
      </div>
    </div>
  );
}

export default App;

import { Expense } from "../../types/types";
import { AppProvider, AppContext } from "../../context/AppContext";
import { createExpense, deleteExpense } from "../../utils/expense-utils"
import React, { useState, useContext } from "react";


const ExpenseItem = (currentExpense: Expense) => {
  // Exercise: Consume the AppContext here
  const { expenses, setExpenses } = useContext(AppContext);

  const handleDeleteExpense = (currentExpense: Expense) => {
    deleteExpense(currentExpense.id)
    setExpenses(expenses.filter(expense => expense.id != currentExpense.id))
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>{currentExpense.description}</div>
      <div>${currentExpense.cost}</div>
      <div>
        <button onClick={() => handleDeleteExpense(currentExpense)}>x</button>
      </div>
    </li>
  );
};

export default ExpenseItem;

import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
// This is a comment added to see the change during commit
// This is the second comment
// This is the third comment made in github website to test pull
const INITIAL_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  
    const [exp,setexp]=useState(INITIAL_EXPENSES);

  const expensehandler=(expense)=>{
    //Recieves the new expense item component and adds it to existing old array.
    setexp(prevexp => {
      return [expense,...prevexp]
    })
  }
  return (
    <div>
      <NewExpense fromnewexp = {expensehandler}/>
      <Expenses items={exp}/> 
      {/* It sends the initially assigned exp array to Expenses.js file */}
    </div>
  );
}

export default App;

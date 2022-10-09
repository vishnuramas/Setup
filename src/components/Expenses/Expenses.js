import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import'./Expenses.css';
import ExpensesFilter from "./ExpenseFilter";
function Expenses(props){
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };
  // const filteredExpenses = props.item.filter(expe =>{
  //   return expe.date.getFullYear().toString() === filteredYear;
  // });
  const filteredExpenses = props.items.filter(expe => {
    return expe.date.getFullYear().toString() === filteredYear;
  });
  
  let expensescontent = <p>No expenses found</p>
  if(filteredExpenses.length >0){
    expensescontent = filteredExpenses.map((expe) =>(
      <ExpenseItem 
      key={expe.id}
       title={expe.title} amount = {expe.amount} date={expe.date}/>))
  }
    return (
        <Card className="expenses">
           <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
           {expensescontent}
        </Card>
      );
}

export default Expenses;
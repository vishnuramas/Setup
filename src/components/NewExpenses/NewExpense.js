import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense=(props)=>{
  //Recieving the data from Expense from and sending it to app.js file (child to parent passing the data)
    const savedatahandler=(entereddata)=>{
      const expensedata={
        ...entereddata,
        id:Math.random().toString()
      }  
      props.fromnewexp(expensedata);
    }
    return <div className='new-expense'>
        <ExpenseForm onsave={savedatahandler} />
    </div>
};
export default NewExpense;
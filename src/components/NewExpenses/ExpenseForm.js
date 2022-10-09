import './ExpenseForm.css'
import { useState } from 'react';
import NewExpense from './NewExpense';
const ExpenseForm=(props)=>{
    //Using one usestate for one input.
        const [enteredTitle,setEnteredTitle]=useState('');
        const [enteredAmount,setEnteredAmount]=useState('');
        const [enteredDate,setEnteredDate]=useState('');
        //Using one usestate for all inputs
        // const [userInput,setUserInput]=useState({
        //     enteredTitle: " ",
        //     enteredAmount: " ",
        //     enteredDate: " "
        // });
        const titlechangeHandler=(event)=>{
            //changing title using one useState for one input
            setEnteredTitle(event.target.value);
            //changint title using one useState for all inputs in the form
        //     setUserInput({
        //         ...userInput,
        //         enteredTitle:event.target.value,
        //     })
        //     setUserInput((prevstate)=>{             
        //        return { ...prevstate,
        //         enteredTitle:event.target.value
        //     }
        // })
        }
        const AmountchangeHandler=(event)=>{
            setEnteredAmount(event.target.value);
            // setUserInput({
            //     ...userInput,
            //     enteredAmount:event.target.value,
            // })
        }
        const DatechangeHandler=(event)=>{
            setEnteredDate(event.target.value);
            // setUserInput({
            //     ...userInput,
            //     enteredDate:event.target.value,
            // })
        }
        const submitHandler=(event)=>{
            event.preventDefault();
            const expensedata={
                title:enteredTitle,
                amount:enteredAmount,
                date:new Date(enteredDate)
            }
            // props passed from NewExpense.js file
            props.onsave(expensedata); //passing the user inputted data to NewExpense.js ( child to parent passage of data)
            setEnteredTitle('');
            setEnteredDate('');
            setEnteredAmount('');
        }
    return <form onSubmit={submitHandler}>
        <div className='new-expense__contorls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' value={enteredTitle} onChange={titlechangeHandler}></input>
        </div>  
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' value={enteredAmount} min='0.01' step='0.01' onChange={AmountchangeHandler}></input>
        </div> 
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' value={enteredDate} onChange={DatechangeHandler}></input>
        </div>    
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add expense</button>
        </div>
    </form>
}
export default ExpenseForm;


  
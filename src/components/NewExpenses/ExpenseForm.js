import './ExpenseForm.css'
import { useState } from 'react';
const ExpenseForm=()=>{
        const [enteredTitle,setEnteredTitle]=useState('');
        const [enteredAmount,setEnteredAmount]=useState('');
        const [enteredDate,setEnteredDate]=useState('');
        const titlechangeHandler=(event)=>{
            setEnteredTitle(event.target.value);
        }
        const AmountchangeHandler=(event)=>{
            setEnteredAmount(event.target.value);
        }
        const DatechangeHandler=(event)=>{
            setEnteredDate(event.target.value);
        }
    return <form>
        <div className='new-expense__contorls'>
        <div className='new-expense__control'>
            <label>Title</label>
            <input type='text' onChange={titlechangeHandler}></input>
        </div>  
        <div className='new-expense__control'>
            <label>Amount</label>
            <input type='number' min='0.01' step='0.01' onChange={AmountchangeHandler}></input>
        </div> 
        <div className='new-expense__control'>
            <label>Date</label>
            <input type='date' onChange={DatechangeHandler}></input>
        </div>    
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add expense</button>
        </div>
    </form>
}
export default ExpenseForm;
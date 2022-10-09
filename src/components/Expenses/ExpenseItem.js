import './ExpenseItem.css'
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props){
// Recieves props from Expenses,js and assigns the date to another component using props and title and amount are rendered in h2 and div tag.
    return (
        <Card className='expense-item'>
          <ExpenseDate date={props.date} />
            <div className='expense-item_description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </Card>
    );
}
export default ExpenseItem;
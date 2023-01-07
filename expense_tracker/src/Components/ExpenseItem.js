import './ExpenseItem.css'

function ExpenseItem (props) {
    const date = props.time.toISOString();
    const title = props.title;
    const price = props.price;

    return (
        
        <div className="expense-item">
            <div>{date}</div>
            <div className='expense-item__description'>
                <h2 >{title}</h2>
                <div className='expense-item__price'>{price}</div>
            </div>
        </div>
    );
}

export default ExpenseItem
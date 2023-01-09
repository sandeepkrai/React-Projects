const NewExpensesForm = ()=>{
    return (
        <form action="">
            <div>
                <div>
                    <label htmlFor="">Title</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Amount</label>
                    <input type="number" min='0.01' step='0.01' />
                </div>
                <div>
                    <label htmlFor="">Date</label>
                    <input type="date" min="2021-01-01" max="2023-01-09" />
                </div>
                <div>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default NewExpensesForm;
import { useState } from "react";

function ExpenseForm(props) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const submitHandler=(e)=>{
        e.preventDefault();
        const expenseData={
            title:title,
            amount:amount,
            date:new Date(date)
        }
        setTitle('');
        setAmount('');
        setDate('');
        props.onSaveData(expenseData);
    }
    
    return (
        <div className="card col-6 mb-4 offset-xl-3">
            <div className="card-header bg-secondary text-white text-center">
                <h4>Enter new Expense</h4>
            </div>
            <div className="card-body">
                <form className="text-center" onSubmit={submitHandler}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="input-expense" placeholder="Expense" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <label htmlFor="input-expense">Expense</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="number" className="form-control" id="input-amount" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} min={0.01} step={0.01} />
                        <label htmlFor="input-amount">Amount</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="date" className="form-control" id="input-date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} />
                        <label htmlFor="input-date"></label>
                    </div>
                    <button className="btn btn-secondary px-5" type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}
export default ExpenseForm;
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {
    return (
        <div className="expense-item mb-1">
            <div className="card">
                <div className="row g-0">
                    <ExpenseDate date={props.date} />
                    <div className="col-7 col-sm-8">
                        <div className="card-body d-flex justify-content-between">
                            <h3 className="card-title my-auto mx-4"> {props.title} </h3>
                            <button className="btn btn-primary"><h3>{props.amount}</h3></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ExpenseItem;
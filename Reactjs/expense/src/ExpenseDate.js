function ExpenseDate(props) {
    const year = props.date.getFullYear();
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });

    return (
        <div className="col-5 col-sm-4 p-2 border text-center bg-primary text-light my-auto">
            <h3>{day} - {month} - {year}</h3>
        </div>
    )
}
export default ExpenseDate;
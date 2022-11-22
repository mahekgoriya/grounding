function AgeDisplay(props) {
    if (props.submit == false) {
        return (<p></p>)
    }
    else if(props.submit == true && props.years < 0 ){
        return(<div><h4>Date of Birth should be lower then current date</h4></div>)
    }
    else {
    return (
        <div className="mx-2">
            <h3 className="text-primary">Your Age is</h3>
            <h4>{props.years} years {props.months} months and {props.days} days <b>OR</b></h4>
            <h4>{(props.years * 12) + props.months} months and {props.days} days <b>OR</b></h4>
            <h4>{(props.years * 365) + (props.months * 30) + props.days} days <b>OR</b></h4>
            <h4>{((props.years * 365) + (props.months * 30) + props.days)*24} Hours <b>OR</b></h4>
            <h4>{((props.years * 365) + (props.months * 30) + props.days)*24*60} Minutes <b>OR</b></h4>
            <h4>{((props.years * 365) + (props.months * 30) + props.days)*24*60*60} Seconds <b>OR</b></h4>
        </div>
    )
    }
}
export default AgeDisplay;
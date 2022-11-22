import React, { Component } from 'react';
import { ReactDOM } from 'react-dom/client';
import AgeDisplay from './AgeDisplay';
class GetAge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ageyear: null,
            agemonth: null,
            agedate: null,
            isSubmit:false
        }
    }
    onInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        this.setState({
            isSubmit:false
        })
    }
    onSubmitHandeler = (event) => {
        event.preventDefault();
        let datecopy = new Date(this.state.date);
        let year = datecopy.getFullYear();
        let month = datecopy.getMonth()+1;
        let date = datecopy.getDate();

        let currentyear = new Date().getFullYear();
        let currentmonth = new Date().getMonth() + 1;
        let currentdate = new Date().getDate();
        
        this.state.ageyear=currentyear-year;
        this.state.agemonth=currentmonth-month;
        this.state.agedate=currentdate-date;

        if(this.state.agemonth<0)
        {
            this.state.ageyear=this.state.ageyear-1;
            this.state.agemonth=12+this.state.agemonth;
            if(this.state.agedate<0)
            {
                this.state.agemonth=this.state.agemonth-1;
                this.state.agedate=30+this.state.agedate;
            }
        }
        if(this.state.agedate<0)
        {
            this.state.agemonth=this.state.agemonth-1;
            this.state.agedate=30+this.state.agedate;
            if(this.state.agemonth<0)
            {
                this.state.ageyear=this.state.ageyear-1;
                this.state.agemonth=12+this.state.agemonth;
            }
        }
        this.setState(prevState=>({
            ageyear: this.state.ageyear,
            agemonth: this.state.agemonth,
            agedate: this.state.agedate,
            isSubmit:true

        }));
        console.log(month,currentmonth);

    }
    render() {
        return (
            <div className="card mt-5">
                <form onSubmit={this.onSubmitHandeler}>
                    <div className="form-floating mt-3 mx-2">
                        <h4>Enter Your Birth Date Here</h4>
                        <input type="Date" className="form-control" id="date" placeholder="Enter your Age" onChange={this.onInputChange} name='date' />
                    <button className="btn btn-primary my-4 mx-2">Calculate</button>
                    {/* <h4>Your Age</h4> */}
                    </div>
                </form>
                <AgeDisplay years={this.state.ageyear} months={this.state.agemonth} days={this.state.agedate} submit={this.state.isSubmit}/>
            </div>
        )
    }
}
export default GetAge;
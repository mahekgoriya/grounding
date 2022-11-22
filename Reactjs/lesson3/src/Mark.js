import React, { Component } from 'react';
class Mark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:this.props.name,
            maths: 0,
            science: 0,
            english: 0,
            total: 0,
            average: 0.0
        }
    }
    CalculateResult = () => {
        this.setState({
            total: (this.state.maths + this.state.science + this.state.english)
        })
        this.setState({
            average:((this.state.maths + this.state.science + this.state.english)/3).toFixed(2)
        })
    }
    UpdateMath = (event) => {

        this.state.maths = parseInt(event.target.value);
        this.setState({
            maths: this.state.maths
        })
        this.CalculateResult();
    }
    UpdateScience = (event) => {

        this.state.science = parseInt(event.target.value);
        this.setState({
            science: this.state.science
        })
        this.CalculateResult();
    }
    UpdateEnglish = (event) => {

        this.state.english = parseInt(event.target.value);
        this.setState({
            english: this.state.english
        })
        this.CalculateResult();
    }
    render() {
        return (
            <tr>
                <td>
                    {this.state.name}
                </td>
                <td>
                    <input value={this.state.maths} type="number" placeholder='Maths' onChange={this.UpdateMath}></input>
                </td>
                <td>
                    <input value={this.state.science} type="number"  placeholder='Maths' onChange={this.UpdateScience}></input>
                </td>
                <td>
                    <input value={this.state.english} type="number"  placeholder='Maths' onChange={this.UpdateEnglish}></input>
                </td>
                <td align='center' id='total'>{this.state.total}</td>
                <td align='center' id='average'>{this.state.average}</td>
            </tr>
        );
    }
}
export default Mark;


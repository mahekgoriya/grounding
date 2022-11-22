import React, { Component } from 'react';
class ControlledAccessForm1 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    onChangeInput=(event)=> {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    onFormSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state);
        console.log(this.state.height)
        this.setState({volume:parseInt(this.state.height*this.state.length*this.state.width)})
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-8">
                        <h2>Controlled Access Form Example - 1st approach</h2>
                        <div className="card mt-5">
                            <div className="card-header bg-primary text-white">
                                <h3>Volume Calculator</h3>
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" name="height" placeholder="Height" onChange={this.onChangeInput} value={this.state.height} />
                                        <label htmlFor="height">Height</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" name="width" placeholder="Width" onChange={this.onChangeInput} value={this.state.width}/>
                                        <label htmlFor="width">Width</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" name="length" placeholder="Length" onChange={this.onChangeInput} value={this.state.length}/>
                                        <label htmlFor="lenght">Length</label>
                                    </div>
                                    <br/>
                                    <button onClick={this.onFormSubmit} type="submit" className="btn btn-primary">Calculate Volume</button>
                                    <div className='mt-3'><h4>{this.state.volume}</h4></div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ControlledAccessForm1;
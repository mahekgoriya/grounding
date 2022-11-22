import React, { Component } from 'react';
class MyLifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            CurrentTime:new Date().toLocaleTimeString()
          }
    }
    componentWillMount(){
        console.log("componentWillMount method called");
    }
    componentDidMount(){
        console.log("componentDidMount method called");
    }
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate method called")
        return true;
    }
    componentWillUpdate(){
        console.log("componentwillUpdate method called");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate method called");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount method called");
    }
    UpdateCurrentTime=()=>{
        this.setState({
            CurrentTime:new Date().toLocaleTimeString()
        });
    }
    render() { 
        return (  
            <div className="col-12">
                <h1>Lifecyle demo</h1>
                <button onClick={this.UpdateCurrentTime} className="btn btn-primary">Upadate Time</button>
                <h2>{this.state.CurrentTime}</h2>
            </div>
        );
    }
}
 
export default MyLifeCycle;
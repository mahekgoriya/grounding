import React, { Component } from 'react';
class 
ConditionalRendering extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isLogin:false,
            User:'Mahek'
         }
    }
    LoginButton(){
        return(<div className="btn btn-primary" onClick={this.ChangeState}>Login</div>)
    }
    LogoutButton(){
        return(<div className="btn btn-primary" onClick={this.ChangeState}>Logout</div>)
    }
    ChangeState=()=>{
        this.setState(previousState=>({
            isLogin:!previousState.isLogin
        }));
        console.log(this.state.isLogin)
    }
    GreetingMessage(){
        let message;
        if(this.state.isLogin===true)
        {
            return(<h3>Welcome {this.state.User}</h3>)
        }
        else{
            return(<h3>Welcome Guest. Please Login</h3>)
        }
    }
    render() { 
        let button;
        if(this.state.isLogin===true){
            button=this.LogoutButton();
        }
        else{
            button=this.LoginButton();
        }
        return (
            <div className="col-4">
                {this.GreetingMessage()}
                {button}
            </div>
          );
    }
}
 
export default ConditionalRendering;
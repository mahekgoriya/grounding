import React, { Component } from 'react';
function ListExample1(props){
    const state=props.states;
    var statelist=state.map((item)=><li>{item}</li>)
    return(
        <div>
            <h3>List in React Js</h3>
            <ul>
                {statelist}
            </ul>
        </div>
    )
}
export default ListExample1;
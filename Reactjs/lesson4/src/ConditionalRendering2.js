import React, { Component } from 'react';
function ConditionalRendering2(props){
    let msg=props.message;
    return(
        <div>
            {msg.length>0 && <h2>You have {msg.length} unread messages</h2>}
            {msg.length===0 && <h2>You have no new messages</h2>}
        </div>
    )
}
export default ConditionalRendering2;
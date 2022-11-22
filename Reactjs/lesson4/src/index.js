import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import MyLifeCycle from './LifeCycleDemo';
import EventHandelingTechnique from './AnotherEventHandlingMechanism';
import ConditionalRendering from './ConditionalRendering';
import ConditionalRendering2 from './ConditionalRendering2';
import ListExample1 from './ListExample1.js';
import ListExample2 from './ListExample2.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let array=['mahek', 'pooja'];
var states = ['Gujarat','Maharastra','Karanataka','Andhra-pradesh','Tamil nadu','Kerala'];
var states2=[{id:'0',name:'Gujarat'},{id:'1',name:'Maharashtra'}]
root.render(
  <div className="container">
    <div className="row">
    <EventHandelingTechnique/>
    <ConditionalRendering/>
    <ConditionalRendering2 message={array}/>
    </div>

    <br/>
    <br/>
    <div className='row'>
      <ListExample1 states={states}/>
    </div>
    
    <br/>
    <br/>
    <div className='row'>
      <ListExample2 states={states2}/>
    </div>
  </div>
);



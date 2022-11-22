import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShareDisplay from './ShareDisplay.js';

let stocksList=[{
  stock:"Reliance",
  prevClose:1950
},
{
  stock:"Adani Enterprise",
  prevClose:901
},
{
  stock:"Wipro",
  prevClose:807
},
{
  stock:"TCS",
  prevClose:3100
},
{
  stock:"Pidilite",
  prevClose:4000
}
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="container">
    <div className="row mt-5">
      <div className="col-12">
      <table className="table table-sm">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Company</th>
      <th scope="col">Current</th>
      <th scope="col">Change</th>
      <th scope="col"> &nbsp;&nbsp;%</th>
      <th scope="col">Prev Close</th>
    </tr>
  </thead>
  <tbody>
    <ShareDisplay stocks={stocksList}/>
  </tbody>
</table>
      </div>
    </div>
  </div>
);


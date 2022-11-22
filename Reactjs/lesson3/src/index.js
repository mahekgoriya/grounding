import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Movie from './Movie.js'
import Mark from './Mark.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
// function Moviepage(){
//     return(
//         <div className='container'>
//             <div className='row'>
//                 <Movie name="Bahubali" year="2016" photo="https://www.picsum.photos/300?random=1"/>
//                 <Movie name="Pushpa" year="2016" photo="https://www.picsum.photos/300?random=2"/>
//                 <Movie name="Jani Dushman" year="2016" photo="https://www.picsum.photos/300?random=3"/>
//                 <Movie name="RRR" year="2016" photo="https://www.picsum.photos/300?random=4"/>
//             </div>
//         </div>
//     )
// }
// root.render(<Moviepage/>);


function MarkSheet()
{
    return(
        <div className="container">
            <div className="row">
            <div className='col-12 text-center my-5 text-primary'>
              <h3>Example of how to change state from dynamic input</h3>
          </div>
          <div className='row'>
            <table className="table table-stripped" border={3}>
                <tr>
                    <th width="20%">Name</th>
                    <th width='15%'>Maths</th>
                    <th width='15%'>Science</th>
                    <th width='15%'>English</th>
                    <th width='17.5%'>Total</th>
                    <th width='17.5%'>Average</th>
                </tr>
                    <Mark name="Harshil"/>
                    <Mark name="Sahil"/>
                    <Mark name="Rohit"/>
            </table>
          </div>
            </div>
        </div>
    )
}
root.render(<MarkSheet/>);

import myimage1 from'./images/burger-bread.jpg';
import myimage2 from'./images/burger-tomato.jpg';
import myimage3 from'./images/burger-tomato-onion.jpg';
import myimage4 from './images/burger-tomato-onion-cobbige.jpg'
import myimage5 from './images/burger-tomato-onion-cobbige-cheese.png'
import { useState,useEffect } from 'react';

function MakeBurger(){
    const[burger,setBurger]=useState(0);
    const[burgerimage,setBurgerImage]=useState('');
    const[prepare,setPrepare]=useState('');

    useEffect(()=>{
        if(burger==0)
        {
        setBurgerImage(<div></div>);
        setPrepare(<a></a>);
        }
        else if(burger===1)
        {
        setBurgerImage(<img src={myimage1} className="img-fluid" width="300"height="300" alt="No Image"/> );
        setPrepare(<a></a>);
        }
        else if(burger===2){
        setBurgerImage(<img src={myimage2} className="img-fluid" width="300"height="300" alt="No Image"/> )
        
        setPrepare(<a href="/checkout"><button type="button" className="btn btn-primary">Prepare It for Me</button></a>)
        }
        else if(burger===3)
        setBurgerImage(<img src={myimage3} className="img-fluid" width="300"height="300" alt="No Image"/> )
        else if(burger===4)
        setBurgerImage(<img src={myimage4} className="img-fluid" width="300"height="300" alt="No Image"/> )
        else
        setBurgerImage(<img src={myimage5} className="img-fluid" width="300"height="300" alt="No Image"/>)
    },[burger])

    return(
    <div className="contqainer">
        <div className="row">
            <div className="col-12 d-flex">
                <div className='col-6' >
                    <div ><button type="button" className="btn btn-primary col-8 mt-5 mb-1 mx-3" onClick={()=>{setBurger(1);alert("You have added a Bread");}}>Add Breads</button></div>
                    <div ><button type="button" className="btn btn-primary col-8 my-1 mx-3" onClick={()=>{setBurger(2);alert("You have Added a Tomato")}}>Add Tomato</button></div>
                    <div ><button type="button" className="btn btn-primary col-8 my-1 mx-3" onClick={()=>{setBurger(3);alert("You have Added an Onion")}}>Add Onion</button></div>
                    <div ><button type="button" className="btn btn-primary col-8 my-1 mx-3" onClick={()=>{setBurger(4);alert("You have Added a Lettuce")}}>Add Lettuce</button></div>
                    <div ><button type="button" className="btn btn-primary col-8 my-1 mx-3" onClick={()=>{setBurger(5);alert("You have Added a Cheede")}}>Add Cheese</button></div>
                    <br/>
                    <br/>
                    <div>{prepare}</div>
                </div>
                <div>
                    {burgerimage}
                    {/* <img src={image} className="img-fluid" width="300"height="300" /> */}
                </div>
            </div>
        </div>
    </div>
    
    )
}
export default MakeBurger;
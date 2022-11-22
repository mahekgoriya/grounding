import { useState } from "react";
import logo from "./logo.svg";
import Employee from "./components/Employee.js";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const showEmployee = true;
  const [employee, setEmployee] = useState([
    { id:1,name: "Mahek", role: "Director", img: "https://picsum.photos/200" },
    { id:2,name: "Joy", role: "Senior Developer", img: "https://picsum.photos/201" },
    { id:3,name: "Ravi", role: "Intern", img: "https://picsum.photos/202" },
    { id:4,name: "Dixit", role: "Developer", img: "https://picsum.photos/203" },
    { id:5,name: "Rajveer", img: "https://picsum.photos/204?grayscale" },
  ]);
  function updateEmployee(id, newName, newRole) {
    console.log("updateEmployee inside app.js");
    const updatedEmployee=employee.map((e)=>{
      if(id==e.id){
      return{...e,name:newName, role:newRole}
      }
      return e;
    })
    setEmployee(updatedEmployee);
  }
  return (
    <div className="container">
      <div className="row">
        {showEmployee ? (
          <>
            {/* <input type="text" onChange={(e) => { console.log(e.target.value); setRole(e.target.value); }} /> */}
            {employee.map((employee) => {
              return (
                <Employee
                  key={employee.id}
                  id={employee.id}
                  name={employee.name}
                  role={employee.role}
                  img={employee.img}
                  updateEmployee={updateEmployee}
                />
              );
            })}
          </>
        ) : (
          <p>you can't see the employees</p>
        )}
      </div>
    </div>
  );
}

export default App;

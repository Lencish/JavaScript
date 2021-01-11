import React, { useEffect, useState } from "react";
import Employee from "./Employee";
function EmployeeList ({StudentListData}){
let [Employees, setEmployees] = useState([
    {
name: "David Lenca",
email: "Bolandiier@hotmail.com",
phone: "0734567231",
skills:"porn,money",
avatar: "https://i.imgur.com/t9HFQvX.png",
    },
{
name: "Lisa svensson",
email: "lisa.svensson@gmail.se",
phone: "07563456001",
skills:"Css,Html,Javascript",
avatar: "https://i.imgur.com/TUhCrsY.png",
},
{
    name: "Jabba Tha Hhut",
    email: "jabba@fatso.nu",
    phone: "07010009666",
    skills:"java,CSS,Html",
    avatar: "https://i.imgur.com/t9HFQvX.png",
},
]);
  
  useEffect(function () {
    let input = JSON.parse(localStorage.getItem("EmployeeData"));
    if (input) {
      setEmployees(input);
    }
  }, []); 

  useEffect(
    function () {
      localStorage.setItem("EmployeeData", JSON.stringify(Employees));
    },
    [Employees] 
  );


  


function handleAddEmployee() {
    setEmployees(function (prevState) {
     
      return [
        ...prevState,
        {
          name: "Pelle svanslos",
          email: "pellewithoutatail@outlook.com",
          phone: "0708456789",
          skills: "Vue, firebase, git, c#",
          avatar: "https://i.imgur.com/TUhCrsY.png",
        },
      ];
    });
  }

  return (
    <>
      <h3>Employee List</h3>
      <button className="button" onClick={handleAddEmployee}>
        Add Employee
      </button>
      {Employees.map(function ({ name, email, phone, skills, avatar }) {
        return (
          <Employee
            key={Math.random() * Date.now()} 
            name={name}
            email={email}
            phone={phone}
            skills={skills}
            avatar={avatar}
          />
        );
      })}
    </>
  );
}

export default EmployeeList;
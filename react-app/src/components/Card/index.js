import React from "react";
import "./style.css";

function Card({filteredEmployees, employees, search}) {
  let card = [];
  if(search){filteredEmployees.map((employee) => (
    card.push(
      <tr key={employee.name.first+employee.name.last}>
        <td><img alt={employee.name} className="img-fluid" src={employee.picture.thumbnail} /></td>
        <td>{employee.name.first} {employee.name.last}</td>
        <td>{employee.location.city}</td>
        <td className="employeeCard">{employee.phone}</td>
        <td className="employeeCard">{employee.email}</td>
        <td>{employee.dob.date}</td>
      </tr>
    )
  ))
  }else{
    employees.map((employee) => (
    card.push(
      <tr key={employee.name.first+employee.name.last}>
        <td><img alt={employee.name} className="img-fluid" src={employee.picture.thumbnail} /></td>
        <td>{employee.name.first} {employee.name.last}</td>
        <td>{employee.location.state}</td>
        <td>{employee.phone}</td>
        <td>{employee.email}</td>
        <td>{employee.dob.date}</td>
      </tr>
    )
  ))
  };
  
  return card;
}
export default Card;
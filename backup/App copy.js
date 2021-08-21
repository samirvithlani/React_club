import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { EmployeeList } from './MyComponents/EmployeeList';
import { useState } from 'react';
import { AddEmployee } from './MyComponents/AddEmployee';


function App() {

  const onDelete = (employee) => {

    console.log("on delete function called...", employee)

    // let index = employees.indexOf(employee)
    // employees.splice(index, 1)
    
    setEmployees(employees.filter((e) => {

      return e !== employee;
    })
    )

  }
  const addEmployee = (employeeName,age)=>{

    console.log("adding ....",employeeName,age)

    const emp = {

      eName:employeeName,
      eAge :age

    }

    //useState...
    // ... spreadOperator  --> array expand , object expand ...
    
    setEmployees([...employees,emp])

  }

  const [employees, setEmployees] = useState([
    {
      eId: 1,
      eName: "samir",
      eAge: 20
    },
    {
      eId: 2,
      eName: "raj",
      eAge: 25
    },
    {
      eId: 3,
      eName: "jay",
      eAge: 18
    }


  ])

  return (

    <div>
      <Header title="Employee Management" searchBar={false} />
      <AddEmployee addEmployee ={addEmployee}/>
      <EmployeeList EmployeeList={employees} onDelete={onDelete} />
      <Footer />

    </div>
  )

}

export default App;

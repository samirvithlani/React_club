import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { EmployeeList } from './MyComponents/EmployeeList';
import { useState } from 'react';
import { AddEmployee } from './MyComponents/AddEmployee';
import { Route, Switch } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { Product } from './pages/Product';
import { MainHeader } from './MyComponents/MainHeader';
import { ProductDetail } from './pages/ProductDetail';
import { SimpleForms } from './pages/SimpleForms';
import { UsersList } from './api/UsersList';
import { Userdetail } from './api/User-detail';
import { AddUser } from './api/AddUser';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';
;




function App() {

  const [users, setusers] = useState([])
  const [isLoading, setisLoading] = useState(false)
  const [isError, setisError] = useState(null)

  // function fetchUserData() {

  //   fetch('https://reqres.in/api/users?page=2').then(res => {

  //     console.log(res)
  //     return res.json();

  //   }).then(data => {

  //     console.log(data.data)
  //     setusers(data.data)
  //   })
  // }

  async function addUser(user) {

    // var user ={
    //   name:"samir",
    //   job:"Dev"
    // }


    //error handling...
    //print response on ui page...

    console.log("object", user)
    console.log("Stringfy object", JSON.stringify(user))

    const res = await fetch('https://reqres.in/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const resData = await res.json();
      console.log(resData)
      //condition  is res is ok or not ?
      toast.success("ok",{
        position:toast.POSITION.TOP_CENTER
      })
    //sucess
    //else catch ...

    }





    async function fetchFiles() {
      setisLoading(true)
      try {

        const res = await fetch("http://localhost:8080/files")
        const data = await res.json();
        console.log(data)


        if (!res.ok) {

          throw new Error('Something Went Wrong .....')
        }
        setusers(data)
        setisLoading(false)

    } catch (error) {

      //set error message...
      //console.log(error.message)
      setisError(error.message)
      setisLoading(false)
    }
  }




  async function fetchUserData() {
    setisLoading(true)
    try {

      const res = await fetch("https://reqres.in/api/users?page=2")
      const data = await res.json();


      if (!res.ok) {

        throw new Error('Something Went Wrong .....')
      }
      setusers(data.data)
      setisLoading(false)

    } catch (error) {

      //set error message...
      //console.log(error.message)
      setisError(error.message)
      setisLoading(false)
    }
  }

  return (

    <div>

      <button onClick={fetchUserData}>FETCH DATA</button>
      <button onClick={fetchFiles}>FETCH FILE</button>
      <button onClick={addUser}>ADD USER</button>

        <ToastContainer/>
      <Route path="/" exact>

        {isLoading && <p>LOADING .....</p>}
        {/* is error message */}
        {isError && <p>{isError}</p>}
        {!isError && <UsersList users={users} />}



      </Route>

      <Route path="/adduser">
        <AddUser addUser={addUser} />
      </Route>

      <Route path="/user/:id" exact>
        <Userdetail />
      </Route>
    </div>
  )

}

export default App;

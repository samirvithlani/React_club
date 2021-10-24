import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import { Footer } from './MyComponents/Footer';
import { EmployeeList } from './MyComponents/EmployeeList';
import { createContext, useState } from 'react';
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
import { Child } from './Child';
import { FileUploader } from './pages/FileUploader';



//this is obejct of contect
export const GlobleInfo = createContext();

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


  /*   use state number value  color --->*/

  //login profile --> detail -->
  const [color, setcolor] = useState('blue')

  return (

    <GlobleInfo.Provider value ={{color:color}}>
    <div>
      {/* <h1 style = {{color:color}}>APP JS</h1> */}
      {/* props */}
      {/* <Child/> */}

      <FileUploader/>
    </div>
    </GlobleInfo.Provider>
  )

}

export default App;

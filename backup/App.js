import logo from './logo.svg';
import './App.css';

const users = [
  {
    name:"Samir",
    email:"samir@gmail.com",
    age:20
  },
  {
    name:"Raj",
    email:"raj@gmail.com",
    age:22
  },
  {
    name:"parth",
    email:"parth@gmail.com",
    age:25
  },

]


function UserList(){

  return users.map((user)=>{

    return(
                      <div>
                         {user.name}
                         <span>
                           <a href = {user.email}>{user.email}</a>
                           <p>{user.age}</p>
                         </span>
           
                      </div>
          )

              })
}

function App() {

  return(

    <div>
      <UserList/>
    </div>
  )
//   const name ="REACT"

//   const tech =["java","python","c"]
//   const users  = [
//   {

//     name:"Samir",
//     email:"samir@gmmail.com",
//     age:20
//   },
//   {

//     name:"Harsh",
//     email:"Harsh@gmmail.com",
//     age:22
//   },
//   {

//     name:"Raj",
//     email:"raj@gmmail.com",
//     age:25
//   }

// ]

//   function add(){

//     return 10 + 10;
//   }

//   return (

//     <div>
      
//         <h1>{name}</h1>
//         <h3>{add()}</h3>
//         <h5>{tech}</h5>
//         <h5>
//           {
//             users.map((user)=>{
//                 return(

                  
                  
//                   <div>
//                     {user.name}
//                     <span>
//                       <a href = {user.email}>{user.email}</a>
//                       <p>{user.age}</p>
//                     </span>
//                  </div>

                  
//                 )
              
//             })
//           }
//         </h5>
//     </div>
//   );
  
}

export default App;

<button onClick={fetchUserData}>FETCH DATA</button>
<button onClick={fetchFiles}>FETCH FILE</button>
<button onClick={addUser}>ADD USER</button>

  <ToastContainer/>
<Route path="/" exact>

  {
  isLoading && <p>LOADING .....</p>}
  {/* is error message */}
  {isError && <p>{isError}</p>}
  {!isError && <UsersList users={users} />
  
  }



</Route>

<Route path="/adduser">
  <AddUser addUser={addUser} />
</Route>

<Route path="/user/:id" exact>
  <Userdetail />
</Route>
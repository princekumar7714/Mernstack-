import React, { useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashBoard from "./components/Dashboard/EmployeeDashBoard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalstorage, setLocalstorage } from "./utils/LoacalStorage";

function App() {
  const [user, setUser] = useState(null)
  // useEffect(() => {
  //   setLocalstorage();
  //   getLocalstorage()
  // });

  const handleLogin = ( email , password) =>{
    if(email == 'admin@me.com' && password == '123'){
    setUser('admin')
    
    }else if(email == 'user@me.com' && password == '123'){
      setUser('employee')
      
    }
    else{
      alert("Invalid information")
    }

  }
  // handleLogin("admin@me.com", 123);
  return (
    <>
      {!user ? <Login handleLogin ={handleLogin} /> : ' '} 
      {user == 'admin' ? <AdminDashboard/> : <EmployeeDashBoard/>}
      {/* <EmployeeDashBoard/> */}
      {/* <AdminDashboard/> */}
    </>
  );
}

export default App;

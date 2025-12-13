import React from "react";
import Header from "../others/Header";
import CreateTask from "../others/CreateTask";
import AllTask from "../others/AllTask";

function AdminDashboard() {
  return (
    <div className="  screen-full w-full p-3 bg-white ">
      <Header />
    <CreateTask/>
    <AllTask/>
    </div>
  );
}

export default AdminDashboard;

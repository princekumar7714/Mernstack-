import React, { useState } from "react";

function Login({handleLogin}) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();
    // console.log("Email is = ", email);
    // console.log("password is = ", password);
    handleLogin(email, password);
    setemail("");
    setpassword("");
  };
  return (
    <div className="flex items-center h-screen w-screen justify-center">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form
          onSubmit={(e) => {
            SubmitHandler(e);
          }}
          className="flex flex-col justify-center items-center"
        >
          <input
            required
            className="border-2  bg-transparent border-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-gray-400"
            type="email"
            placeholder="Enteryour email "
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
          />
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
            className="border-2 bg-transparent border-emerald-600 rounded-full py-3 px-5 text-xl mt-4 placeholder:text-gray-400"
            type="password"
            placeholder="Enter your pasword"
          />
          <button className="border-none text-white mt-5 bg-emerald-600 rounded-full py-3 px-5 text-xl placeholder:text-white">
            Login{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

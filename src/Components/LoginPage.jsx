import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { AuthContext, login } from "../Context/AuthContext";
import styled from "styled-components";
// import { color } from "@mui/system";

const Button = styled.button`
background-color:${({color})=> color=="light"? "white":"black"};
color:${({color})=> color=="light"? "black":"white"}
`
const LoginPage = () => {
  const { token , logout,handleColor,color } = useContext(AuthContext);

  const { login, isAuth } = useContext(AuthContext);
  // console.log(login)
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    // console.log()
    const { name, value } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const handleSubmit = async () => {
    let res1 = await fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let res2 = await res1.json();
    login(res2.token);
  };

  const { email, password } = userData;
  return (
    <>
      <h1>{isAuth ? "User is Logged in" : "Not registered"}</h1>
      <h1>User LogIn</h1>
      <input
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Enter the Email Id"
        type="text"
      />
      <input
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter the password"
        type="text"
      />
      <Button color={color} onClick={handleSubmit}>LOGIN</Button>
    </>
  );
};

export default LoginPage;

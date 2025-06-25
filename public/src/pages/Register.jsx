import React, { useState ,useEffect} from "react";
import {  Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { registerRoute } from "../utils/ApiRouters";
function Register() {
  const navigate=useNavigate()
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    dragable: true,
    theme: "dark",
  };
  useEffect(()=>{
    if(localStorage.getItem('chat-app-user')){
     navigate('/')
    }
},[])
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
     
      const { username, email, password } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });
      console.log(data)
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem("chat-app-user", JSON.stringify(data.user));
        navigate('/')
      }
      
    }
  };
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const handleValidation = () => {
    const { username, email, password, confirmPassword } = values;

    if (password !== confirmPassword) {
      toast.error("password and comfirm password should be same", toastOptions);
      return false;
    } else if (username.length < 3) {
      toast.error("username should contain atleast 4 characters", toastOptions);
      return false;
    } else if (password.length < 6) {
      toast.error("password should contain atleast 4 characters", toastOptions);
      return false;
    } else if (email === "") {
      toast.error("email is required", toastOptions);
      return false
    }
    return true;
  };
  return (
    <>
      <FormContainer>
        <form onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={logo} alt="logo" />
            <h1>snappy</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="email"
            placeholder="User Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="password"
            placeholder="Comfirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User</button>
          <span>
            Already have an account ? <Link to="/login">Login</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}
const FormContainer = styled.div` height:100vh;
width:100vw;
background-color:#131324;
display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  img{
    height:5rem
  }
  .brand{
    display:flex;
    align-items:center;
    gap:1rem;
    justify-content:center;
  }
  h1{
    color:white;
    text-transform:uppercase
  }
  form{
    display:flex;
    flex-direction:column;
    gap:2rem;
    background-color:#00000076;
    border-radius:2rem;
    padding:3rem 5rem
  }
  input{
    background-color:transparent;
    padding:1rem;
    border:0.1rem solid #4e0eff;
    border-radius:0.4rem;
    color:white;
    width:100%;
    font-size:1rem;
    

  }
  input:focus{
        border: 0.1rem solid #997af0;
        outline:none
    }
  button{
    background-color:#997af0;
    color:white;
    padding:1rem 2rem;
    border:none;
    font-weight:bold;
    cursor:pointer;
    border-radius:0.4rem;
    font-size:1rem;
    text-transform:uppercase;
    transition:0.5s ease-in-out
    &:hover{
        background-color:#4e0eff;
    }
  }
  span{
    color:white;
    text-transform:uppercase;
    a{
        color:#4e0eff;
        text-decoration:none;
        fond-weight:bold;
    }
  }
`;
export default Register;

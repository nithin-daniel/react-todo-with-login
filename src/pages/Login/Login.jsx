import React, { useState } from 'react'
import styles from "../Signup/Signup.module.css"
import { Link,useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();
    const [userData,setUserData] = useState(
        {
            email:"",
            password:"",
        }
    )
    const loginUser = () =>{
        console.log(userData);
        let userDatas = JSON.parse(localStorage.getItem("userDatas"))
        if(!userDatas){
            userDatas = []
        }
        if(userDatas.some((obj)=>obj.email==userData.email && obj.password==userData.password)){
            const user = userData.filter((obj)=>obj.email==userData.email)
            localStorage.setItem("loggedInUser",JSON.stringify(userData))
            navigate("/todo")
        }else{
            alert("failed")
        }
    }
  return (
    <div className={styles.mainContainer}>
        <div className={styles.formContainer}>
            <input type="email" 
            required
            value={userData.email}
            onChange={(e)=>{
                setUserData({...userData,email:e.target.value})
            }}
            placeholder='Enter Your Email id'
            className={styles.userPasswordInput}/>
            <input type="password" 
            required
            value={userData.password}
            onChange={(e)=>{
                setUserData({...userData,password:e.target.value})
            }}
            placeholder='Enter Your Account Password'
            className={styles.userPasswordInput}/>

            <button onClick={loginUser} className={styles.submitButton}>Login</button>
        </div>
        <Link to='/signup'>
            <p className={styles.link}>Don't have account</p>
        </Link>
    </div>
  )
}

export default Login

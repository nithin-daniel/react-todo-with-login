import React, { useState } from 'react'
import styles from "./Signup.module.css"
import { Link } from 'react-router-dom'
const Signup = () => {
    const [userData,setUserData] = useState(
        {
            name:"",
            email:"",
            password:"",
        }
    )
    const storeData = () =>{
        console.log(userData);
        let userDatas = JSON.parse(localStorage.getItem("userDatas"))
        if(!userDatas){
            userDatas = []
        }
        if(userDatas.some((obj)=>obj.email==userData.email)){
            alert("user exists")
            return
        }
        userDatas.push(userData)
        localStorage.setItem("userDatas",JSON.stringify(userDatas))
    }
  return (
    <div className={styles.mainContainer}>
        <div className={styles.formContainer}>
            <input type="text"
            required
            value={userData.name}
            onChange={(e)=>{
                setUserData({...userData,name:e.target.value})
            }}
            placeholder='Enter Your Full Name'
            className={styles.User} />
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

            <button onClick={storeData} className={styles.submitButton}>Signup</button>
        </div>
        <Link to='/login'>
            <p className={styles.link}>Already have an account? Login Now</p>
        </Link>
    </div>
  )
}

export default Signup

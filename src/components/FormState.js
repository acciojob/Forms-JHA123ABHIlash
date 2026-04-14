import React, { useState } from 'react'
import Card from './Card';

export default function FormState() {
    const[formdata,setFormdata]=useState({full_name:"",email:"",password:"",cpassword:""});

    function handleChange(e){
                    const  {name, value} = e.target
        setFormdata(prev=>{
            return{...prev,[name]:value}
        });
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(formdata);
    }

  return (
    <div>
       <Card id="form-state-link">
         <form id="info-form" onSubmit={handleSubmit}>
            <label htmlFor='full_name'>Full Name: </label>
            <input type='text' name='full_name' value={formdata.full_name} id="full_name" onChange={handleChange}/><br/>

            <label htmlFor='email'>Email: </label>
            <input type='email' name="email" value={formdata.email } id="email" onChange={handleChange}/><br/><br/>

            <label htmlFor='password'>Password: </label>
            <input type='password' name='password' value={formdata.password} id="password" onChange={handleChange}/><br/>

            <label htmlFor='password_confirmation'>Password Confirmation: </label>
            <input type='password' name='cpassword' value={formdata.cpassword} id="password_confirmation" onChange={handleChange} /><br/>

            <button>Submit</button>
        </form>
       </Card>
    </div>
  )
}

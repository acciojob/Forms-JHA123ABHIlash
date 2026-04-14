import React from 'react'
import Card from './Card'
export default function Form() {
    function handleSubmit(e){
        e.preventDefault();
    }
  return (
    <div>
        <Card id="form-link">
            <form id="info-form"  onSubmit={handleSubmit}>
            <label htmlFor='full_name'>Full Name: </label>
            <input type='text' id="full_name" /><br/>

            <label htmlFor='email'>Email: </label>
            <input type='email' id="email" /><br/><br/>

            <label htmlFor='password'>Password: </label>
            <input type='password' id="password" /><br/>

            <label htmlFor='password_confirmation'>Password Confirmation: </label>
            <input type='password' id="password_confirmation" /><br/>

            <button>Submit</button>
        </form>
        </Card>
    </div>
  )
}

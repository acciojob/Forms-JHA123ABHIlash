import React, { useRef } from 'react'
import Card from './Card'
export default function FormRef() {

     const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const confirmRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(nameRef.current.value);
    console.log(emailRef.current.value);
    console.log(passRef.current.value);
    console.log(confirmRef.current.value);
  }


  return (
    <div>
        <Card id="form-ref-link">
            <form id="info-form" onSubmit={handleSubmit}>
            <label htmlFor='full_name'>Full Name: </label>
            <input type='text' id="full_name" ref={nameRef}/><br/>

            <label htmlFor='email'>Email: </label>
            <input type='email' id="email" ref={emailRef}/><br/><br/>

            <label htmlFor='password'>Password: </label>
            <input type='password' id="password"ref={passRef} /><br/>

            <label htmlFor='password_confirmation'>Password Confirmation: </label>
            <input type='password' id="password_confirmation" ref={confirmRef}/><br/>

            <button>Submit</button>
        </form>
        </Card>
    </div>
  )
}

import React from 'react'
import{useForm} from 'react-hook-form'
import "./register.css";



export default function Form() {
   const {register, handleSubmit, formState:{errors}}=useForm()
   const onSubmit =data=>console.log(data);

  return (
   <section>
    <div className='register'>
        <div className='col-1'>
            <h2>Sign In</h2>
            <span>Register and enjoy the game</span>
            <form id='form' className='flex flex-col'onSubmit={handleSubmit(onSubmit)} >
                
                <input type='text'{...register("username",{required:true})} placeholder='username'></input>
                {errors.username?.type==="required"&&"Username is required"}

                <input type='text'{...register("password",{required:true})} placeholder='password'></input>
                {errors.password?.type==="required"&&"Password is required"}

                <input type='text'{...register("confirmpwd",{required:true})} placeholder='confirm password'></input>
                {errors.confirmpwd?.type==="required"&&"Confirm password  is required"}

                <input type='text' {...register("email",{required:true})}placeholder='Email'></input>
                {errors.email?.type==="required"&&"Email is required"}
             
                <button className='btn'>Sign In</button>
            </form>
        </div>
    </div>
   </section>
  )
}
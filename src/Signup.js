import './Signup.css';
import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit=(event)=>{
    event.preventDefault()
    console.log(formData,"input data")
  }

  return (
    <div className='signup-card'>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor=''>First Name</label>
        <input
          type='text'
          placeholder='Enter your First name'
          name='firstName'
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <label htmlFor=''>Last Name</label>
        <input
          type='text'
          placeholder='Enter your Last name'
          name='lastName'
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <label htmlFor=''>Email</label>
        <input
          type='email'
          placeholder='Enter your email'
          name='email'
          value={formData.email}
          onChange={handleInputChange}
        />
        <label htmlFor=''>Password</label>
        <input
          type='password'
          placeholder='Enter your password'
          name='password'
          value={formData.password}
          onChange={handleInputChange}
        />
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;

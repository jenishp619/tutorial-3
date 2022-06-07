import React from 'react'
import validate from './validate'
import useForm from './useForm'; 

const FormSignup = ({submitForm}) => {
    const {handleChange,values,handleSubmit,errors} = useForm(submitForm,validate);
  return (
    <div>
        <form action="" className="form" onSubmit={handleSubmit}>     
              <div className="form-inputs">
                  <label htmlFor="username" className="form-label">  <center id='norm'>Username</center>
                      <input type="text"  name="username" className="form-input" placeholder='Enter your username' value={values.username} onChange={handleChange}/>
                     {errors.username && <p>{errors.username}</p>}
                  </label>
              </div>
              <div className="form-inputs">
                  <label htmlFor="Email" className="form-label">
                  <center id='norm'>Email</center>
                      <input type="email" name="email" className="form-input" placeholder='Enter your email-id'  value={values.email} onChange={handleChange}/>
                      {errors.email && <p>{errors.email}</p>}
                  </label>
              </div>
              <div className="form-inputs">
                  <label htmlFor="password" className="form-label">
                  <center id='norm'>Password</center>
                      <input type="password" name="password" className="form-input" placeholder='Enter your password'  value={values.password} onChange={handleChange}/>
                      {errors.password && <p>{errors.password}</p>}
                  </label>
              </div>
              <div className="form-inputs">
                  <label htmlFor="confirmpass" className="form-label">
                  <center id='norm'>Confirm Password</center>
                      <input type="password"  name="confirmpass" className="form-input" placeholder='Enter your password again'  value={values.confirmpass} onChange={handleChange}/>
                      {errors.confirmpass && <p>{errors.confirmpass}</p>}
                  </label>
                  <div>
                  <div ><button className='btn' type='submit'>Submit</button></div>
                  </div>
              </div>
        </form>
    </div>
    
  )
}

export default FormSignup
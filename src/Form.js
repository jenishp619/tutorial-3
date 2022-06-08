import React ,{useState} from 'react'
import FormSignup from './Signup'
import FormSuccess from './Loginsuccess';
const Form = () => {

    const [isSubmit , Submitset] = useState(false);

    function submitForm(){
        Submitset(true);
    }
  return (
    <div>
      
    {!isSubmit ? <FormSignup submitForm={submitForm}/> : <FormSuccess/>}
    </div>
  )
}

export default Form
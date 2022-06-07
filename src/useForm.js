import { useState,useEffect } from "react";
const useForm=(callback,validate)=>{

    const [values ,setvalues] = useState({
        username:'',
        email:'',
        password:'',
        confirmpass:''
    })

    const [errors,setErrors] = useState({})
    const [isSubmit,setsubmit] =useState(false);
 const handleChange= (e)=>{
    setvalues({
        ...values,
        [e.target.name]:e.target.value
    })
}
const handleSubmit= e=>{
    e.preventDefault();
    setErrors(validate(values));
    setsubmit(true);
    
};
  
useEffect(()=>{
    if(Object.keys(errors).length ===0 && isSubmit){
        callback();
    }
})
return {handleChange,values,handleSubmit,errors};

};
export default useForm;
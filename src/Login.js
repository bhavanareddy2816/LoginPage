import {useState , useEffect} from "react";
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const initialValues = useState({email : "" , password : ""});
  const[formvalues , setFormValues] = useState(initialValues);
  const[isSubmit , setIsSubmit] = useState(false);
  const[formErrors , setFormErrors] = useState({});
  const[isAuth , setIsAuth] = useState(false);

  const navigate = useNavigate();
  


 //Binding values and changing values as per the user input
  const onChangeHandler = (e) => {
      const {name , value} = e.target;
      setFormValues({...formvalues , [name] : value})
      console.log(formvalues);
  }

  
// submitting form
  const onSubmitHandler = (e) => {
      e.preventDefault();
      setFormErrors(validate(formvalues));
      setIsSubmit(true);
}
 //getting all form values and checking authorization
  useEffect(() => {
    if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(formvalues);
        setIsAuth(true);
    }else{
       setIsAuth(false);
    }
  } , [formErrors])

  
  //Navigating to other components based on the authorization result
  


 //Form validation
  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if(!values.email) {
        errors.email = "Email is Required";
    }else if(!regex.test(values.email)){
        errors.email = "this is not a valid email"
    }
    if(!values.password) {
        errors.password = "Password is Required";
    }if(values.password.length > 5 ){
      errors.password = "Password is too length";
      
    }
    return errors;
  }

  
 const onClickHandler = () => {
    if(isAuth){
        navigate("/home");
    } else {
       navigate("/");
    }
}
  return (
   <div className='login'>
       <div className='card container'>
        <form onSubmit={onSubmitHandler}>
          <h2>Login Page</h2>
          <div className='underline'></div>
            <div className='form'>
              <div className='field'>
                <input type="email" name='email' placeholder='Enter your mail' value={formvalues.email} onChange={onChangeHandler}/>
              </div>
              <p>{formErrors.email}</p>
              <div className='field'>
                <input type="password" name='password' placeholder='Enter Password' value={formvalues.password} onChange={onChangeHandler}/>
              </div>
              <p>{formErrors.password}</p>
              <button className='btn-primary btn' type="submit" onClick={onClickHandler}>Login</button>
            </div>
        </form>
      </div>
   </div>
  )
}

export default Login;
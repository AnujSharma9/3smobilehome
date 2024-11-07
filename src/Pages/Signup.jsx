import { Toast } from "bootstrap";
import React, { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { signUpUser } from "../Service/User";

export function Signup(){
    const [showPassword , setShowPassword] = useState(false)
    const [name , setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber , setPhoneNumber] = useState('')
    const [password , setPassword] = useState('')
    const [confirmpassword , setConfirmPassword] = useState('')
    const navigate = useNavigate()

    const onSignUp = async () => {
        if (name.length === 0) {
            toast.warn('Please enter your name');
            return;
        }

        else if (phoneNumber.length < 10 || phoneNumber.length > 10){
        toast.warn('Please enter your valid phone Number')
        return ;
        }
        else if (email.length === 0){
            toast.warn('please enter email')
        }
        else if (password.length === 0){
            toast.warn('please enter password')
        }
        else if (confirmpassword.length === 0){
            toast.warn('please enter confirm password')
        }
        else if (confirmpassword != password){
            toast.warn('please enter valid confirm password')
        }else{
            const result = await signUpUser
            (name,phoneNumber,email,password)
            if (result.status === 'Success'){
                toast.success('sucessfully registerd the user')
                navigate('/')
            }else{
                toast.error(result['error'])
            }
        }
        // Additional validation and submit logic here
    };

    return(      
        <>
            <h1 className="title">SignUp</h1>
            <div className="row">
              <div className="col"></div>


                <div className="col">  <div className="form">
                <div class="mb-3">
                    <label for="exampleInputName1" class="form-label">Employee Name</label>
                    <input onChange={(e)=> setName(e.target.value)} type="text" class="form-control" id="exampleInputName1" aria-describedby="exampleInputName1"/>
                  </div>

                  <div class="mb-3">
                    <label for="exampleInputPhoneNumber1" class="form-label">Phone Number</label>
                    <input onChange={(e)=> setPhoneNumber(e.target.value)} type="tel" class="form-control" id="exampleInputPhoneNumber1" aria-describedby="exampleInputPhoneNumber1"/>
                  </div>
                 
                 <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>


                  <label  for="exampleInputPassword1" class="form-label">Password</label>
                   <div className="input-group mb-3">
                     
                            <input
                               onChange={(e)=>setPassword(e.target.value)}
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Password"
                            />
                            <div className="input-group-append">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        <label  for="exampleInputPassword1" class="form-label">Confirm Password</label>
                   <div className="input-group mb-3">
                     
                            <input
                               onChange={(e)=>setConfirmPassword(e.target.value)}
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Password"
                            />
                            <div className="input-group-append">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                   <button onClick={onSignUp} type="submit" class="btn btn-primary">Submit</button>

                   <div> have an account ? <Link to={'/'}>Sigin here</Link> </div>
                </div>
            </div>
        <div className="col"></div>
    </div>
        </>
    )
}
export default Signup
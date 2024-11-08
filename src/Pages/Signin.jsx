import React, { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { signInUser } from "../Service/User";

export function Signin(){

    const [showPassword , setShowPassword] = useState(false);
    const [email, setEmail] = useState('')
    const [password , setPassword] = useState('')
    const navigate = useNavigate()

    const onSignin = async () => {
        try {
            if (email.length === 0) {
                toast.warn('Please enter email');
            } else if (password.length === 0) {
                toast.warn('Please enter password');
            } else {
                const result = await signInUser(email, password);
                if (result.status === 'Success') {
                    toast.success('Welcome to the stock');
                    navigate('/stock');
                } else {
                    toast.error(result['error']);
                }
            }
        } catch (error) {
            toast.error('Failed to connect to the backend');
        }
    };
    

    return(
        <>
        <h1 className="title">Signin</h1>
            <div className="row">
              <div className="col"></div>
                <div className="col">  <div className="form">
                 <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input onChange={(e)=>setEmail(e.target.value)}
                    type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                   <div className="input-group mb-3">
                            <input onChange={(e)=>setPassword(e.target.value)}
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

                
                   <button onClick={onSignin} type="submit" class="btn btn-primary">Submit</button>

                   <div>Don't have an account ? <Link to={'/signup'}>Sigin-up here</Link> </div>
                </div>
            </div>
        <div className="col"></div>
    </div>
               
 </>
    )
}
export default Signin
import React, { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

 

export function Signin(){

    const [showPassword , setShowPassword] = useState(false);

    return(
        <>
        <h1 className="title">Signin</h1>
            <div className="row">
              <div className="col"></div>
                <div className="col">  <div className="form">
                 <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <label for="exampleInputPassword1" class="form-label">Password</label>
                   <div className="input-group mb-3">
                            <input
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

                
                   <button type="submit" class="btn btn-primary">Submit</button>

                   <div>Don't have an account ? <Link to={'/signup'}>Sigin-up here</Link> </div>
                </div>
            </div>
        <div className="col"></div>
    </div>
               
 </>
    )
}
export default Signin
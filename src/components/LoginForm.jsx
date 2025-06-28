import React from 'react';
import {LoginReqest} from "../apirequest/ApiRequest.js";
import {useNavigate} from "react-router";
import {toast} from "react-toastify";

const LoginForm = () => {
    let navigate = useNavigate();

let [formData, setFormData] = React.useState({});

const inputHandler=(event)=>{
    let {name,value} = event.target;
    setFormData(prevObj => ({...prevObj,[name]:value}));
}

const submitForm=async (event)=>{
    event.preventDefault();

      try{
          let res=await LoginReqest(formData);
          if(res){
              sessionStorage.setItem('token',res);
              toast.success("Login successfull!");
              navigate('/');
          }else {
              toast.warning("Username & Password Wrong !");
              navigate('/login');
          }

      }
      catch(err){
          console.error(err);
          alert("Login failed due to login");

      }

}


    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-6 mx-auto">
                        <div className="card">
                            <div className="card-header ">
                                <h2>Login</h2>
                            </div>
                            <div className="card-body">
                                <form onSubmit={submitForm}>
                                   <div className="mb-3">
                                       <input onChange={inputHandler} className="form-control" type="email" name="email" placeholder="Email" required />
                                   </div>
                                    <div className="mb-3">
                                        <input onChange={inputHandler} className="form-control" type="password" name="password" placeholder="Password" required />
                                    </div>
                                    <div className="mb-3 text-center">
                                        <button className="btn btn-success">Login</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default LoginForm;
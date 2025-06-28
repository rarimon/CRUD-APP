import React from 'react';

const LoginForm = () => {
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
                                <form>
                                   <div className="mb-3">
                                       <input className="form-control" type="email" name="email" placeholder="Email" required />
                                   </div>
                                    <div className="mb-3">
                                        <input className="form-control" type="password" name="password" placeholder="Password" required />
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
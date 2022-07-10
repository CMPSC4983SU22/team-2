import React from 'react'
import { Link } from 'react-router-dom';
import './auth.css';

function Login(props) {
    const { handleInputChange, handleLogin, info, errorInfo, togglePassword, showPassword, handleTestLogin } = props;
    return (
        <section id="login">
            <form onSubmit={handleLogin}>
                <div className="flex flex_column h_screen_100">
                    <div className="login_body border px-4 py-2">
                        <div className="login_header">
                            <h4 className="py-2 font_bold text_center">Login</h4>
                        </div>
                        <div className="login_email py-1">
                            <div className="input_group flex align_start flex_dcolumn">
                                <label>Email address</label>
                                <input
                                    type="text"
                                    placeholder="abc@gmail.com"
                                    className="input w-100"
                                    onChange={(e) => handleInputChange(e.target.value, 'email')}
                                    value={info?.email}
                                />
                                {errorInfo?.email && (
                                    <p className='input_errormsg'>{errorInfo.email}</p>
                                )}
                            </div>
                        </div>
                        <div className="login_password py-1">
                            <div className="input_group flex align_start flex_dcolumn">
                                <label>Password</label>
                                <div className="input_password">
                                    <span>
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            placeholder="**********"
                                            className="input"
                                            onChange={(e) => handleInputChange(e.target.value, 'password')}
                                            value={info?.password}
                                        />
                                        <i className={showPassword ? 'fa fa-eye' : 'fa fa-eye-slash'} onClick={togglePassword}></i>
                                    </span>
                                </div>
                                {errorInfo?.password && (
                                    <p className='input_errormsg'>{errorInfo.password}</p>
                                )}
                            </div>
                        </div>
                        {errorInfo?.error && (
                            <p className='input_errormsg'>{errorInfo.error}</p>
                        )}
                        <button
                            onClick={handleTestLogin}
                            className="login_btn btn btn_primary w-100"
                        >
                            Test login
                        </button>
                        <button
                            className="login_btn btn btn_primary w-100"
                        >Login</button>
                        <p className="login_new_acc text_center m-1"><Link to='/signup'>Create New Account </Link></p>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default Login
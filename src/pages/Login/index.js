import axios from 'axios';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from '../../components/auth/login';
import { useAuth } from '../../context';
import { useDocumentTitle } from '../../hooks/useDocumentTitle';

export const LoginPage = () => {
    const [info, setUserInfo] = useState({
        email: '', password: ''
    });
    const [errorInfo, setErrorInfo] = useState({
        email: '', password: '', error: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const { updateUser } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "";

    useDocumentTitle('Retro Cart | Login');


    const handleInputChange = (targetValue, type) => {
        if (type === 'email') {
            setErrorInfo({ ...errorInfo, email: '', error: '' });
        }
        if (type === 'password') {
            setErrorInfo({ ...errorInfo, password: '', error: '' });
        }
        setUserInfo({ ...info, [type]: targetValue });
    }

    const handleValidation = () => {
        const { email, password } = info;
        if (!email && !password) {
            setErrorInfo({ ...errorInfo, email: 'Please enter email id', password: 'Please enter password' });
            return false;
        }
        if (!email) {
            setErrorInfo({ ...errorInfo, email: 'Please enter email id', error: '' });
            return false;
        }
        if (!password) {
            setErrorInfo({ ...errorInfo, password: 'Please enter password', error: '' });
            return false;
        }
        return true;
    }

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            if (handleValidation()) {
                const { status, data: { encodedToken } } = await axios.post("/api/auth/login", info)
                if (status === 200 && encodedToken) {
                    updateUser(info);
                    localStorage.setItem("retro-token", encodedToken);
                    navigate(from, { replace: true });
                } else {
                    throw new Error('Email or Password is incorrect');
                }
            }
        } catch (error) {
            setErrorInfo({ error: 'Email or Password is incorrect' });
        }
    }
    return (
        <Login
            handleInputChange={handleInputChange}
            handleLogin={handleLogin}
            info={info}
            errorInfo={errorInfo}
            togglePassword={() => setShowPassword((showPassword) => !showPassword)}
            showPassword={showPassword}
            handleTestLogin={() => {
                setUserInfo({
                    email: "ben@gmail.com",
                    password: "ben",
                });
                updateUser({
                    email: "ben@gmail.com",
                    password: "ben",
                })
                navigate(from, { replace: true });
            }}
        />
    )
}
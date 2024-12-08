import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../graphql/mutations/authMutations';
import logo from '../../img/auth/logo.svg';
import eyeOpen from '../../img/auth/eye-open.svg';
import eyeClose from '../../img/auth/eye-close.svg';

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [loginUser] = useMutation(LOGIN_USER);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);
    const handleRememberMeChange = (e: React.ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            console.log('Submitting login form with:', formData);
            const { data } = await loginUser({
                variables: {
                    username: formData.username,
                    password: formData.password,
                },
            });
            console.log('Login successful:', data);
            localStorage.setItem('accessToken', data.login.accessToken);
            localStorage.setItem('refreshToken', data.login.refreshToken);
            window.location.href = '/dashboard';
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <div className="container-login100">
            <div className="wrap-login100 p-t-85 p-b-20">
                <form className="login100-form validate-form" onSubmit={handleSubmit}>
                    <span className="login100-form-avatar-container">
                        <img src={logo} alt="Logo" className="login100-form-avatar" />
                    </span>
                    <div className="wrap-input100 validate-input m-t-85" data-validate="Enter username">
                        <input
                            className={`input100 ${formData.username ? 'has-val' : ''}`}
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <span className="focus-input100" data-placeholder="Username"></span>
                    </div>
                    <div className="wrap-input100 validate-input" data-validate="Enter password">
                        <input
                            className={`input100 ${formData.password ? 'has-val' : ''}`}
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <span className="focus-input100" data-placeholder="Password"></span>
                        <button
                            type="button"
                            className={`eye-icon ${showPassword ? 'open' : 'closed'}`}
                            onClick={togglePasswordVisibility}
                        >
                            <img
                                src={showPassword ? eyeOpen : eyeClose}
                                alt={showPassword ? 'Hide password' : 'Show password'}
                            />
                        </button>
                    </div>
                    <div className="remember-me-container">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={handleRememberMeChange}
                        />
                        <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn">
                            Login
                        </button>
                    </div>
                    <ul className="login-more p-t-190">
                        <li className="m-b-8">
                            <span className="txt1">
                                Forgot&nbsp;
                            </span>
                            <a href="#" className="txt2">
                                Username / Password?
                            </a>
                        </li>
                        <li>
                            <span className="txt1">
                                Don’t have an account?&nbsp;
                            </span>
                            <a href="/register" className="txt2">
                                Sign up
                            </a>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default Login;

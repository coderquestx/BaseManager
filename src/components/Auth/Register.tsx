import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { REGISTER_USER } from '../../graphql/mutations/authMutations';
import '../../styles/Auth/Login.css';
import logo from '../../img/auth/logo.svg'; /
import eyeOpen from '../../img/auth/eye-open.svg';
import eyeClose from '../../img/auth/eye-close.svg';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [registerUser] = useMutation(REGISTER_USER);
    const [error, setError] = useState<string | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError(null);
        setSuccessMessage(null);

        try {
            const { data } = await registerUser({
                variables: {
                    username: formData.username,
                    password: formData.password,
                    email: formData.email,
                },
            });

            console.log('Registration successful:', data);
            setSuccessMessage('Registration successful! Redirecting to login...');
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            console.error('Error registering:', error);

            if (error instanceof Error) {
                if (error.message.includes('Failed to fetch')) {
                    setError('Network error: Failed to fetch. Please check your internet connection or server status.');
                } else if (error.message.includes('Network Error')) {
                    setError('Network error: Please check your internet connection or server status.');
                } else {
                    setError(`Error: ${error.message}`);
                }
            } else {
                setError('An unknown error occurred. Please try again.');
            }
        }
    };

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

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
                    <div className="wrap-input100 validate-input m-b-35" data-validate="Enter email">
                        <input
                            className={`input100 ${formData.email ? 'has-val' : ''}`}
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <span className="focus-input100" data-placeholder="Email"></span>
                    </div>
                    <div className="wrap-input100 validate-input m-b-50" data-validate="Enter password">
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
                    <div className="container-login100-form-btn">
                        <button className="login100-form-btn">
                            Register
                        </button>
                    </div>
                    {error && <div className="error-message">{error}</div>}
                    {successMessage && <div className="success-message">{successMessage}</div>}
                    <ul className="login-more p-t-190">
                        <li className="m-b-8">
                            <span className="txt1">
                                Already have an account?&nbsp;
                            </span>
                            <a href="/login" className="txt2">
                                Login
                            </a>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default Register;

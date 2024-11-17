import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { useState } from 'react';
import { auth } from '../firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/')
            })
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                if (auth) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img className='logo' src="amazon_logo.png" alt="" />
            </Link>

            <div className="container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='signInButton'>Sign In</button>
                </form>

                <p>By continuing, you agree to Amazon Conditions of Use and <span>Privacy Notice</span>.</p>
                <button onClick={register} className='registorButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login;

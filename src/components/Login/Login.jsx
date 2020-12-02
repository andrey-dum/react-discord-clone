import React from 'react';

import './index.css';
import { auth, provider } from '../../firebase';

const Login = () => {
    const signIn = () => {
        // google login
        auth.signInWithPopup(provider)
        .catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/98/Discord_logo.svg/800px-Discord_logo.svg.png" alt=""/>
            </div>

            <button onClick={signIn}>Sign In</button>
        </div>
    );
}

export default Login;


import React, { useState } from 'react';

const Register = () =>
{
    const [ alreadyRegister, setAlreadyRegister ] = useState( false );
    return (
        <div>
            <h1>Register</h1>
            { alreadyRegister ? <form>
                <label>email: <input type='email' name="email" /></label> <br></br>
                <label>Password: <input type='password' name="password" /></label> <br></br>
                <input value='Login' type='submit' />
            </form> : <form>
                <label>First Name: <input type='text' name="firstName" /></label> <br></br>
                <label>Last Name: <input type='text' name="lastName" /></label> <br></br>
                <label>email: <input type='email' name="email" /></label> <br></br>
                <label>password: <input type='password' name="password" /></label> <br></br>
                <input value='Register' type='submit' />
            </form>
            }

            <h3 onClick={ () =>
            {
                setAlreadyRegister( !alreadyRegister );
            } }>{ alreadyRegister ? "Want To Sign-up?" : 'Already have an Account ?' }</h3>
        </div>
    );
};

export default Register;
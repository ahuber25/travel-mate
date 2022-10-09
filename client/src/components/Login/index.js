import React, { useState } from "react";

function Login() {

    const [ signUp, setSignUp ] = useState(false)

        return (
            <section className="login">
        <div className="signin">

            {!signUp ? (            
            <form className="logsign logging">
            <h2>Login</h2>
                <label>Username:</label> <input type="text" name="username" /><br/>
                <label>Password:</label> <input type="text" name="password" /><br/>
                <input type="submit" value="Submit" /><br/>

                <span onClick={() => {
                    setSignUp(true)
                }}>Don't have an Account? Sign up!</span>
            
            </form>
            ) : (
            <form className="logsign">
            <h2>Signup</h2>
            <label>Name:</label> <input type="text" name="name" /><br/>
            <label>Username:</label> <input type="text" name="username" /><br/>
            <label>Email:</label> <input type="text" name="email" /><br/>
            <label>Password:</label> <input type="text" name="password" /><br/>
            <input type="submit" value="Submit" /><br/>
            <span onClick={() => {
                    setSignUp(false)
                }}>Have an account? Log in!</span>
        </form>
        )}
        </div>
        </section>
        )
    }

export default Login
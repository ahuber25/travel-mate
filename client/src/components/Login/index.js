import React, { Component } from "react";

class Login extends Component {
    render() {

        return (
            <section className="login">
        <div className="signin">
            
            <form className="logsign">
            <h2>Login</h2>
                <label>Username:</label> <input type="text" name="username" /><br/>
                <label>Password:</label> <input type="text" name="password" /><br/>
                <input type="submit" value="Submit" />
            
            </form>
            <form className="logsign">
            <h2>Signup</h2>
            <label>Name:</label> <input type="text" name="name" /><br/>
            <label>Username:</label> <input type="text" name="username" /><br/>
            <label>Email:</label> <input type="text" name="email" /><br/>
            <label>Password:</label> <input type="text" name="password" /><br/>
            <input type="submit" value="Submit" />
        </form>
        </div>
        </section>
        )
    }
}

export default Login
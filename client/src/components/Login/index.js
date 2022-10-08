import React from "react";

function Login() {

    return (<div>
        <h2>Login</h2>
        <form>
            <label>
                Username:
            <input type="text" name="username" />
            </label>
            <label>
                Password:
            <input type="text" name="password" />
            </label>
            <input type="submit" value="Submit" />
        
        </form>
        <h2>Signup</h2>
        <form>
        <label>
            Name:
        <input type="text" name="name" />
        </label>
        <label>
            Email:
        <input type="text" name="email" />
        </label>
        <label>
            Password:
        <input type="text" name="password" />
        </label>
        <input type="submit" value="Submit" />
    </form>
    </div>
    )
}

export default Login
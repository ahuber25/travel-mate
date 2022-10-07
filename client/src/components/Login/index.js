import React from "react";

function Login() {

    return (
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
    )
}

export default Login
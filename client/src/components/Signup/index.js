import React from "react";

function Signup() {

    return (
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
    )
}

export default Signup
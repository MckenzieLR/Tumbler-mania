import React, { useState } from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "./login.css"


export const Login = () => {
    const [email, set] = useState("kenzie@gmail.com")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`https://tumbler-mania-db.herokuapp.com/users?email=${email}&_embed=customers`)
            .then(res => res.json())
            .then(foundUsers => {
                if (foundUsers.length === 1) {
                    const user = foundUsers[0]
                    localStorage.setItem("tumbler_user", JSON.stringify({
                        id: user.id,
                        staff: user.isStaff,
                        customerId: user?.customers[0]?.id
                    }))

                    navigate("/home")
                }
                else {
                    window.alert("Invalid login")
                }
            })
    }

    return (
        <main className="container--login">
            <section>
            <h1 className="loginHeader">Tumbler Mania</h1>
                <form className="form--login" onSubmit={handleLogin}>
                    
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label className="formName"  htmlFor="inputEmail"> Email address </label>
                        <input type="email"
                            value={email}
                            onChange={evt => set(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <button className="button-62 btn-primary" type="submit">
                            Sign in
                        </button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}
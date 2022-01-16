import React, {useState} from "react";
import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import styles from "../../styles/Home.module.css";

const SignInForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:3000/api/auth/login", {
                username,
                password,
            })
            .then((res) => {

                Cookies.set("access_token", res.data.access_token);
                const decoded = jwt.verify(Cookies.get("access_token"), "myrottentomatoes");
                console.log(decoded);
                alert("login success !")
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className={styles.Log}>
            <form onSubmit={handleLogin} id={styles.navBar}>

                <br/>
                <label htmlFor="username">Username</label>
                <br/>
                <input
                    type="text"
                    name="username"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                />

                <br/><br/>
                <label htmlFor="password">Mot de passe</label>
                <br/>
                <input
                    type="password"
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <br/><br/>
                <button className={styles.NavBar} type="submit">CONNEXION</button>
            </form>
        </div>
    );
};

export default SignInForm;

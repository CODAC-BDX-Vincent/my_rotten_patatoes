import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import SignInForm from "./SignInForm";
import Logout from "./Logout";
import cookieCutter from "cookie-cutter";

const Log = (props) => {
  const [signUpModal, setSignUpModal] = useState(props.signup);
  const [signInModal, setSignInModal] = useState(props.signin);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setSignInModal(true);
    }
  };
  return (
    <div className="connection-from">
      <div className="form-container">
        <div>
          <div
            onClick={handleModals}
            id="register"
            className={signUpModal ? "active-btn" : null}
          >
            S inscrire
          </div>
          <br />
          <br />
          <div
            onClick={handleModals}
            id="login"
            className={signInModal ? "active-btn" : null}
          >
            Se connecter
          </div>
          <br />
          <br />
        </div>
        {signUpModal && <SignUpForm />}
        <br />
        {signInModal && <SignInForm />}
      </div>
      <Logout />
    </div>
  );
};

export default Log;

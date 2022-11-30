import React, { useRef, useState, useEffect } from "react";
import { GitHub, Google } from "@mui/icons-material";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import EmailField from "./inputFields/EmailField";
import PasswordField from "./inputFields/PasswordField";
import { SubmitBtn } from "./inputFields/SubmitBtn";

const Login = () => {
  const [isNotSignedUp, setIsNotSignedUp] = useState(false);
  const {
    setSpinner,
    modal,
    setModal,
    signUp,
    login,
    loginGoogle,
    loginGithub,
    setAlert,
  } = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();

  useEffect(() => {
    if (isNotSignedUp) {
      setModal({ ...modal, title: "Sign Up" });
    } else {
      setModal({ ...modal, title: "Sign In" });
    }
  }, [isNotSignedUp, setModal]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSpinner(true);
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    if (isNotSignedUp) {
      const confirmPassword = confirmRef.current.value;
      try {
        if (password !== confirmPassword) {
          throw new Error("Oh.. Your passwords don't match.");
        }
        await signUp(email, password);
        setModal({ ...modal, isOpen: false });
      } catch (error) {
        setAlert({
          isAlert: true,
          severity: "error",
          message: error.message,
          timeout: 5000,
          location: "modal",
        });
        console.log(error);
      }
    } else {
      try {
        await login(email, password);
        setModal({ ...modal, isOpen: false });
      } catch (error) {
        setAlert({
          isAlert: true,
          severity: "error",
          message: error.message,
          timeout: 5000,
          location: "modal",
        });
        console.log(error);
      }
    }
    setSpinner(false);
  };

  const handleGoogleLogin = async () => {
    try {
      await loginGoogle();
      setModal({ ...modal, isOpen: false });
    } catch (error) {
      setAlert({
        isAlert: true,
        severity: "error",
        message: error.message,
        timeout: 5000,
        location: "modal",
      });
      console.log(error);
    }
  };
  const handleGithubLogin = async () => {
    try {
      await loginGithub();
      setModal({ ...modal, isOpen: false });
    } catch (error) {
      setAlert({
        isAlert: true,
        severity: "error",
        message: error.message,
        timeout: 5000,
        location: "modal",
      });
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <DialogContent dividers>
          <DialogContentText>
            {modal.title.toLowerCase() === "sign up"
              ? "Register account using email and password"
              : "Log in using email and password"}
          </DialogContentText>
          <EmailField {...{ emailRef }} />
          <PasswordField {...{ passwordRef }} />
          {isNotSignedUp && (
            <PasswordField
              {...{
                passwordRef: confirmRef,
                id: "confirmPassword",
                label: "Confirm Password",
              }}
            />
          )}
        </DialogContent>

        <DialogActions sx={{ justifyContent: "space-between", px: "19px" }}>
          <Button size="small">Forgot Password?</Button>
          <SubmitBtn />
        </DialogActions>
      </form>
      <DialogActions sx={{ justifyContent: "left", p: "5px 24px" }}>
        {isNotSignedUp ? "Already a member?" : "Not a member?"}
        <Button onClick={() => setIsNotSignedUp(!isNotSignedUp)}>
          {isNotSignedUp ? "Sign In" : "Sign Up"}
        </Button>
      </DialogActions>
      <DialogActions sx={{ justifyContent: "center", py: "24px" }}>
        <Button
          variant="outlined"
          startIcon={<Google />}
          onClick={handleGoogleLogin}
        >
          Sign in with Google
        </Button>
        <Button
          variant="outlined"
          startIcon={<GitHub />}
          onClick={handleGithubLogin}
        >
          Sign in with Github
        </Button>
      </DialogActions>
    </>
  );
};

export default Login;

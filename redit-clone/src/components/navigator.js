import React from "react";
import logo from "./picture/reddit-logo-text.png";
import style from "./navigator.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useRecoilState } from "recoil";
import Modal from "./modal";
import styles from "./modal.css";
import {
  MagnifyingGlass,
  GoogleLogo,
  AppleLogo,
  KeyReturn,
} from "@phosphor-icons/react";
import { postState, searchBarState } from "../states/atoms";

function Navigator() {
  const [searchBar, setSearchBar] = useRecoilState(searchBarState);
  const [getThePost, setThePost] = useRecoilState(postState);

  // ------ for the search bar ------------

  function FilterItem(search, item) {
    return item.filter((post) => {
      return search.toLowerCase() === ""
        ? post
        : post.tags.toLowerCase().includes(search);
    });
  }

  const navigate = useNavigate();

  // ---------- for the modal -----------------------------------------------
  const [signUp, setSignUp] = useState(false);
  const [logIn, setLogIn] = useState(false);

  const handelClickS = () => {
    if (signUp === false) {
      setSignUp(true);
      setLogIn(false);
    } else {
      setSignUp(false);
    }
  };
  const handelClickL = () => {
    if (logIn === false) {
      setLogIn(true);
      setSignUp(false);
    } else {
      setLogIn(false);
    }
  };

  const ChangeModal = () => {
    if (signUp === true) {
      setLogIn(true);
      setSignUp(false);
    } else {
      setLogIn(false);
      setSignUp(true);
    }
  };

  return (
    <nav className="navigator">
      <img className="logo" src={logo} onClick={() => navigate("/")} />
      <MagnifyingGlass size={20} className="MagnifyingGlass" />
      <input
        className="input"
        placeholder="Search Reddit"
        onChange={(e) => setSearchBar(e.target.value)}
      />

      <button onClick={handelClickS} className="sign-up-btn">
        Sign up
      </button>
      <Modal open={signUp}>
        <button onClick={handelClickS} className="modal-close-btn">
          x
        </button>
        <h3 className="modal-h3">Sign Up </h3>
        <span className="modal-text">
          By continuing, you are setting up a Reddit account and agree to our
          User Agreement and Privacy Policy.{" "}
        </span>
        <span className="modal-checkbox">
          <input type="checkbox" />I agree to get emails about cool stuff on
          Reddit{" "}
        </span>
        <div className="modal-btn1">
          {" "}
          <GoogleLogo
            size={20}
            color="#0000ff"
            weight="bold"
            className="modal-logo"
          />
          Continue with Google
        </div>
        <div className="modal-btn1">
          {" "}
          <AppleLogo size={20} className="modal-logo" />
          Continue with Apple
        </div>
        <span className="modal-or">-----------------OR----------------</span>
        <input className="modal-input" placeholder="Email" />
        <button className="modal-btn1 modal-btn2">Continue</button>
        <span className="modal-text2">
          Alredy a redditor? <u onClick={ChangeModal}>Log In</u>
        </span>
      </Modal>
      <button onClick={handelClickL} className="sign-up-btn">
        Log in
      </button>
      <Modal open={logIn}>
        <button onClick={handelClickL} className="modal-close-btn">
          x
        </button>
        <h3 className="modal-h3">Log In </h3>
        <span className="modal-text">
          By continuing, you are setting up a Reddit account and agree to our
          User Agreement and Privacy Policy.{" "}
        </span>
        <div className="modal-btn1">
          {" "}
          <GoogleLogo
            size={20}
            color="#0000ff"
            weight="bold"
            className="modal-logo"
          />
          Continue with Google
        </div>
        <div className="modal-btn1">
          {" "}
          <AppleLogo size={20} className="modal-logo" />
          Continue with Apple
        </div>
        <span className="modal-or">-----------------OR----------------</span>
        <input className="modal-input" placeholder="Username" />
        <input className="modal-input" placeholder="Password" />
        <span>
          Forgot your <u>username</u> or <u>password?</u>{" "}
        </span>
        <button className="modal-btn1 modal-btn2">Continue</button>
        <span className="modal-text2">
          New to reddit? <u onClick={ChangeModal}>Sign Up</u>
        </span>
      </Modal>
    </nav>
  );
}

export default Navigator;

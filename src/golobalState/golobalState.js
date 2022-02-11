import React, { useState } from "react";

import SimpelContext from "../contextApi/simpelContext";

export default function GolobalState(props) {
  const [toggelState, setToggelState] = useState(1);
  const [user, setUser] = useState([]);
  const [userName, setUserName] = useState("");
  const [count, setCount] = useState(1);
  const [show] = useState(false);
  const [showCheck, setShowCheck] = useState();
  // add user
  const handelCreateUser = (e) => {
    e.preventDefault();
    const newUser = {
      id: count,
      userName,
      complete: show,
      checkBox: false,
    };
    if (userName !== "") {
      setUser([...user].concat(newUser));
      setCount(count + 1);
      setUserName("");
    }
  };

  // done user
  const handelDone = (item) => {
    setUser(user.map((i) => (i.id === item ? { ...i, complete: true } : i)));
  };
  //unDone user
  const handelUnDone = (item) => {
    setUser(user.map((i) => (i.id === item ? { ...i, complete: false } : i)));
  };
  //all done user
  const handelAllDone = () => {
    setUser(user.map((i) => (!i.complete ? { ...i, complete: true } : i)));
  };
  //all undone user
  const handelAllUnDone = () => {
    setUser(user.map((i) => (i.complete ? { ...i, complete: false } : i)));
  };

  // add delete user
  const handelAllDelete = () => {
    setUser([]);
    setShowCheck(false);
  };
  // delete user
  const handelDelete = (item) => {
    setUser(user.filter((i) => i.id !== item));
  };
  // add all check user
  const handelCheck = (e) => {
    let checked = e.target.checked;

    if (user.length !== 0) {
      setUser(
        user.map((i) => {
          i.checkBox = checked;
          return i;
        })
      );
      setShowCheck(e.target.checked);
    }
  };
  //add check user
  const handelChekBox = (e, item) => {
    let checked = e.target.checked;
    setUser(user.map((i) => (i.id === item ? { ...i, checkBox: checked } : i)));
    // console.log(user.map((i) => (i.checkBox ? checked : i)));
  };
  return (
    <SimpelContext.Provider
      value={{
        user,
        userName,
        setUserName,
        toggelState,
        showCheck,
        show,
        setToggelState,
        handelCreateUser,
        handelDone,
        handelUnDone,
        handelAllUnDone,
        handelAllDone,
        handelDelete,
        handelAllDelete,
        handelCheck,
        handelChekBox,
      }}
    >
      {props.children}
    </SimpelContext.Provider>
  );
}

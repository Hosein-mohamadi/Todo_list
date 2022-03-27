import React, { useContext } from "react";

import "./Todo.css";

import SimpelContext from "./contextApi/simpelContext";
import UnDoneTabe from "./components/UnDoneTabe";
import DoneTabe from "./components/DoneTabe";
import AllTabe from "./components/AllTabe";

function App() {
  const context = useContext(SimpelContext);

  return (
    <div className="app_parent">
      <div>
        <h1 className="app_titel">Hi,Welcome!</h1>
        <div>
          <form onSubmit={(e) => context.handelCreateUser(e)}>
            <label className="app_user">Username</label>
            <div className="app_parent_div">
              <input
                type="text"
                onChange={(e) => context?.setUserName(e.target.value)}
                className="inputUser"
                value={context.userName}
                id="website-admin"
                placeholder="Bonnie Green"
              />
              <button type="submit" className="labelSpan">
                add
              </button>
            </div>
          </form>
          {context.checkedAll ? (
            <div className="formDiv">
              <div className="buttonDiv">
                <button
                  className="btnUn"
                  onClick={() => context.handelAllUnDone()}
                >
                  UnDone's
                </button>
                <button
                  className="btnEdit"
                  onClick={() => context.handelAllDone()}
                >
                  Done's
                </button>
                <button
                  className="btnDelete"
                  onClick={() => context.handelAllDelete()}
                >
                  Delete
                </button>
              </div>
            </div>
          ) : null}
        </div>
        <div className="tabDiv">
          <div className="Tabe" onClick={() => context.setToggelState(1)}>
            All
          </div>
          <div className="Tabe" onClick={() => context.setToggelState(2)}>
            Done's
          </div>
          <div className="Tabe" onClick={() => context.setToggelState(3)}>
            UnDone's
          </div>
        </div>
        <div className="divInputCheckbox">
          <div className="inputCheckBox">
            <label className="checkLabel">All</label>
            <input
              onChange={(e) => context.handelCheck(e)}
              checked={context.checkedAll}
              type="checkbox"
              className="checkBox"
            />
          </div>
        </div>
      </div>

      <hr />
      <div className="divTabel">
        <div className={context.toggelState === 1 ? "Tabe_1" : "Tabes"}>
          <AllTabe />
        </div>
        <div className={context.toggelState === 2 ? "Tabe_2" : "Tabes"}>
          <DoneTabe />
        </div>
        <div className={context.toggelState === 3 ? "Tabe_3" : "Tabes"}>
          <UnDoneTabe />
        </div>
      </div>
    </div>
  );
}

export default App;

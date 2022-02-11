import React, { useContext } from "react";

import styles from "./Todo.module.css";

import SimpelContext from "./contextApi/simpelContext";
import UnDoneTabe from "./components/UnDoneTabe";
import DoneTabe from "./components/DoneTabe";
import AllTabe from "./components/AllTabe";

function App() {
  const context = useContext(SimpelContext);
  return (
    <div className={styles.app_parent}>
      <div>
        <h1 className={styles.app_titel}>Hi,Welcome!</h1>
        <div>
          <form onSubmit={(e) => context.handelCreateUser(e)}>
            <label className={styles.app_user}>Username</label>
            <div className={styles.app_parent_div}>
              <input
                type="text"
                onChange={(e) => context?.setUserName(e.target.value)}
                className={styles.inputUser}
                value={context.userName}
                id="website-admin"
                placeholder="Bonnie Green"
              />
              <button type="submit" className={styles.labelSpan}>
                add
              </button>
            </div>
          </form>
          {context.showCheck ? (
            <div className={styles.formDiv}>
              <div className={styles.buttonDiv}>
                <button
                  className={styles.btnUn}
                  onClick={() => context.handelAllUnDone()}
                >
                  UnDone's
                </button>
                <button
                  className={styles.btnEdit}
                  onClick={() => context.handelAllDone()}
                >
                  Done's
                </button>
                <button
                  className={styles.btnDelete}
                  onClick={() => context.handelAllDelete()}
                >
                  Delete
                </button>
              </div>
            </div>
          ) : null}
        </div>
        <div className={styles.tabDiv}>
          <div
            className={styles.Tabe}
            onClick={() => context.setToggelState(1)}
          >
            All
          </div>
          <div
            className={styles.Tabe}
            onClick={() => context.setToggelState(2)}
          >
            Done's
          </div>
          <div
            className={styles.Tabe}
            onClick={() => context.setToggelState(3)}
          >
            UnDone's
          </div>
        </div>
        <div className={styles.divInputCheckbox}>
          <div className={styles.inputCheckBox}>
            <label className={styles.checkLabel}>All</label>
            <input
              onChange={(e) => context.handelCheck(e)}
              checked={
                context.user.length !== 0 ? context.user.checkBox : false
              }
              type="checkbox"
              className={styles.checkBox}
            />
          </div>
        </div>
      </div>

      <hr />
      <div className={styles.divTabel}>
        <div
          className={context.toggelState === 1 ? styles.Tabe_1 : styles.Tabes}
        >
          <AllTabe />
        </div>
        <div
          className={context.toggelState === 2 ? styles.Tabe_2 : styles.Tabes}
        >
          <DoneTabe />
        </div>
        <div
          className={context.toggelState === 3 ? styles.Tabe_3 : styles.Tabes}
        >
          <UnDoneTabe />
        </div>
      </div>
    </div>
  );
}

export default App;

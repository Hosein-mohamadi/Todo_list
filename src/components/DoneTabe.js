import React, { useContext } from "react";
import styles from "../Todo.module.css";
import SimpelContext from "../contextApi/simpelContext";

export default function DoneTabe() {
  const context = useContext(SimpelContext);

  return (
    <div>
      <table className={styles.tabel}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.title}>Checked</th>
            <th className={styles.title}>Name</th>
            <th className={styles.title}>Compelete</th>
            <th className={styles.title}>Done's</th>
            {/* <th className={styles.title}>UnDone's</th> */}
            <th className={styles.title}>Delete</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {context.user.map(
            (item) =>
              item.complete && (
                <tr className={styles.tr} key={item.id}>
                  <td className={styles.td_Id}>
                    <input
                      onChange={(e) => context.handelChekBox(e, item.id)}
                      defaultChecked={item.checkBox}
                      type="checkbox"
                      className={styles.checkBox}
                      required
                    />
                  </td>
                  <td className={styles.td_Name}>
                    <div>
                      {item.checkBox ? (
                        <del>{item.userName}</del>
                      ) : (
                        item.userName
                      )}
                    </div>
                  </td>
                  <td className={styles.td_Id}>
                    {" "}
                    {item.complete ? (
                      <span>Complete</span>
                    ) : (
                      <span>is Complete</span>
                    )}
                  </td>
                  {item.complete ? (
                    <td className={styles.td_Id}>
                      <button
                        className={styles.btnUn}
                        onClick={() => context.handelUnDone(item.id)}
                      >
                        UnDone's
                      </button>
                    </td>
                  ) : (
                    <td className={styles.td_Name}>
                      <button
                        className={styles.btnEdit}
                        onClick={() => context.handelDone(item.id)}
                      >
                        Done's
                      </button>
                    </td>
                  )}
                  <td className={styles.td_Id}>
                    <button
                      className={styles.btnDelete}
                      onClick={() => context.handelDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
}

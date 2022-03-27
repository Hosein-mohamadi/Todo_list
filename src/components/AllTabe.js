import React, { useContext } from "react";
import "../Todo.css";
import SimpelContext from "../contextApi/simpelContext";

export default function AllTabe() {
  const context = useContext(SimpelContext);
  console.log(context.user);
  return (
    <div>
      <table className="tabel">
        <thead className="thead">
          <tr>
            <th className="title">Checked</th>
            <th className="title">Name</th>
            <th className="title">Compelete</th>
            <th className="title">Done's</th>
            <th className="title">Delete</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {context.user.map((item) => (
            <tr className="tr" key={item.id}>
              <td className="td_Id">
                <input
                  onChange={(e) => context.handelChekBox(e, item.id)}
                  defaultChecked={item.checkBox}
                  value={item.checkBox}
                  checked={item.checkBox}
                  type="checkbox"
                  className="checkBox"
                  required
                />
              </td>
              <td className="td_Name">
                <div>
                  {item.checkBox || context.show ? (
                    <del>{item.userName}</del>
                  ) : (
                    item.userName
                  )}
                </div>
              </td>
              <td className="td_Id">
                {item.complete ? (
                  <span>Complete</span>
                ) : (
                  <span>is Complete</span>
                )}
              </td>
              {item.complete ? (
                <td className="td_Id">
                  <button
                    className="btnUn"
                    onClick={() => context.handelUnDone(item.id)}
                  >
                    UnDone's
                  </button>
                </td>
              ) : (
                <td className="td_Name">
                  <button
                    className="btnEdit"
                    onClick={() => context.handelDone(item.id)}
                  >
                    Done's
                  </button>
                </td>
              )}
              <td className="td_Id">
                <button
                  className="btnDelete"
                  onClick={() => context.handelDelete(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

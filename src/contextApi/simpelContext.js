import { createContext } from "react";

const SimpelContext = createContext({
  user: [],
  userName: "",
  toggelState: 1,
  showCheck: false,
  setUserName: () => {},
  checkedAll: () => {},
  setToggelState: () => {},
  handelCreateUser: () => {},
  handelDone: () => {},
  handelUnDone: () => {},
  handelAllUnDone: () => {},
  handelAllDone: () => {},
  handelAllDelete: () => {},
  handelDelete: () => {},
  handelCheck: () => {},
  handelChekBox: () => {},
});

export default SimpelContext;

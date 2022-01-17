import { createContext } from "react";

const SimpelContext = createContext({
  user: [],
  userName: "",
  setUserName: () => {},
  toggelState: 1,
  showCheck: false,
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
